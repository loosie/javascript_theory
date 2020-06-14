const f1 = (param) =>{
  return new Promise((resolved, rejected) =>{
    setTimeout(() =>{
      console.log('f1 return resolved');
      resolved(`f1 success : ${param}`);
    },500);

  });
}

const f2 = (param) =>{
  return new Promise((resolved, rejected) =>{
    setTimeout(() =>{
      console.log('f2 return rejected');
      rejected(new Error(`f2 param : '${param}'`));
    },500);

  });
}

const f3 = (param) =>{
  return new Promise((resolved, rejected) =>{
    setTimeout(() =>{
      console.log('f3 return resolved');
      resolved(`f3 success : ${param}`);
    },500);

  });
}

const f4 = (param) =>{
  return new Promise((resolved, rejected) =>{
    setTimeout(() =>{
      console.log('f4 return rejected');
      rejected(Error(`f4 param : '${param}'`));
    },500);

  });
}

const f5 = (param) => {
    return new Promise((resolved, rejected) => {
        setTimeout(() => {
                console.log('f5 return resolved');
                resolved(`f5 success: ${param}`);
            }, 500);
    });
}
/*
    .then(f2) 은
    .then((result) => f2(result)) 와 동일
*/
const promise = f1('loosie');

promise
  .then((result)=> f2(result))  // == .then(f2)
  .then((result)=> f3(result))
  .catch((result)=>console.error(result)) // == .catch(console.error)
  .then((result)=> f4(result))
  .then((result)=> f5(result))
  .catch((result)=>console.error(result))
  .then((result)=>console.log(result)); // == .then(console.log)
