function checkAllVowels(Numrow,Numcol) {
    var block = generateArray(Numrow,Numcol);
    let count = 0
    let vowels = ['a','i','u','e','o','A','I','U','E','O']
    console.log(block)
    for (let i = 0; i < block.length-1; i++) {
        for (let j = 0; j < block.length-1; j++) {
            if(vowels.includes(block[i][j]) === true && vowels.includes(block[i+1][j]) === true && vowels.includes(block[i][j+1]) === true && block.includes(block[i+1][j+1]) === true ) {
                console.log(array[i][j],block[i][j+1],block[i+1][j],block[i+1][j+1])
                count+=1
            }
        }
    }
    if (count === 0) {
        return 'Tidak ditemukan Semua vokal dalam 1 blok'
    }
    return count
}

function generateArray(row, column) {
    var array = [];
    for (let i = 0; i < row; i++) {
        array.push([])
        for (let j = 0; j < column; j++) {
            var alphabet = "abcdefghijklmnopqrstuvwxyz";
            var random = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            array[i].push(random)            
        }
    }
    return array;
}

console.log(checkAllVowels(5,4))
console.log(checkAllVowels(5,4))
