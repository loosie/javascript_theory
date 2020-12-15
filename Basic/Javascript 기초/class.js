'use strict';
// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person{
    // constructor
    constructor(name, age){
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and Setters
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(value){
        this._age = value < 0? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);


// 3. Fields (public, private)
// Too soon! 나온지 얼마 안됨
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/Class_fields
class Experiment {
    publicField = 2;
    #privateFiled = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); //undefined


// 4. Static properties and methods
// Too soon! 나온지 얼마 안됨
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/static
class Article{
    static publisher = 'loosie';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

// static사용 안한 경우 호출 방법
const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher);  //undefined

// 클래스 내 static 변수, 함수 호출방법
console.log(Article.publisher);
Article.printPublisher();


// 5. Inheritance
// a way for one class to extend another class.
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color!`);
    }

    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape{}
class Triangle extends Shape{
    //다형성, overriding
    draw(){
        super.draw(); // 부모 메서드 호출
        console.log('세모');
    }
    //다형성, overriding
    getArea(){
        return (this.width * this.height) /2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());


// 6. Class checking : instanceOf
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true