// function great(){
//   console.log('hi');
// }
//
// function timer() {
//   return setTimeout(()=>{
//     console.log('time');
//   },3000);
// }
//
//
// great();
// timer();


function t1(){
  console.log('ㄱㄷ');
  setTimeout( ()=>{
    console.log('t1');
  },0);
  console.log('ㄱㄷ2');
}

function t2() {
  console.log('t2');
}

function t3() {
  console.log('t3');
}

t1();
t2();
t3();
