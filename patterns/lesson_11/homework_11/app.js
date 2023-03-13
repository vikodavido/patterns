console.log("Hello, this is Homework #11");

// TODO: implement ONE of following tasks using Strategy pattern:
// Task 1: https://leetcode.com/problems/fizz-buzz/
// Two strategies:
// a. Return all numbers: ["1","2","Fizz","4","Buzz"]
// b. Return numbers without any processing: ["1","2","3","4","5"]
//
// Task 2: https://leetcode.com/problems/fibonacci-number/
// Two strategies:
// a. Using recursion
// b. Using memoization



function strategyBaseAnswer(n) {
    let answer = [];
    for(let i = 1; i <= n; i++) {
        answer.push(String(i));
    }
    return answer;
}
function strategyFizzBuzzAnswer(n) {
    let answer = [];
    for(let i = 1; i <= n; i++) {
        if(i % 3 == 0 && i % 5 == 0 ) {
            answer.push('FizzBuzz');  
        } else if(i % 3 == 0) {
            answer.push('Fizz');
        } else if(i % 5 == 0) {
            answer.push('Buzz');
        } else {
            answer.push(String(i));
        }
    }
    return answer;
}


class Strategy {
    constructor(strategy) {
        this._strategy = strategy;
        this._amount = 1
    }
    checkout() {
        return this._strategy(this._amount)
    }
    setAmount(amount) {
        this._amount = amount
    }
}
const baseAnswer = new Strategy(strategyBaseAnswer)
baseAnswer.setAmount(5)
console.log('strategyBaseAnswer: ' + baseAnswer.checkout())

const fizzBuzzAnswer = new Strategy(strategyFizzBuzzAnswer)
fizzBuzzAnswer.setAmount(5)
console.log('strategyFizzBuzzAnswer: ' + fizzBuzzAnswer.checkout())
