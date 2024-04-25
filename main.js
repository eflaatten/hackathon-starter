'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// Your code right here


// TO-DO - UPDATE TO USE YOUR FUNCTION
// const getPrompt = () => {
//   rl.question('word ', (answer) => {
//     console.log( pigLatin(answer) );
//     getPrompt();
//   });
// }

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C

// TO-DO - ADD TESTS
if (typeof describe === 'function') {

  describe("#yourFunctionName)", () => {
    it("test description", () => {
      assert.equal(yourFunctionName("test input"), "expected return value");
      assert.equal(yourFunctionName("test input"), "expected return value");
    });
  });
} else {

  getPrompt();

}
