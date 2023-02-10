console.log("Hello, this is Homework #03");

// TODO: write your code here implementing one of the problems below:
// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/
// https://leetcode.com/problems/jewels-and-stones/
// https://leetcode.com/problems/shuffle-string/

/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {

    const countWords = function(sentence) {
       return sentence.split(' ').length
    }
    //Assignments to Parameters
    sentences = sentences.map(i=>countWords(i))

    return Math.max(...sentences)
};

//-------------------------------- 2---------------------------//
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

var numJewelsInStones = function(jewels, stones) {
    //dublicate code
    let arrStones = stones.split('')
    let arrJewels = jewels.split('')

    let result = [];
    //Substitute Algorithm
    for (let i = 0; i < arrStones.length; i++) {
        for (let jewel of arrJewels) {
            if(jewel == arrStones[i]) {
                result.push(arrStones[i])
            }
        }
      }
 
    // let result = arrStones.filter(i=>arrJewels.includes(i))
    return result.length
};

//----------------------------3------------------------//
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    //unnecessary console, variables
    console.log(s)
    console.log(indices)

    let obj = new Object();
    let arrS = s.split('')

    console.log(arrS)

    for(let i = 0; i < indices.length; i++) {
        obj[indices[i]] = arrS[i]
    }

    // console.log(Object.values(obj).join(''))

    let result = Object.values(obj).join('')

    return result
};
