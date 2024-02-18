const namedAnonymousFunction = function named(param) {
    return param * 2;
  };
  
  const anonymousFunction = function(param) {
    return param * 2;
  };
  
//   console.log(namedAnonymousFunction.double(5));
  console.log(namedAnonymousFunction(4));