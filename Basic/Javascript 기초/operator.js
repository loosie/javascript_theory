

// 1. Stirng concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1+2 = ${1+2}`);
console.log("loosie\'s \n book");


// 2. Numeric operators
console.log(1+1); //add
console.log(1-1); //sub
console.log(1/1); //div
console.log(1*1); //mul
console.log(5%2); //remainder
console.log(2 ** 3); //exponentiation


// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);  // 3, 3
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);  // 3, 4
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);  // 3, 3
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);  // 3, 2


// 4. Assingment operators
let x =3;
let y= 6;
x += y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // false
console.log(10 <= 6); // false
console.log(10 > 6); // true
console.log(10 >= 6); // true

// 6. Logical operators : || (or), && (and), ! (not)
const value1 = false;
const value2 = 4<2; 

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if(nullableObject != null){
//     nullableObject.something;
// }

function check(){
    for(let i =0; i<10; i++){
        //wasting time
        console.log('no~');
    }
    return true;
}

// !(not)
console.log(!value1);


// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const loosie1 = {name : 'loosie'};
const loosie2 = {name : 'loosie'};
const loosie3 = loosie1;
console.log(loosie1 == loosie2); // false 
console.log(loosie1 === loosie2); // false
console.log(loosie1 === loosie3); // true

// equality - puzzler
console.log(0 == false); // true
console.log(0 ===false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false


// 8. Conditional operators: if
// if, else if, else
const name = 'df';
if(name === 'loosie'){
    console.log('welcome, loosie');
}else if(name === 'coder'){
    console.log('you are good coder');
}else{
    console.log('unknown');
}


// 9. Tenary operator: ?
// condition ? value1 : value2;
console.log(name === 'loosie'? 'yes' : 'no');


// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type check in TS
const browser = 'IE';
switch(browser){
    case 'IE':
        console.log('go away');
        break;
    case 'Chrome':
        console.log('love u');
        break;
    default:
        console.log('same all!');
        break;
}


// 11. Loops
// while loops, while the condition is truthy
// body code is excuted
let i = 3;
while (i>0){
    console.log(`while: ${i}`);
    i--;
}


// do-while loop, body code is executed first,
// then check the condition.
do{
    console.log(`do while: ${i}`);
    i--
}while(i>0);


// for loop, for(begin; condition; step)
for(i =3; i>0; i--){
    console.log(`for: ${i}`);
}

for(let i=3; i>0; i--){
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for(let i=3; i>0; i--){
    for(let j=3; j>0; j--){
    console.log(`i: ${i}, j: ${j}`);
    }
}


// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for(let i =0; i<11; i++){
    if(i%2===1) continue;
    
    console.log(`even: ${i}`);
}


// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for(let i =0; i<11; i++){
    if(i >8) break;
    console.log(`reaching 8: ${i}`);
}