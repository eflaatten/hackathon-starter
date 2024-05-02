// START GAME
const startGame = () => {
  const word = generateWord()
  const board = Array(word.length).fill('_')
  const incorrectGuesses = 0
  const guessedLetters = []
}

// GET RANDOM WORD
const generateWord = () => {
  const words = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew', 'kiwi', 'lemon', 'mango', 'nectarine', 'orange', 'pear', 'quince', 'raspberry', 'strawberry', 'tangerine', 'watermelon']
  const randomIndex = Math.floor(Math.random() * words.length)
  console.log('Random word: ', words[randomIndex])
  return words[randomIndex]
}

// GUESS LETTERS
const makeAGuess = (letter) => {
  
}

// CREATE HANGMAN 
const drawHangman = () => {

}

// DRAW WORD SPACES
const drawWordSpaces = (word) => {
  const wordSpaces = document.getElementById('word-spaces')
  const wordArray = word.split('')
  wordArray.forEach(letter => {
    const space = document.createElement('div')
    space.className = 'word-space'
    space.textContent = letter
    wordSpaces.appendChild(space)
  })
}

// DRAW NOOSE
const drawNoose = () => {
  const noose = document.getElementById('noose-element')
  const canvas = document.createElement('canvas')
  canvas.width = 300
  canvas.height = 300
  noose.appendChild(canvas) 
  const ctx = canvas.getContext('2d') 
  ctx.lineWidth = 5 // Set the line width
  ctx.beginPath() // Start the path
  ctx.moveTo(80, 250) // Bottom left
  ctx.lineTo(150, 250) // Bottom right
  ctx.lineTo(150, 50) // Top right
  ctx.lineTo(260, 50) // Top right
  ctx.lineTo(260, 90) // Straight down from top right
  ctx.stroke() // Draw the path
  ctx.closePath() // Close the path
}

// ALPHABET TABLE
window.onload = () => {
  
  // CREATE ALPHABET TABLE
  const alphabet  = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const table = document.getElementById('alphabet-table')
  const row = document.createElement('tr')
  row.className = 'alphabet-row'
  
  alphabet.forEach(letter => {
    const cell = document.createElement('td')
    cell.textContent = letter
    cell.className = 'alphabet-table'
    row.appendChild(cell)
  })
  
  table.appendChild(row)

  // DRAW NOOSE
  drawNoose()
}



