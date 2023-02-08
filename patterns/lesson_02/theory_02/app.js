console.log("Hello, this is Theory #02");

// TODO 00: Double click, triple click, double click and move
// TODO 01: Double ⇧: Search Everywhere
// TODO 02: Use Search Everywhere to find actions: duplicate, commit, method, parameter, format code
// TODO 03: ⌥ ⏎ : Show Context Actions : Apply Put Elements to different lines; remove unnecessary elements
// TODO 03.2: F2: Next highlighted error
// TODO 04: ⌥ ↑ , ⌥ ↓ : Extend or shrink selection
// TODO 05: ⌘ / , ⌥ ⌘ / : Add/remove line or block comment
// TODO 06:  ⇧ ⌘ ↑, ⇧ ⌘ ↓ : Move function up / down
// TODO 07: Multiple carets
//      ⇧ ⌥ : Rectangular selection : cut
//      ⌥ Click : add caret : show paste
// TODO 08: Tab , ⇧ Tab: Indent/Unindent selected lines
// TODO 09: ⌥ ⌘ ], ⌥ ⌘ [ : Move to code block start/end
// TODO 10: ⌘ B: Go to declaration
// TODO 11: ⌥ ⌘ ← , ⌥ ⌘ → : Navigate back / Navigate forward
// TODO 12: ⌥ ⇧ ⌘ ← , ⌥ ⇧ ⌘ → : move (swap) a code element left/right.
// TODO 13: introduce field for 'newfile.txt'
// TODO 14: show how introduce constant is different (replace 2 occurrences - works only for global)
// TODO 15: ⌘ N : Generate code : create constructor : use path to be initialized
// TODO 16: Introduce parameter for "this.data"
// TODO 17: ⌥ F7 : Find Usages
// TODO 18: renaming using find and replace

class WorkingWithFileDemo {
    fs = require('fs');
    data = 'Demo file contents';;;; // TODO: action 03

    unusedFunc() { // TODO: action 03

    }

    // TODO: action 12: swap
    writeToFile(p1, p2) {
        // TODO: action 03
        this.fs.writeFile('newfile.txt', this.data, function (err) {
            if (err) throw err;
            console.log('File is created successfully.');
        });

        return this;
    }

    readFromFile() {
        this.fs.readFile('newfile.txt',
            function (err, data) {
                if (err) throw err;
                console.log("File content is: " + data.toString('utf8'))
            });
    }
}

new WorkingWithFileDemo().writeToFile("p1", "p2").readFromFile();

let configFile = null;
let configDir = null;
let configValue = null;
