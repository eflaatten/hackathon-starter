// GET RANDOM WORD
const generateWord = () => {
  const words = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew', 'kiwi', 'lemon', 'mango', 'nectarine', 'orange', 'pear', 'quince', 'raspberry', 'strawberry', 'tangerine', 'watermelon']
  const randomIndex = Math.floor(Math.random() * words.length)
  return words[randomIndex]
}

// CREATE HANGMAN 
const createHangman = () => {

}

// ALPHABET TABLE
window.onload = () => {
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
}



