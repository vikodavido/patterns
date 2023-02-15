console.log("Hello, this is Homework #04");

// task: https://codeforces.com/contest/1707/problem/A
// source code: https://codeforces.com/contest/1707/submission/164546927

const input = ["5",
    "1 1",
    "1",
    "2 1",
    "1 2",
    "3 1",
    "1 2 1",
    "4 2",
    "1 4 3 1",
    "5 2",
    "5 1 2 4 3"];

const testCases = [];


function parseInput(input) {
    let T = parseInt(input[0]);
    let index = 0;
    
    function preparationTestCase(value) {
        return value.trim().split(" ").map((a)=>parseInt(a))
    }
    for (let i = 0; i < T; i++) {
        index++;
        const [n, q] = preparationTestCase(input[index])
        index++; 
        const a = preparationTestCase(input[index])
            
        const testCase = {
            n,
            q,
            a,
        };
        testCases.push(testCase);
    }
    return testCases.forEach(solution);
}

function solution(testCase) {
    const {n, q, a} = testCase;

    let result = "";
    let iq = 0;

    function indicator(i) {
        if (i <= iq) return '1';
        if (i > iq && iq < q) {
            iq++;
            return '1'
        } else return '0'
    }

    for (let i = 0; i < n; i++) {
        result = indicator(a[i]) + result
    }
    
    console.log(result);
    return result
}

parseInput(input);

