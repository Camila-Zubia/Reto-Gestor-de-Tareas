
function decodeFilename(archivoHackeado){
    console.log(archivoHackeado.replace(/\d+_/g, '').replace(/(\.[^.]+)(\.[^.]+)*$/, '$1'))
}

decodeFilename('2023122512345678_gameAssets.png.tmp')
// ➞ "gameAssets.png"

decodeFilename('42_user-data.json.backup')
// ➞ "user-data.json"

decodeFilename('987654321_level-1-config.csv.old')
// ➞ "level-1-config.csv"