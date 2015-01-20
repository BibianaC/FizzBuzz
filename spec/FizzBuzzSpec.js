describe("FizzBuzz", function() {

  var fizzbuzz;

  describe("knows when a number", function() {

    it("is divisible by 3", function() {
      fizzbuzz = new FizzBuzz();
      // Ruby -> fizzbuzz = FizzBuzz.new
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true); // 'is' is like a ? in Ruby divisible_by_three?
    });

    it("is NOT divisible by 3", function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });

    it("is divisible by 5", function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });

    it("is NOT divisible by 5", function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByFive(1)).toBe(false);
    });

  });

  describe("Returns Fizz, Buzz or FizzBuzz", function() {

    it("returns Fizz when divisible by three", function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.play(3)).toEqual("Fizz");
    });

    it("returns Buzz when divisible by five", function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.play(5)).toEqual("Buzz");
    });

    it("returns FizzBuzz when divisible by three and five", function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.play(15)).toEqual("FizzBuzz");
    });

    it("returns the number if it is not divisible by three or five", function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.play(1)).toEqual(1);
    });

  });

});