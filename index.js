function board(rows, cols){
    const dictionary = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const vocal = "AIUEO"
    let result = []
    /*
    let result = [
        ['A','X','C','Y'],
        ['E','O','O','S'],
        ['I','U','I','N'],
        ['M','Y','O','E'],
        ['P','D','A','I']
    ]*/

    for(let i = 0; i < rows; i++){
        let arr = []
        for(let j = 0; j < cols; j++){
            arr.push(dictionary[Math.floor(Math.random() * dictionary.length)])
        }
        result.push(arr)
    }   
    
    let total = 0
    for(let i = 0; i < rows-1; i++){        
        for(let j = 0; j < cols-1; j++){
            let counter = 0
            for(let k = 0; k < vocal.length; k++){
                if(result[i][j] === vocal[k]) counter ++
                if(result[i][j+1] === vocal[k]) counter++
                if(result[i+1][j] === vocal[k]) counter++
                if(result[i+1][j+1] === vocal[k]) counter++        
            }
            if(counter === 4) total ++
        }
    }
    console.log(result)
    return total
}

console.log(board(5,4))