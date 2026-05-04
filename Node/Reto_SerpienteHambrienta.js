function moveSnake(tablero, mov) {
    let fila, col;
    for (let i = 0; i < tablero.length; i++) {
        const pos = tablero[i].indexOf('O');
        if (pos !== -1) {
            col = pos;
            fila = i;
            break;
        }
    }
    let sigF = fila;
    let sigC = col;

    if (mov === 'U') {
        sigF--;
    } else if (mov === 'D') {
        sigF++;
    } else if (mov === 'R') {
        sigC++;
    } else if (mov === 'L') {
        sigC--;
    }

    if (sigF < 0 || sigF >= tablero.length || sigC < 0 || sigC >= tablero[0].length) {
        return 'crash';
    }

    const espacio = tablero[sigF][sigC];
    if(espacio === 'M'){
        return 'eat';
    }else if(espacio === 'o'){
        return 'crash'
    }else{
        return 'none';
    }

}

const board = [
  '·····',
  'M····',
  'O····',
  'o····',
  'o····'
]

console.log(moveSnake(board, 'U'))
// ➞ 'eat'

console.log(moveSnake(board, 'D'))
// ➞ 'crash'

console.log(moveSnake(board, 'L'))
// ➞ 'crash'

console.log(moveSnake(board, 'R'))
// ➞ 'none'