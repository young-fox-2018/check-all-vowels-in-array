function checkboard(jumlahRow, jumlahCol) {
  let data = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = [];
  var boardData = '';
  let final=[]

  for (var row = 0; row < jumlahRow; row++) {
    result.push([]);
    for (var col = 0; col < jumlahCol; col++) {
      boardData = data.charAt(Math.random() * data.length);
      result[row].push(boardData);
    }
  }
  console.log(result);

  let vowels = 'AIUEO';
  let count = 0;
  for (var i = 0; i < result.length - 1; i++) {
    for (var j = 0; j < result[i].length - 1; j++) {
      if (vowels.includes(result[i][j]) === true &&
          vowels.includes(result[i][j+1]) === true &&
          vowels.includes(result[i+1][j]) === true &&
          vowels.includes(result[i+1][j+1]) === true) {
        count++;
        final.push(i+1,j+1)
      }
    }
  }
  final.unshift('ada sebanyak ====>>',count ,'dengan kordinant ====>>')
  return final;
}

console.log(checkboard(10, 10));
