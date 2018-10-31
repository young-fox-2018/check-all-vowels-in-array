function createNestedArr(jumlahRow, jumlahCol){
    result = [];
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    alphabet = alphabet.toUpperCase();
    

    for(var i = 0; i < jumlahRow; i++){
        cont = [];
        for(var j = 0; j <jumlahCol; j++){
            cont.push(alphabet[Math.floor(Math.random()*25)])
        }
        result.push(cont)
    }
    
    console.log(result)

    var resArr = []

    for(var i = 0; i < result.length-1; i++){
        for(var j = 0; j < result[i].length -1; j++){
            temp = ""
            if(result[i][j].match(/[aiueo]/gi) && result[i][j+1].match(/[aiueo]/gi) && result[i+1][j].match(/[aiueo]/gi) && result[i+1][j+1].match(/[aiueo]/gi)){
                temp += result[i][j] + result[i][j+1] + result[i+1][j]  + result [i+1][j+1]
                resArr.push(temp)
            }
        }
    }

    return resArr;
}

console.log(createNestedArr(5,4))

var arr = [
    ["A","X","C","Y"],
    ["E","O","O","S"],
    ["I","U","I","N"],
    ["M","Y","O","E"],
    ["P","D","A","I"]
]

function vow(arr){

    var resArr = []

    for(var i = 0; i < arr.length-1; i++){
        for(var j = 0; j < arr[i].length -1; j++){
            temp = ""
            if(arr[i][j].match(/[aiueo]/gi) && arr[i][j+1].match(/[aiueo]/gi) && arr[i+1][j].match(/[aiueo]/gi) && arr[i+1][j+1].match(/[aiueo]/gi)){
                temp += arr[i][j]  + arr[i][j+1] + arr[i+1][j] + arr [i+1][j+1]
                resArr.push(temp)
            }
        }
    }

    return resArr;
}

console.log(vow(arr))