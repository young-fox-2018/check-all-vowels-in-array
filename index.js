function checkAllVowels(board) {
    var vocal = ["A", "I", "U", "E", "O"]
    var result = 0
    for (let i = 0; i < board.length - 1; i++) {
        for (let j = 0; j < board[i].length - 1; j++) {
            let count = 0
            let arr = [board[i][j], board[i][j + 1], board[i + 1][j], board[i + 1][j + 1]]
            for (let l = 0; l < arr.length; l++) {
                let isVowels = false
                for (let k = 0; k < vocal.length; k++) {
                    if (arr[l] === vocal[k]) {
                        isVowels = true
                        break;
                    }
                }
                if (isVowels === true) count++
            }
            if (count === 4) result++
        }
    }
    return result

}

var abjad = "ABCDEFGHIJKLMNOPRSTUFWXYZ"
function board(row, col) {
    let board = []
    for (let i = 0; i < row; i++) {
        let inner = []
        for (let j = 0; j < col; j++) {
            let index = Math.floor(Math.random() * abjad.length)
            inner.push(abjad[index - 1])
        }
        board.push(inner)
    }
    return board
}
var data =
    [
        ['A', 'X', 'C', 'Y'],
        ['E', 'O', 'O', 'S'],
        ['I', 'U', 'I', 'N'],
        ['M', 'Y', 'O', 'E'],
        ['P', 'D', 'A', 'I']
    ]

console.log(checkAllVowels(data));
console.log(checkAllVowels(board(5, 4)));