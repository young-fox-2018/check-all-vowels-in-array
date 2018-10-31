function RandomAlphabet(jumahRow,jumlahCol){
    const alphabeth = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n"]
    var result = []

    for(var i = 1 ; i <= jumahRow ; i++){
        let arr = []
        for(var j = 1; j <= jumlahCol; j++){
            var randomAlphabet = Math.floor(Math.random()*Math.floor(alphabeth.length))
            arr.push(alphabeth[randomAlphabet])
        }
        result.push(arr)
    }
    return result
}

function CheckVowel(data){
    const arr = ["a","i","u","e","o"];
    var isfound = false
    for(var i = 0 ; i < arr.length ; i++){
        if(data === arr[i]){
            // console.log(true)
            isfound =  true
        }
    }
    
    return isfound
}




function checkvowelsArray(){
    var array = RandomAlphabet(5,4)
    console.log(array)
    var counter = 0
    for(var i = 0 ; i < array.length-1; i++){
        // var result = []
        // console.log(array[i])
        for(var j = 0 ; j < array[i].length-1; j++){
            
                if(CheckVowel(array[i][j])  === true && CheckVowel(array[i+1][j]) === true && CheckVowel(array[i][j+1]) === true && CheckVowel(array[i+1][j+1]) === true ) {
                    counter++
                }
            
            // result.push(array[i][j])
            
            
        }
        // console.log(result)
    }
    return counter
}

console.log(checkvowelsArray())