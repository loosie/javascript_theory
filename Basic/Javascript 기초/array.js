'use strict';

// Araay

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length); //2 
console.log(fruits[0]); //🍎 
console.log(fruits[1]); //🍌 
console.log(fruits[2]); //undefined
console.log(fruits[fruits.length-1]); //🍌 


console.clear();

// 3. Looping over an array
// print all fruits

// a. for 
for(let i =0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits){
    console.log(fruit);
}


// c. forEach
fruits.forEach(function(fruit, index, array){
    console.log(fruit, index, array);
});

// anonymous function -> arrow function으로 표현 가능
// 내용이 하나인 경우 {} 생략가능

// 보통 사용 방법 
fruits.forEach((fruit) => console.log(fruit));


// 4. Addition, deletion, copy
// push: add an itme to the end
fruits.push('🍓', '🍑');
console.log(fruits);
// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);


// unshift: add an item to the beginning
fruits.unshift('🍓', '🍑');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// Note! shift, unshift are slower than pop, push
// shift, unshift는 기존의 배열의 위치가 변경되기 때문에

// splice: remove an item by index position
fruits.push('🍓', '🍑', '🍉');
console.log(fruits);
fruits.splice(1,1); // delete count를 지정하지 않으면 해당 인덱스 뒤에 있는 인덱스 다 삭제 됨
console.log(fruits);
fruits.splice(1,1, '🍐', '🍍'); // 삭제된 인덱스 위치에 추가됨
console.log(fruits);

// combine two arrays
const fruits2 = ['🍇', '🍒'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


console.clear();
// 5. Searching
// indexOf : find the index
console.log(fruits);
console.log(fruits.indexOf('🍎')); // index : 0
console.log(fruits.indexOf('🍐')); // index : 1
console.log(fruits.indexOf('🍇')); // 해당하는 값이 없으면 -1   출력

// includes : boolean값으로 return
console.log(fruits.includes('🍇')); // false
console.log(fruits.includes('🍎')); // true


console.clear();
// lastIndexOf
fruits.push('🍎');
console.log(fruits.indexOf('🍎')); // 중복된 값이 있으면 처음에 만난 index 값 출력
console.log(fruits.lastIndexOf('🍎')); // 중복된 값이 있으면 마지막에 만난 index 값 출력
