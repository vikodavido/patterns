console.log("Hello, this is Homework #10");

// TODO: use any of ORM patterns to access data from the `people.sqlite3' database.
// Task:
// 1. output to console: first record
// 2. output to console: number of records not marked as deleted
// 3. mark last record as deleted
// 4. repeat task #2

class Person {
    constructor() {
      this.list = [];
    }
  
    execute(command, ...args) {     
      return command.execute(this.list, ...args);
    }
  }
  
  class Command {
    constructor(execute) {
      this.execute = execute;
    }
  }  

  function FirstRecordCommand() {
  
    return new Command(() => {

      db.get("SELECT * FROM person WHERE Id=1", (err, row) => {
        if (err) {
          return console.error(err.message);
        }      
        console.log(`first record`, row);       
      });

    });
  }
  
  function MarkedDeletedCommand(value) {

    return new Command(() => {

      db.each(`SELECT * FROM person WHERE IsDeleted='${value}'`, (err, row) => {
        if (err) {
          return console.error(err.message);
        } 
        console.log('number of records not marked as deleted', row.Id);    
      });

    });
  }
  
  function MarkDeletedCommand(id, value) {
    return new Command(() => {

      let data = [value, id];
      let sql = `UPDATE person
                  SET IsDeleted = ?
                  WHERE Id = ?`;
      
      db.run(sql, data, function(err) {
        if (err) {
          return console.error(err.message);
        }  
        console.log(`UPDATE: ${this.changes}, Id: ${id}`) 
      });
    }
     
    );
  }
  

  const infoRerson = new Person();
  
  const sqlite3 = require('sqlite3').verbose();
  const db = new sqlite3.Database('people.sqlite3');

  db.serialize(() => {
      infoRerson.execute(new FirstRecordCommand());
      infoRerson.execute(new MarkedDeletedCommand('true'));
      infoRerson.execute(new MarkDeletedCommand(12, 'true'));      
      infoRerson.execute(new MarkedDeletedCommand('true'));
  });

  db.close(); 