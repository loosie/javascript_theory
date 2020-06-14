var a; // 초기화 값 필요 x
console.log(a);  // undefined

var a =123; // 변수 재선언 가능
console.log(a);  //123

a = 'hi'; //변수 값 재할당 가능
console.log(a); // hi



let b;  // 초기화 값 필요 x
console.log(b); //undefined

// let은 재선언 불가  :  Duplicate declaration
// let b = 123;
// console.log(b);

b =123; //변수 값 재할당 가능
console.log(b);   // 123

// 초기화 값 필수! :  Unexpected token
// const c;
// console.log(c);

const c =123;
console.log(b);

// cosnt는 변수 값 재할당을 막아줌(재할당 불가능)
// : Assignment to constant variable.
// c= 'hi';
// console.log(c);

// 재선언도 불가능
// const c =1;
// console.log(c);
