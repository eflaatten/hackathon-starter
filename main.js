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

//HANGMAN GAME

// Array of words to choose from
const word = ['apple', 'banana', 'orange', 'grape', 'kiwi', 'mango', 'pear', 'peach', 'plum', 'strawberry']

// Randomly select a word from the array and print a board with underscores for each letter
let randomWord = word[Math.floor(Math.random() * word.length)]

// Create the board with an underscore for each letter in the word
let board = Array(randomWord.length).fill('_')

// Incorrect guesses starts at 0
let incorrectGuesses = 0

const printBoard = () => {
  console.log(board.join(' '))
}

const hangman = (guess) => {
  let correctGuess = false
  for (let i = 0; i < randomWord.length; i++) {
    if (randomWord[i] === guess) {
      board[i] = guess
      correctGuess = true
    }
  }

  // Check for incorrect guess
  if(!correctGuess){
    // Increment incorrect guess count by 1
    incorrectGuesses++
    console.log("Incorrect Guesses: " + incorrectGuesses)
    // If incorrect guesses is equal to 6, game over
    if(incorrectGuesses === 6){
      console.log(`Game Over! The word was ${randomWord}`)
      process.exit()
    }
  }

  // Check for win
  checkForWin()
}

const checkForWin = () => {
  // Check if the board has no more empty spaces
  if(board.indexOf('_') === -1){
    setTimeout(() => {
      console.log('You Win!')
      process.exit()
    }, 100);
  }
}

// TO-DO - UPDATE TO USE YOUR FUNCTION
const getPrompt = () => {
  printBoard()
  rl.question('guess: ', (guess) => {
    hangman(guess)
    printBoard()
    getPrompt();
  });
}

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
