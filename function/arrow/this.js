
// var value = 10;
const obj = {
    value: 10,
    arrowFunction: () => {
      console.log(this.value); // 'this' refers to the outer scope (global in this case)
    }
  };
  obj.arrowFunction(); // Output: undefined (as 'this' refers to the global scope where 'value' doesn't exist)
