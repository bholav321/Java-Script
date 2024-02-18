const anonymousFunction = function() {
    console.log(arguments); // Accesses the arguments object of the enclosing function
  };
  anonymousFunction(1, 2, 3,5); // Output: [1, 2, 3]
  