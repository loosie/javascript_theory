//  1. json object
var loosie ={
  name : 'loosie',
  sex : 'man',
  age : 1,
  hobby : ['music', 'biking', 'movie'],
  printName: function(){
    console.log('name : ', this.name);
  },
  printAge : function() {
    console.log('age :', this.age);
  }

};

// console.log('typeof loosie' + typeof loosie); // loosieobject
//
// console.log('loosie : '+ loosie); // [object Object]
// console.log('looise : ', loosie); // {~}


// 2.json array

var loosies = [
  {age : 1, live : 'seoul', weight : 0.5},
  {age : 3, live : 'sea', weight : 100},
  {age : 20, live : 'sky', weight : 0.00001},
]

console.log('loosies :'+ loosies); //[object Object],[object Object],[object Object]
console.log('loosies :', loosies); // [ {~}, {~}, {~}]
console.log('loosies :' + JSON.stringify(loosies)); // [ {"~": ~, ...}. { ~ }...]


loosies.forEach(
  loosie => console.log("loosie age is "+ loosie.age + " olds and lives in " + loosie.live + "and weight is "+ loosie.weight)
);
