const fs = require('fs');

const numArr = [1,2,3,4,5];

// numArr.forEach((num) =>{
//     const title = 'sync' + num;
//     const data = `'${title}.txt' 내용`;
//     fs.writeFileSync(`${title}.txt`, data);
//     console.log(`${title} 생성 (동기 순서 일정)`);
    
// });


numArr.forEach((num) =>{
    const title = 'sync' + num;
    const data = `'${title}.txt' 내용`;
    fs.readFileSync(`${title}.txt`);
    console.log(
        `${title}.txt 파일 데이터 내용  \n"${data}"\n`
    );
    
});