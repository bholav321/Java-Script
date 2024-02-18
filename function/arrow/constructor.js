const ArrowConstructor = () => {
    this.value = 10;
  };
  
  const obj = new ArrowConstructor(); // Throws a TypeError: ArrowConstructor is not a constructor
  