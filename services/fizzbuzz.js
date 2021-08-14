module.exports = {
  fizzBuzz: function (n) {
    let fizzBuzzArray = [];
    for (let i = 1; i <= n; i++) {
      if (i % 15 == 0) {
        fizzBuzzArray.push("FizzBuzz");
      } else if (i % 5 == 0) {
        fizzBuzzArray.push("Buzz");
      } else if (i % 3 == 0) {
        fizzBuzzArray.push("Fizz");
      } else {
        fizzBuzzArray.push(i);
      }
    }
    return fizzBuzzArray;
  },
};
