const generateBoard = (rows, cols) => {
    let kamus = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        board = []
    for (let i = 0; i < rows; i++) {
        let line = []
        for (let j = 0; j < cols; j++) {
            let idx = Math.floor(Math.random() * 26)
            line.push(kamus[idx])
        }
        board.push(line)
    }
    return board
}
// console.log(generateBoard(5, 4))
const checkVowels = (str) => {
    let vocal = 'AIUEO',
        count = 0
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vocal.length; j++) {
            if (str[i].toUpperCase() === vocal[j]) count++
        }
    }
    if (str.length === count) return true
    return false
}
// console.log(checkVowels('apapa'))
const checkBlock = (rows, cols) => {
    let board = generateBoard(rows, cols),
        total = 0
    // let board = [
    //     ['A', 'X', 'C', 'Y'],
    //     ['E', 'O', 'O', 'S'],
    //     ['I', 'U', 'I', 'N'],
    //     ['M', 'Y', 'O', 'E'],
    //     ['P', 'D', 'A', 'I']
    // ]
    // console.log(board)
    // let total = 0
    for (let i = 0; i < board.length - 1; i++) {
        for (let j = 0; j < board[i].length - 1; j++) {
            let blockStr = board[i][j] + board[i + 1][j] + board[i][j + 1] + board[i + 1][j + 1]
            if (checkVowels(blockStr) === true) total++
        }
    }
    return total
}
console.log(checkBlock(rows, cols))