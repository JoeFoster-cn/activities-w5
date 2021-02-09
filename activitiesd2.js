//activity1

const hello = (num) => {
    console.log(`Hello Code Nation ${num}`);
}


function hello5(fn) {
    let array = [
        "item1",
        "item2",
        "item3",
        "item4",
        "item5",
    ];
    for (let i = 0; i < 5; i++) {
        fn(array[i]);
    }
}

hello5(hello);

//activity2

const numbers = [1, 2, 3, 4, 5];
const numbers2 = numbers.map(multiply3)

function multiply3(num) {
    return num * 3;
}

console.log(numbers);
console.log(numbers2);

//activity3

const add = (a, b) => {
    return a + b;
}
const subtract = (a, b) => {
    return a - b;
}
const multiply = (a, b) => {
    return a * b;
}
const divide = (a, b) => {
    return a / b;
}
const doMaths = (num1) => {
    return (num2) => {
        return (fn) => {
            return fn(num1, num2);
        }  
    }
}

// 10 = line 49, 5 goes to line 50, divide is called in line 51
console.log(doMaths(10)(5)(divide));
//3 argument function
//function currying 
