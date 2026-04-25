const shoes = [
{ type: 'I', size: 38 },
{ type: 'R', size: 38 },
{ type: 'R', size: 42 },
{ type: 'I', size: 41 },
{ type: 'I', size: 42 }
]

const shoes2 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 }
]

const shoes3 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 36 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 43 }
]

function organizeShoes(zapatos){
    const zapatosPar = [];
    const usados = [];
    for(let i = 0; i < zapatos.length; i++){
        if(usados.includes(i)) continue;
        for(let j = i + 1; j < zapatos.length; j++){
            if(usados.includes(j)) continue;
            if(zapatos[i].type !== zapatos[j].type && zapatos[i].size === zapatos[j].size){
                zapatosPar.push([zapatos[i], zapatos[j]]);
                usados.push(i);
                usados.push(j);
                break;
            }
        }
    }
    return zapatosPar;
}

console.log(organizeShoes(shoes))