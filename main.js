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

//Gussed letters starts as an empty array
let guessedLetters = []

// Print the board
const printBoard = () => {
  console.log(board.join(' '))
}

// Main function with one argument, guess.
const hangman = (guess) => {
  // Check if the guess is a letter you already guessed
  if(guessedLetters.includes(guess)){
    console.log('You already guessed that letter')
    return
  }
  guessedLetters.push(guess)

  // Check for correct guess
  let correctGuess = false // Starts false
  for (let i = 0; i < randomWord.length; i++) {
    if (randomWord[i] === guess) { // If the guess is correct
      board[i] = guess // Update the board with the correct guess
      correctGuess = true // correctGuess is now true
    }
  }

  if(!correctGuess){ // If the guess is incorrect
    incorrectGuesses++ // Increment incorrect guess count by 1
    console.log("Incorrect Guesses: " + incorrectGuesses)
    if(incorrectGuesses === 6){ // If incorrect guesses is equal to 6, game over
      console.log(`Game Over! The word was ${randomWord}`)
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
    }, 100);
  }
}

// TO-DO - UPDATE TO USE YOUR FUNCTION
const getPrompt = () => {
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

  describe("#hangman", () => {
    beforeEach(() => { // Before each test, reset the game
      randomWord = 'apple' // Set the random word to apple for the tests
      board = Array(randomWord.length).fill('_')
      incorrectGuesses = 0
      guessedLetters = []
    })

    it('Make a guess', () => {
      hangman('a')
      assert.deepEqual(board, ['a', '_', '_', '_', '_'])
    })

    it('Make an incorrect guess', () => {
      hangman('z')
      assert.deepEqual(board, ['_', '_', '_', '_', '_'])
      assert.deepEqual(incorrectGuesses, 1)
    })

    it('Make a correct guess', () => {
      hangman('a')
      assert.deepEqual(board, ['a', '_', '_', '_', '_'])
    })

    it('Win the game', () => {
      hangman('a')
      hangman('p')
      hangman('l')
      hangman('e')
      assert.deepEqual(board, ['a', 'p', 'p', 'l', 'e'])
      assert.deepEqual(incorrectGuesses, 0)
    })

    it('Lose the game', () => {
      hangman('z')
      hangman('x')
      hangman('c')
      hangman('v')
      hangman('b')
      hangman('n')
      assert.deepEqual(incorrectGuesses, 6)
    })
  })
} else {
  getPrompt();
}
