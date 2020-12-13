// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculate a value

// 1. Function declaration
// function name(param1, param2) {body ... return; }
// one fucntion === one thing
// naming : doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function log(message){ // string? number?
    console.log(message);
}
log('hello');

//typescript
// function log(message : string) : number{
//     console.log(message);
//     return 0;
// }



// 2. Parameters
// premitive parmeters: passed by value
// object parameters: passed by reference
function changeName(obj){
    obj.name = 'coder';
}

const loosie = {name : 'loosie'};
changeName(loosie);
console.log(loosie);


// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!'); // Hi! by unknown


// 4. Rest parameters (added in ES6)
function printAll(...args){
    for(let i =0; i<args.length; i++){
        console.log(args[i]);
    }

    for(const arg of args){
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}

printAll('dream', 'coding', 'loosie');


// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage(){
    let message = 'hello';
    console.log(message); // local scope
    console.log(globalMessage);

    function printAnother(){
        console.log(message);
        let childeMessage = 'hello';
    }

    // console.log(childMessage); //error
}

printMessage();
// console.log(message); //error


// 6. Return a value
function sum(a, b){
    return a+b;
}

const result = sum(1, 2); //3
console.log(`sum: ${sum(1, 2)}`);



// 7. Early return, early exit
// bad
function upgradeUser(user){
    if(user.point >10){
        //long upgrade logic...
    }
}

// good 
function upgradeUser(user){
    if(user.point <=10){
        return;
    }

    // long upgrade logic...
}



// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// 1. Fucntion expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function(){ //anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));


// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}

//anonymous func
const printYes = function(){
    console.log('yes!');
};

// named func
// better debugging in debugger's stack traces
// recursions
const printNo = function print(){
    console.log('no!');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


// Arrow Function
// always anonymous
const simplePrint = function(){
    console.log('simple');
};

const arrowSimplePrint = () => console.log('simple arrow');

const add = function(a, b){
    return a+b;
}

const arrowAdd = (a, b) => a+b;

const arrowSimpleMul = (a, b) =>{
    //do something more
    return a*b;
}



// IIFE : Immediately Invoked Function Expression
(function hello(){
    console.log('IIFE');
})();