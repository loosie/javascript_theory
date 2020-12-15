// Objects
// one of the JavaScript's data types
// a collections of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object
// object = {key : value}'

// 1. Literals and Properties
const obj1 ={};  // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const loosie = { name : 'loosie', age:'4'};
print(loosie);

//  JS는 Dynamically typed language이므로 동적으로 타입이 Runtime이 될 때 결정되는 언어이다
// 그래서 뒤늦게 하나의 속성을 추가할 수 있다
// 다른언어에서 흔한일이 아님. 유지보수 하기 힘듬. 가능하면 피하는 것이 좋음 
loosie.hasJob = true;
console.log(loosie.hasJob);


// 삭제도 가능. 이것도 흔한 사용법은 아니다
delete loosie.hasJob;
console.log(loosie.hasJob);



// 2. Computed properties
// key(properties) should be always 'string' type
console.log(loosie.name);
console.log(loosie['name']); //Computed properties; 배열 형식으로도 접근이 가능
// 위(1번)에서 말했다시피 런타임 도중 속성 추가 및 값 할당 가능
loosie['hasJobbb'] = true;  
loosie['hasJob'] = true;  
console.log('hasJobbb: ' +loosie.hasJobbb);
console.log('hasJob: ' + loosie.hasJob);

// Computed properties
// 실시간으로 원하는 키를 받아오고 싶을 때 주로 사용
function printValue(obj, key){
    console.log(obj.key); // obj.key 라는 값이 있나? No (Undefined)
    console.log(obj[key]); //Computed properties
}

printValue(loosie, 'name');
printValue(loosie, 'age');


// 3. Property value shorthand
const person1 = { name : 'bob', age: 2 };
const person2 = { name : 'steve', age: 3};
const person3 = { name : 'dave', age: 4};
const person4 = new Person('loosie', 3);
console.log(person4);

// 4. Constructor Function
function Person(name, age){
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}


// 5. in operator : property existence check (key in obj)
console.log('name' in loosie);
console.log('age' in loosie);
console.log('random' in loosie);
console.log(loosie.ranom);


// 6. for..in vs for..of
// for (key in obj)
console.clear();
for(key in loosie){
    console.log(key); // name, age, hasJobbb, hasJob 
}

// for (value of iterable)
const array = [1, 2, 4, 5];
// for(let i = 0; i< array.length; i++){
//     console.log(array[i]);
// }
for(value of array){
    console.log(value);
}


// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3 ...])
const user = { name : 'loosie', age : '20'};
const user2 = user;
user2.name = 'change';
console.log(user);

// Old way
const user3 = {};
for(key in user){
    user3[key] = user[key];
}
console.clear();
console.log(user3);

// Object.assign
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
const user4 = {};
Object.assign(user4, user);
console.log(user4);

const user5 = Object.assign({}, user);
console.log(user5);

//another example
const fruit1 = { color : 'red' };
const fruit2 = { color : 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); //fruit2 값이 출력 'blue'
console.log(mixed.size); //fruit2 값이 출력 'big'