function randomAlphabets() {
    const alphabets = 'qwertyuiopasdfghjklzxcvbnm'
    //const alphabets = 'aiueodf'  <==== buat ngetest
    return alphabets[Math.floor(Math.random() * (alphabets.length - 1 - 0 + 1))]
}

function generateBoard(rows, cols) {
    let board = []
    for (let i = 0; i < rows; i++) {
        let tmp = []
        for (let i = 0; i < cols; i++) {
            tmp.push(randomAlphabets())
        }
        board.push(tmp)
    }
    return board
}

function checkVowels(str) {
    const vowels = 'aiueo'
    let count = 0
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                count++
            }
        }
    }
    return count
}

function checkBlock(rows, cols) {
    let board = generateBoard(rows, cols)
    let count = 0
    console.log(board)
    for (let i = 0; i < board.length - 1; i++) {
        for (let j = 0; j < board[i].length - 1; j++) {
            let block = board[i][j] + board[i + 1][j] + board[i][j + 1] + board[i + 1][j + 1]
            if (checkVowels(block) === 4) {
                count++
            }
        }
    }
    return count
}
console.log(checkBlock(5, 4))