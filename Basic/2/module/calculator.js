var calculator ={
    sum:(a,b) =>{ 
    return a+b;
},
    substract:(a,b) =>{
    return a-b;
},
    multiply: (...args) => {
    return args.reduce((a, b) => {return a * b;});
},
    divide: (...args) => {
    return args.reduce((a, b) => {return a / b;});
}
}

module.exports =calculator;