
function checkVowels(jumlahRow, jumlahColom){

    let result = [];
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    //PEMBENTUKAN ARRAY MULTIDIMENSI DAN RANDOM VARIABLE ALPHABET
    for(let i = 0; i < jumlahRow; i++){
        result.push([]);
        for(let j = 0; j < jumlahColom; j++){
            let randomALph = alphabet[Math.floor(Math.random()* Math.floor(alphabet.length))];
            result[i].push(randomALph);
        }
    }
    // PENGELOMPOKKAN BERDASARKAN POLA DI CONTOH SOAL
    let vowelsTemp = [];
    for(let i = 0; i < result.length - 1; i++){
        // console.log(result[i])
        for(let j = 0; j < result[i].length - 1; j++){
            let temp = [];
            // console.log(result[i][j])
            temp.push(result[i][j], result[i][j+1], result[i+1][j], result[i+1][j+1]);
            vowelsTemp.push(temp);
        }
    }

    let counter = 0;

    // LOOPING BARIS DARI VOWELSTEMP
    for(let i = 0; i < vowelsTemp.length; i++){
      let isAllVowell = true;
      // LOOPING COLOM DARI VOWELSTEMP
        for(let j = 0; j < vowelsTemp[i].length; j++){
            if(vowelsTemp[i][j] !== "A" && vowelsTemp[i][j] !== "I" && vowelsTemp[i][j] !== "U" && vowelsTemp[i][j] !== "E" && vowelsTemp[i][j] !== "O"){
                isAllVowell = false;
            }
        }
        if(isAllVowell){
            counter++;
        }
    }
    return counter;
}
console.log(checkVowels(5, 4));