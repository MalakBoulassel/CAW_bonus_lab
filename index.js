//Module CAW
//Boulassel Malak

//Exercice 01

// Qst #01 Swapping two variable in one single line
let v1 = 10;
let v2 = 20;

[v1, v2] = [v2, v1];

console.log(v1); // 20
console.log(v2); // 10

//Qst #02
const numbers = [1, 2, 3];
const letters = ["a", "b", "c"];
const foods = ["mango", "pecan pie"];

const combined = numbers.concat(letters, foods);

console.log(combined); // [1, 2, 3, "a", "b", "c", "mango", "pecan pie"]

//Qst #03
const str = "hello";
const charArray = [...str];

console.log(charArray); // ['h', 'e', 'l', 'l', 'o']


//Qst #04

//a) a = 1; b = 2;  args = [3, 'A', 'B', 'C']
//b) a = 1; b = 2;  args = [] (empty array)
//c) a = 'a' ; b = 'b' ; args = ['c', 'd']


//Exercice 02

// Qst #01
//Converting codes to ES2015 notation
//01

const arr = [3, 5, 8];
const plusOne = arr.map(n => n + 1);

//02
const double = arr => arr.map(val => val * 2);

//03
const obj = {
    numbers: {
      a: 1,
      b: 2
}};
const { a, b } = obj.numbers;
  
//04
const add = (a = 10, b = 10) => {
    return a + b;
  };
  
//Exercice #03

const setOne = arr => [...new Set(arr)];

const getRidOf = (tab, ...val) => tab.filter(item => !val.includes(item));

// Examples
console.log(setOne([4, 5, 5, 2, 2, 4, 3, 1, 5, 2])); 
// [4, 5, 2, 3, 1]

console.log(getRidOf(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 'b', 'e', 'x')); 
// ['a', 'c', 'd', 'f', 'g']