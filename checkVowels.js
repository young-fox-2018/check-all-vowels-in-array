var input = 
[
    [],
    ["A", "I", "B", "S" , "D"],
    ["U", "E", "C", "A", "O"],
    ["O", "A", "T", "I", "U"]
]

// RELEASE 0
function createBoard(row, col){

    const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var res = []
    
    for(var i = 0 ; i < row; i++){
        var inner = []
        for (var j = 0 ; j < col ; j++){
            let randAbc = abc.charAt(Math.floor(Math.random() * abc.length))
            inner.push(randAbc)
        }
        res.push(inner)
    }
    return res
}

input  = createBoard(5,4)
console.log(input)


// RELEASE 0.1
function checkArrVowel(arr){
    var counter = 0

    for(var row = 1 ; row < arr.length ; row++){
        for(var col = 0 ; col < arr[row].length ; col++){
            if(row+1 < arr.length && col+1 < arr[row].length && checkLetter(arr[row][col]) === true && checkLetter(arr[row+1][col]) === true && checkLetter(arr[row][col+1]) === true && checkLetter(arr[row+1][col+1]) === true){
                counter++
            }
        }
    }
    return counter
}

function checkLetter(indexArr){
    var vowel = "AIEOU"
    indexArr = indexArr.toUpperCase()
    for(var i = 0 ; i < vowel.length ; i++){
        if(vowel[i] === indexArr){
            return true
        }
    }
    return false
}


console.log(checkArrVowel(input))
