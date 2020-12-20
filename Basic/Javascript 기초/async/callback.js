'use strict';

//hositing
// function printImmediately(print){~}

//hoisting 
// function printWithDelay(print, timeout){~}

// Javascript is synchronous
// Execute the code block by order after hoisting
// hoisting: var, function declaration
console.log('1'); // 동기
setTimeout(()=> console.log('2'), 1000); // 비동기
console.log('3'); // 동기

// Synchronous callback
function printImmediately(print){  // 이 함수는 hoisting되어 맨위로 올라가있음
    print();
}
printImmediately(() => console.log('hello')); // 동기

// Asynchronous callback
function printWithDelay(print, timeout){ // 이 함수는 hoisting되어 맨위로 올라가있음
    setTimeout(print, timeout);
}
printWithDelay(()=> console.log('async callback'), 2000); // 비동기



// Callback Hell example
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if(
                (id === 'loosie' && password == 'dream') ||
                (id === 'coder' && password == 'academy')
            ){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(()=> {
            if(user === 'loosie'){
                onSuccess({name: 'loosie', role: 'admin'});
            }else{
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    (user)=>{
        userStorage.getRoles(user, (userWithRole)=>{
            alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
        },(error)=>{console.log(error);})
    },
    (error) =>{console.log(error);}
);