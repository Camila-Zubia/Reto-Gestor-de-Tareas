function prepareActivities(arreglo){
    nuevoArreglo = [];
    arreglo.forEach(a =>{
        if(!nuevoArreglo.includes(a)){
            nuevoArreglo.push(a)
        }
    })
    if(nuevoArreglo.length == 0){
        return console.log("No hay actividades")
    }else{
        return nuevoArreglo.sort()
    }
    
}

const activities1 = [3, 1, 2, 3, 4, 2, 5]
const plannedActivities1 = prepareActivities(activities1)
console.log(plannedActivities1)

const activities2 = [6, 5, 5, 5, 5]
const plannedActivities2 = prepareActivities(activities2)
console.log(plannedActivities2)

const activities3 = []
const plannedActivities3 = prepareActivities(activities3)
console.log(plannedActivities3) 