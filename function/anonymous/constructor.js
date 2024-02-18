const AnonymousConstructor = function() {
    this.value = 10;
  };
  
  const obj = new AnonymousConstructor();
  console.log(obj.value); // Output: 10
  