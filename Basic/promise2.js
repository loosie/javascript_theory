let isMomHappy = true;
// let isMomHappy = false;
let phone = {
  brand : 'Samsung',
  color : 'black'
};

var willIGetNewPhone = new Promise((resolve,reject)=>{
  if(isMomHappy === true){
    resolve("happy");
    console.log(`brand :`+ phone.brand , 'color :' +phone.color );
  }else{
    reject(Error('mom is not happy'));
  }
});
