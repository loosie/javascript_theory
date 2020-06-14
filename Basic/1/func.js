// 함수 선언식
function addString(x,y){
  console.log(x+y);
}

addString('hi', " what's up");

// 함수 표현식1
var addNum = function(x,y){
  console.log(x+y);
}

addNum(1,2);

// 함수 표현식2
var addArray = (x,y)=>{
  console.log("x배열 : ", x, ", y배열 : ",y);
  console.log("x+y :", x+y);
}

addArray(Array("hi"," how are u?\n"), ["good!"]);
