function makeBoard(row, col) {
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var result = [];
    for (let i = 0; i < row; i++) {
        result.push([]);
        for (let j = 0; j < col; j++) {
            result[i].push(alphabet[Math.floor(Math.random() * 26)]);
        }   
    }
    console.log(result);
    return result;
}

function checkVowels(alphabet) {
    var vokal = 'AIUEO';
    for (let i = 0; i < vokal.length; i++) {
        if (alphabet === vokal[i]) {
            return true
        }
    }
    return false
}

function check(row, col) {
    var board = makeBoard(row, col);
    var result = [];
    var count = 0;
    for (let i = 0; i < board.length - 1; i++) {
        var huruf = ''
        for (let j = 0; j < board[i].length - 1; j++) {
            if (checkVowels(board[i][j]) && checkVowels(board[i][j+1]) && checkVowels(board[i+1][j]) && checkVowels(board[i+1][j+1])) {
                huruf += board[i][j] + board[i][j+1] + board[i+1][j] + board[i+1][j+1]
                result.push(huruf);
                count++
                huruf = '';
            }
        }
    }
    return result
}
// var input = [
//     ['A', 'X', 'C', 'Y'],
//     ['E', 'O', 'O', 'S'],
//     ['I', 'U', 'I', 'N'],
//     ['M', 'Y', 'O', 'E'],
//     ['P', 'D', 'A', 'I']
// ]
// console.log(check(input));
console.log(check(5, 4));
