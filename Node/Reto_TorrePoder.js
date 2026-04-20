/**Crea una función que reciba:

La altura de la torre (entero entre 1 y 100)
Un carácter especial que represente la energía */

function torrePoder(num, char){
    if (num < 1 || num > 100){
        return "La torre solo puede ser  de entre 1 y 100";
    }
    const torre = []
    let espacio, poder
    for (let i = 0; i < num; i++) {
      espacio = '_'.repeat(num - i - 1)
      poder = char.repeat((i * 2) + 1)
      torre.push(`${espacio}${poder}${espacio}`)
    }
    espacio = '_'.repeat(num -1)
    poder = '#'
    torre.push(`${espacio}${poder}${espacio}`)
    torre.push(`${espacio}${poder}${espacio}`)
    return torre.join('\n')
}

const torre = torrePoder(5, '+')
console.log(torre)