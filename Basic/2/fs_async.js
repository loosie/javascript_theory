const fs = require("fs");

const numArr = [1,2,3,4,5];

// numArr.forEach((num) => {
//   const title = "async" + num;
//   const data = ` '${title}.txt' 내용 `;
//   fs.writeFile(`${title}.txt`, data, (err, data) => {
//     if (err) return err;
//     console.log(`${title} 생성 (비동기 순서 랜덤)`);
//   });
// });


numArr.forEach((num) => {
    const title = "async" + num;
    fs.readFile(`${title}.txt`, (err, data) => {
      if (err) return err;
      console.log(
        `${title}.txt 파일 데이터 내용  \n"${data}"\n`
      );
    });
  });