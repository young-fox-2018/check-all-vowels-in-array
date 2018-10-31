function randomAlfabet(){
    let text = ''
    let alfabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (let i = 0; i < 1; i++){
        text += alfabet.charAt(Math.floor(Math.random() * alfabet.length));
    } 
  return text;
}
randomAlfabet()

function createNestedArr(jumlahRow, jumlahCol){
    let hasil = []
    // generate board
    for(let i = 0; i < jumlahRow; i++){
        hasil.push([])
        for(let j = 0; j < jumlahCol; j++){
            hasil[i].push(randomAlfabet())
        }
    }
    
    //tampung tiap 4
    var temp = []
    for(let i = 0; i < hasil.length -1; i++){
        for(let j = 0; j < hasil[i].length-1; j++){
            var vokalArr = []
            vokalArr.push(hasil[i][j], hasil[i][j+1], hasil[i+1][j], hasil[i+1][j+1])
            temp.push(vokalArr)
        }
    }
    // cek tiap vowel
    let counter = 0
    for(let i = 0; i < temp.length; i++){
        let strVokal = ''
        for(let j = 0; j < temp[i].length; j++){
            if(temp[i][j] === 'A' || temp[i][j] === 'E' || temp[i][j] === 'I' || temp[i][j] === 'O' || temp[i][j] === 'U'){
                strVokal += temp[i][j]
            }
        }
        if(strVokal === temp[i].join('')){
            counter++
        }
    }
    return counter
}

console.log(createNestedArr(5, 4));