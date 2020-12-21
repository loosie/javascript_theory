// async & await
// clear style of using promsie :)

// 1. async
async function fetchUser(){
    // do network request in 10 secs...
    return 'loosie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);


// 2. await ✨
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
    await delay(1000);
    return '🍎';
}

// chaining보다는 동기적인 것처럼 보이는 async사용
// 코드 쉽게 이해할 수 있음
// function getBanana(){
//     return delay(3000)
//         .then(()=>'🍌');
// }

async function getBanana(){
    await delay(2000);
    return '🍌';
}


// 과일 한번에 return

//* chaining > promise도 너무 중첩적으로 하면 콜백지옥과 비슷한 문제점 발생
// function pickFruits(){
//     return getApple()
//             .then(apple => {
//                 return getBanana()
//                     .then(banana => `${apple} + ${banana}`);
//             })
// }

// pickFruits().then(console.log);


//* async 사용하여 해결
async function pickFruits(){
    
    //병렬 처리
    const applePromise = getApple();
    const bananaPromise = getBanana();

    // 1초
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

// pickFruits().then(console.log);


// 3. useful Promise APIs
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()])
            .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);


// 가장 먼저 전달되는 promise 배열 리턴
function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);