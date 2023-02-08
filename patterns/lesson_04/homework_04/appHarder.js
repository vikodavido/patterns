console.log("Hello, this is Homework #04");

// task: https://codeforces.com/contest/1676/problem/F
// source code: https://codeforces.com/contest/1676/submission/156749102

var obj; var inLine = []; var outputList = [];var retcode = new Set();

function makeClone(obj){return (obj instanceof Set) ? new Set(Array.from(obj)) : JSON.parse(JSON.stringify(obj));}
function nextArray(size, code){
    var ret = new Array(size);
    for(var i = 0; i < size; i++){
        if(code == 'int'){
            ret[i] = nextInt();
        }else if(code == 'long'){
            ret[i] = nextLong();
        }else if(code == 'double'){
            ret[i] = nextDouble();
        }else{
            ret[i] = next();
        }
    }
    return ret;
}
function nextIntArray(size){return nextArray(size, 'int');} function nextStrArray(size){return nextArray(size, 'str');} function nextLongArray(size){return nextArray(size, 'long');} function nextDoubleArray(size){return nextArray(size, 'double');}
function nextCharArray(){return myconv(next(),6);}
function next(){return obj.next();} function hasNext(){return obj.hasNext();} function nextInt(){return myconv(next(),1);} function nextLong(){return BigInt(next());} function nextDouble(){return parseFloat(next());}
function getCountMap(list){
    var map = {};
    for(var i = 0; i < list.length; i++){
        if(map[list[i]] == null){
            map[list[i]] = 0;
        }
        map[list[i]]++;
    }
    return map;
}
function init(input){
    return {
        list : input, index : 0, max : input.length,
        hasNext : function(){return (this.index < this.max);},
        next : function(){if(this.hasNext()){return this.list[this.index++];}else{throw 'ArrayIndexOutOfBoundsException ‚There is no more input';}},
        isReturn : function(){return retcode.has(this.index);}
    };
}
function myout(s){outputList.push(s);}
function myerr(s){console.error('debug:' + require('util').inspect(s,false,null));}
function isReturn(){return obj.isReturn();}
//param "no" is
//unknown or outlier : return i. 1: parseInt.
//2: split space. 4: split space and parseInt.
//6: split 1 character. 7: split 1 character and parseInt.
//8: join space. 9: join nextline. 0: join no character.
function myconv(i,no){try{switch(no){case 1:return parseInt(i);case 2:return i.split(' ');case 4:return i.split(' ').map(Number);case 6:return i.split('');case 7:return i.split('').map(Number);case 8:return i.join(' ');case 9:return i.join('\n');case 0:return i.join('');default:return i;}}catch(e){return i;}}

function Main(){
    // test case in nodeJs
    var t = nextInt();
    while(hasNext()){
        solve();
    }
}

function solve() {
    const n = nextInt();
    const k = nextInt();
    const arr = nextIntArray(n);

    const map = new Map();
    let min = Infinity;
    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        if (map.get(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1)
        } else {
            map.set(arr[i], 1);
        }
        min = Math.min(min, arr[i]);
        max = Math.max(max, arr[i])
    }

    // console.log({min, max, map, k})
    let left = min, right = min;
    const ans = [0, 0];
    const keys = [...map.keys()].sort((a, b) => a - b);
    // console.log(keys)
    let index = 0;
    while (right <= max + 1) {
        // console.log({left, right}, keys[index], keys)
        if (map.get(right) >= k){
            // console.log("expand");
            index++;
            right++;
        } else {
            // console.log("sink")
            // console.log(left, right)
            let maxRange = ans[1] - ans[0] + 1;
            if (maxRange <= right -1  - left + 1) {
                ans[0] = left;
                ans[1] = right - 1;
            }
            if (map.get(keys[index]) >= k) {
                left = keys[index];
            } else {
                left = keys[++index];
            }
            right = left;
            // console.log(ans)
        }
    }

    // console.log(ans)

    if (ans[0] === 0 && ans[1] === 0) {
        myout(-1);
    } else {
        myout(`${ans[0]} ${ans[1]}`);
    }
}

const data = ["4",
    "7 2",
    "11 11 12 13 13 14 14",
    "5 1",
    "6 3 5 2 1",
    "6 4",
    "4 3 4 3 3 4",
    "14 2",
    "1 1 2 2 2 3 3 3 3 4 4 4 4 4"];

data.forEach(function(input) {
    var tmp = input.split(' ');
    for (var i = 0; i < tmp.length; i++) {
        inLine.push(tmp[i]);
        if (i == tmp.length - 1) {
            retcode.add(inLine.length);
        }
    }
});
obj = init(inLine);
Main();
console.log(myconv(outputList, 9));
