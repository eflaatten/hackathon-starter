let hangmanState = 0

// START GAME
const startGame = () => {
  currentWord = generateWord()
  drawWordSpaces(currentWord)
  console.log('Word: ', currentWord)
  return currentWord
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

  // Check if the guess is correct and update the word spaces
  if(currentWord.includes(letter)) {
    const wordSpaces = document.getElementById('word-spaces').children

    for(let i = 0; i < currentWord.length; i++) {
      if(currentWord[i] === letter) {
        wordSpaces[i].textContent = letter
      }
    }
  } else {
    drawHangman() // If the guess is incorrect, draw a body part
  }

  checkForWin() // Check if the word has been guessed

}

// CHECK FOR WIN
const checkForWin = () => {
  const wordSpaces = document.getElementById('word-spaces').children
  const word = Array.from(wordSpaces).map(space => space.textContent).join('')
  const winMessage = document.createElement('h1')
  winMessage.className = 'win-message'
  winMessage.textContent = 'Congratulations!'

  if(word === currentWord) {
    setTimeout(() => {
      document.body.appendChild(winMessage)
    }, 100);
  }
}

// RESET GAME
const resetGame = () => {
  location.reload()
}

// CREATE HANGMAN 
const drawHangman = () => {
  const canvas = document.getElementById('noose-element').children[0]
  const ctx = canvas.getContext('2d')
  ctx.lineWidth = 5
  ctx.beginPath()
  switch (hangmanState) {
    case 0:
      ctx.arc(260, 110, 20, 0, Math.PI * 2)
      break
    case 1:
      ctx.moveTo(260, 130)
      ctx.lineTo(260, 200)
      break
    case 2:
      ctx.moveTo(260, 150)
      ctx.lineTo(240, 170)
      break
    case 3:
      ctx.moveTo(260, 150)
      ctx.lineTo(280, 170)
      break
    case 4:
      ctx.moveTo(260, 200)
      ctx.lineTo(240, 240)
      break
    case 5:
      ctx.moveTo(260, 200)
      ctx.lineTo(280, 240)
      break
  }
  ctx.stroke()
  ctx.closePath()
  hangmanState++

  if(hangmanState === 6) {
    const lostMessage = document.createElement('h1')
    lostMessage.className = 'lost-message'
    lostMessage.textContent = 'Game Over! The word was: ' + currentWord
    setTimeout(() => {
      document.body.appendChild(lostMessage)
    }, 100);
  }


}

// DRAW WORD SPACES
const drawWordSpaces = (word) => {
  const wordSpaces = document.getElementById("word-spaces");

  wordSpaces.innerHTML = "";

  for (let i = 0; i < word.length; i++) {
    const space = document.createElement("span");
    space.textContent = "_"; 
    space.style.margin = "0 10px"; 
    wordSpaces.appendChild(space);
  }
};

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

    // Event listner to register each guess
    cell.addEventListener('click', () => {
      makeAGuess(event.target.textContent)
    })
  })
  
  table.appendChild(row)

  // DRAW NOOSE
  drawNoose()
}



