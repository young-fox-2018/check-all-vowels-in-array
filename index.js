function dummyBoard() {
    const dummy =
        [
            ['A', 'X', 'C', 'Y'],
            ['E', 'O', 'O', 'S'],
            ['I', 'U', 'I', 'N'],
            ['M', 'Y', 'O', 'E'],
            ['P', 'D', 'A', 'I']
        ]
    return dummy
}

function board(row, col) {
    const dict = 'abcdefghijklmnopqrstuvwxyz'
    let result = []
    for (let i = 0; i < row; i++) {
        let arr = []
        for (let j = 0; j < col; j++) {
            const random = Math.floor(Math.random() * dict.length)
            arr.push(dict[random])
        }
        result.push(arr)
    }
    return result
}

function checkVolwels(input) {
    const vowels = 'AIUEO'
    for (let i = 0; i < vowels.length; i++) {
        if (vowels[i] === input) {
            return true
        }
    }
    return false
}

function checkAllVowels(board) {
    let vocalCounter = 0
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (i !== board.length - 1 && j !== board[i].length - 1) {
                if (checkVolwels(board[i][j]) == true && checkVolwels(board[i][j + 1]) == true && checkVolwels(board[i + 1][j]) == true && checkVolwels(board[i + 1][j + 1]) == true) {
                    vocalCounter += 1
                }
            }
        }
    }
    return vocalCounter
}

console.log(board(5, 4))
console.log('')
console.log(checkAllVowels(dummyBoard()))
console.log('')
console.log(checkAllVowels(board(5, 4)))