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
let T;

function parseInput() {
    T = parseInt(input[0]);
    let index = 0;

    for (let i = 0; i < T; i++) {
        index++;
        const [n, q] = input[index]
            .trim()
            .split(" ")
            .map((a) => parseInt(a));
        index++;
        const a = input[index]
            .trim()
            .split(" ")
            .map((a) => parseInt(a));
        const testCase = {
            n,
            q,
            a,
        };

        testCases.push(testCase);
    }
}

function solution(testCase, index) {
    const {n, q, a} = testCase;
    let result = "";
    let iq = 0;
    for (let i = n - 1; i >= 0; i--) {
        if (a[i] <= iq) result = "1" + result;
        else if (a[i] > iq && iq < q) {
            iq++;
            result = "1" + result;
        } else result = "0" + result;
    }

    console.log(result);
}

parseInput();

testCases.forEach(solution);