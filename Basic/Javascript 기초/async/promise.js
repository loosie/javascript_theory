'use strict';

// Promise is a JavaScript object for asynchronous operation.
// State: pending -> fulfilled or rejected 
// Producer vs Consumer


// 1.Producer
// when new Promise is crated, the executor runs automatically
const promise = new Promise((resolve, reject)=>{  //promise를 만드는 순간 exec콜백함수가 바로 실행됨
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(()=>{
        resolve('loosie');
        // reject(new Error('no network'));
    }, 2000);
});

// 2. Consumers: then, catch, finally
promise
    .then(value =>{
        console.log(value);
    })
    .catch(error =>{
        console.log(error);
    })
    .finally(()=>{
        console.log('finally');
    });


// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject)=>{
    setTimeout(() => resolve(1), 1000);
});

// 비동기인 함수도 묶어서 처리
fetchNumber
    .then(num => num*2) // 2
    .then(num => num*3) // 6
    .then(num => {
        return new Promise((resolve, reject)=>{
            setTimeout(() => resolve(num-1), 1000); // 5
        });
    })
    .then(num => console.log(num));


// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject)=> {
        setTimeout(() => resolve('🐔'), 1000);
    });
const getEgg = hen => 
    new Promise((resolve, reject)=> {
        setTimeout(() => reject(new Error(`${hen} => 🥚`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

getHen()
    .then(getEgg)  // .then(hen => getEgg(hen))
    .catch(error =>{
        return '🥐';  // getEgg에서 에러가 발생하여도 promise 
    })
    .then(cook)      // .then(egg => cook(egg)   
    .then(console.log) // .then(console.log)
    .catch(console.log);


