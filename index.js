function generateBoard(rows, cols) {
    let board = []
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < rows; i++) {
        let inner = []
        for (let j = 0; j < cols; j++) {
            let randomAlphabet = Math.floor(Math.random() * alphabet.length)
            inner.push(alphabet[randomAlphabet])
        }
        board.push(inner)
    }
    return board
}

function checkVowels(letter) {
    const vocals = 'aiueo'
    for (let i = 0; i < vocals.length; i++) {
        if (vocals[i] === letter) {
            return true
        }
    }
    return false
}

function checkBlock(board) {
    let countVowel = 0
    for (let i = 0; i < board.length - 1; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (checkVowels(board[i][j]) && checkVowels(board[i][j + 1]) && checkVowels(board[i + 1][j]) && checkVowels(board[i + 1][j + 1])) {
                countVowel++
            }
        }
    }
    return countVowel
}

let checkBoard = generateBoard(5, 4)

console.log(checkBlock([
    ['a', 'x', 'c', 'y'],
    ['e', 'o', 'o', 's'],
    ['i', 'u', 'i', 'n'],
    ['m', 'y', 'o', 'e'],
    ['p', 'd', 'a', 'i'],

]))
console.log(checkBoard)
console.log(checkBlock(checkBoard))

