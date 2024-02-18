const arrowFunction = () => {
    console.log(arguments); // Throws a ReferenceError: arguments is not defined
  };
  arrowFunction(1, 2, 3);
  