function randomAlphabet(){
    //NOTE: alphabet ditambah huruf vokal lebih untuk memperbesar kemunculan vowels 2 x 2
    const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZAEIOUAEIOUAEIOUAEIOU';

    return ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
}

function checkVowels(char) {
    const VOWELS = 'AEIOU';
    var isVowel = false;

    //loop vowels
    for (let i = 0; i < VOWELS.length; i++) {
        if (char === VOWELS[i]) isVowel = true;
    }
    return isVowel;
}

function countVowelsInArray(board) {
    var countVowels = 0;

    for (let i = 0; i < board.length - 1; i++) {
        for (let j = 0; j < board[i].length - 1; j++) {
            if (checkVowels(board[i][j]) && checkVowels(board[i][j+1]) && checkVowels(board[i+1][j]) && checkVowels(board[i+1][j+1])) {
                countVowels++;
            }
        }
    }
    return countVowels;
}

function generateBoard(row, column) {
    var board = [];

    for (let i = 0; i < row; i++) {
        let baris = [];
        for (let j = 0; j < column; j++) {
            baris.push(randomAlphabet());
        }
        board.push(baris);
    }

    return board;
}

var board = generateBoard(5, 4);
console.log(board);
console.log(`Jumlah vowels 2x2 yang muncul : ${countVowelsInArray(board)}`);