//activity1

const hello = () => {
    console.log("Hello Code Nation");
}


// function hello5(hello){
//     for (let i = 0; i < 5; i++){
//         console.log(i);

// hello5();

//activity2

const numbers = [1, 2, 3, 4, 5];
const numbers2 = numbers.map(multiply3)

function multiply3(num) {
    return num * 3;
}

console.log(numbers);
console.log(numbers2);

//activity3

const add = (a,b) => {
    return a+b;
}
const subtract = (a,b) => {
return a - b; }
const multiply = (a,b) => {
    return a*b;
}
const divide = (a,b) => {
return a/b; }
const doMaths = (num1) => {
    return (num2, fn) => {
        return fn(num1, num2);
    }
}

let num1 = 10;
let num2 = 11;
let fn = add();

console.log(doMaths());