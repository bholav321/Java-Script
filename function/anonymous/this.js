const obj = {
    value: 10,
    anonymousFunction: function() {
      console.log(this.value); // 'this' refers to 'obj' in this context
    }
  };
  obj.anonymousFunction(); // Output: 10 (as 'this' refers to 'obj')