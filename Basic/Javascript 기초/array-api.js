// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    // let change = '';
    // fruits.forEach((value) => change += (value+" "));
    // console.log(change);

    const result = fruits.join(' and ');
    console.log(result);
}
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    // const arr = new Array();
    // for(value of fruits){
    //     if(value === ',' || value == ' ') continue;
    //     arr.push(value);
    // }
    // console.log(arr);

     /**
     * Split a string into substrings using the specified separator and return them as an array.
     */
    const result = fruits.split(',', '2');
    console.log(result);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];

        /**
     * Reverses the elements in an Array.
     */
    const result = array.reverse();
    console.log(result);
    console.log(array); // 기존 배열 자체도 바뀜
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];

     /**
     * Returns a section of an array.
     */
    const result = array.slice(2,5);
    console.log(result);
    console.log(array); // 기존 배열은 그대로. splice는 기존 배열도 수정됨
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
    // for(let i=0; i<students.length; i++){
    //     if(students[i].score === 90){
    //         const result = students[i];
    //         console.log(result);
    //     }
    // }

    // const result = students.find(function(student){
    //     return student.score === 90;
    // });
     /**
     * Returns the value of the first element in the array where predicate is true, and undefined
     * otherwise.
     */
    const result = students.find((student) =>  student.score === 90);
    console.log(result);
  }
  
  // Q6. make an array of enrolled students
  {
       /**
     * Returns the elements of an array that meet the condition specified in a callback function.
     */
    const result = students.filter((student) => student.enrolled === true);
    console.log(result);

  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
      /**
     * Calls a defined callback function on each element of an array, and returns an array that contains the results.
     */
      const result1 = students.map((student) => student);
      console.log(result1);
      const result2 = students.map((student) => student.score);
      console.log(result2);
  }
  
  console.clear();
  // Q8. check if there is a student with the score lower than 50
  {
       /** some
     * Determines whether the specified callback function returns true for any element of an array.
     */
      const result = students.some((student) => student.score <50);
      console.log(result);

      // every
      // 배열에 있는 모든 요소들이 조건을 충족해야지만 true를 리턴해줌
      /**
     * Determines whether all the members of an array satisfy the specified test.
     */
      const result2 = students.every((student) => student.score <50);
      console.log(result2);

  }
  
  // Q9. compute students' average score
  {
      // 간단한게 표현 가능
    //   const result = students.reduceRight((prev, curr) => {
    //       console.log('---------');
    //       console.log(prev);
    //       console.log(curr);
    //       return prev + curr.score;
    //     },0); //initial Value 설정

        const result = students.reduce((prev, curr) => prev + curr.score,0);
        console.log(`total: ${result} , average: ${result/students.length} `);
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    //   const result = students.map((student) => student.score).join();
      
      // 50점 미만인 점수만 출력
      const result = students.map((student) => student.score)
      .filter((score) => score>=50)
      .join();
      console.log(result);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
      /**
     * Sorts an array.
     */
    const result = students.map((student) => student.score)
    .sort((a, b) => a -b)
    .join();
    console.log(result);
  }