function scope(){
  var v1 = 123;
  if(true){
    var v2  = 123;
    let l = 'abc';
    console.log('let block scope, l :' , l);
  }
    // console.log('let block scope, l :' , l);
  console.log('var function scope , v2', v2);
}

// function scope : var
// block scope : let, const

scope();
