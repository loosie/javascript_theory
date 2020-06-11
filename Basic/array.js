

var s1 = ["이종원", "루지", 11, null, true];
var s2 = Array("hi", "salut", 100);
var s3 = new Array("thanks", "merci", false, undefined);

// console.log("s1:",s1);
// console.log(s2);
// console.log(s3);

s1.push(123); // 배열 뒤에 삽입
s2[s2.length] = "length" // "
s3[100] = "server";  // s3[4]~ s3[99]는 empty

let str1 = 's1 에는 "';
for(var item of s1){
  str1 += item+", ";
}
str1 += ' " 이 있다';
console.log(str1);


let str2 = 's2에는 "';
for(var item in s2){
  str2 += s2[item]+", ";
}
str2 += ' " 이 있다.';

console.log(str2);

let str3 = 's3에는 "';
s3.forEach(
  item => str3 += item+ ', ');
str3 += ' "이 있다.';
console.log(str3);
