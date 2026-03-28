// =====================================
// Sistema de Gestión de Tareas
// =====================================

/*
INSTRUCCIONES GENERALES:

1. Lee cuidadosamente cada sección.
2. Completa únicamente donde se indica con TODO.
3. No borres la estructura base.
4. Agrega comentarios explicando tu lógica.
5. Prueba cada función antes de continuar.
6. NO USAR INTELIGENCIA ARTIFICIAL.
*/


// =====================================
// 1. Arreglo inicial de tareas
// =====================================

/*
Cada tarea tiene:
- nombre: string
- prioridad: number (1 = alta, 2 = media, 3 = baja)
- completada: boolean
*/

const tareas = [
  { nombre: "Ir a la playa", prioridad: 1, completada: false },
  { nombre: "Estudiar JS", prioridad: 2, completada: true },
  { nombre: "Ver películas", prioridad: 3, completada: false }
];


// =====================================
// 2. Funciones
// =====================================

/*
TODO 1:
Crear una función que recorra el arreglo de tareas
y muestre en consola:
- nombre de la tarea
- estado: "Completada" o "Pendiente"
*/
function mostrarTareas(lista) {
    lista.forEach(t => {
        console.log("Nombre: " + t.nombre + ", Completada: " + t.completada)
    });
};

/*
TODO 2:
Crear una función flecha que retorne
solo las tareas completadas.
Usar filter.
*/
const obtenerCompletadas = (lista) => {
    return lista.filter(function (t){
        return t.completada === true;
    });
};

/*
TODO 3:
Crear una función flecha que retorne
solo las tareas pendientes.
Usar filter.
*/
const obtenerPendientes = (lista) => {
    return lista.filter(function (t){
        return t.completada === false;
    });
};

/*
TODO 4:
Crear una función flecha que retorne
solo los nombres de las tareas.
Usar map.
*/
const obtenerNombres = (lista) => {
    return lista.map(t => t.nombre)
};

/*
TODO 5:
Crear una función que retorne
el total de tareas.
*/
function contarTareas(lista) {
    return lista.length;
};

// =====================================
// 3. Objeto sistema
// =====================================

/*
TODO 6:
Completar los métodos usando this.tareas

- mostrarTareas: debe llamar a la función mostrarTareas
- mostrarCompletadas: debe usar obtenerCompletadas
- mostrarPendientes: debe usar obtenerPendientes
*/

const sistema = {
  tareas: tareas,

  mostrarTareas: function() {
    mostrarTareas(this.tareas)
  },

  mostrarCompletadas: function() {
    mostrarCompletadas(this.tareas)
  },

  mostrarPendientes: function() {
    mostrarPendientes(this.tareas)
  }
};


// =====================================
// 4. Condicionales
// =====================================

/*
TODO 7:

- Si el arreglo tareas está vacío:
  mostrar "No hay tareas"

- Si todas las tareas están completadas:s
  mostrar "Todas las tareas completadas"
*/
if(tareas == null){
    console.log("No hay tareas")
}if(tareas.length === obtenerCompletadas(tareas).length){
    console.log("Todas las tareas completadas")
}



// =====================================
// 5. Switch
// =====================================

/*
TODO 8:

Usar la variable opcion para ejecutar:

1 -> mostrar todas las tareas
2 -> mostrar tareas completadas
3 -> mostrar tareas pendientes
default -> mostrar "Opción inválida"
*/

const opcion = 0;

switch (opcion) {
  case 1:
    mostrarTareas(tareas)
    break;

  case 2:
    mostrarTareas(obtenerCompletadas(tareas))
    break;

  case 3:
    mostrarTareas(obtenerPendientes(tareas))
    break;

  default:
    console.log("Opción inválida");
}


// =====================================
// 6. Pruebas
// =====================================

/*
TODO 9:

Llamar funciones para comprobar que todo funciona correctamente.
Usar console.log donde sea necesario.
*/
console.log("Prueba 1: ")
mostrarTareas(tareas);
console.log("Prueba 2: ")
mostrarTareas(obtenerCompletadas(tareas));
console.log("Prueba 3: ")
mostrarTareas(obtenerPendientes(tareas));
console.log("Prueba 4: ")
console.log("Nombres: " + obtenerNombres(tareas));
console.log("Prueba 5: ")
console.log("Número de tareas: " + contarTareas(tareas));
