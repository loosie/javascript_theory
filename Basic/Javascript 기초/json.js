// JSON
// Javascipt Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name : 'tori',
    color: 'white',
    size : null,
    birthDate: new Date(),

    //함수, JS에만 있는 특별한 데이터는 JSON에 포함 안됨
    // symbol : Symbol("id"),
    jump: () => {
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

// 원하는 목록만 변환 가능
json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);

console.clear();

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'loosie' : value;
});
console.log(json);

console.clear();

// 2. JSON to Object
// parse(json)
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();

// obj.jump();  //error

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); //string형태로 오기때문에 error

console.clear();

const obj1 = JSON.parse(json, (key, value) =>{
    console.log(`key: ${key}, value: ${value}`);
    return key ==='birthDate' ? new Date(value) : value;
});
console.log(obj1);

console.log(obj1.birthDate.getDate());