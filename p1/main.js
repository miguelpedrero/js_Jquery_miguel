//¿Cuál es el problema con el siguiente código?

/*

var alumno1 = {nombre: "Matías", edad:5}
var alumno2 = alumno1 
alumno2.nombre = "Sebastián"

*/

//la idea muestre los datos del alumno1 console.log
//faltaria un alumno sebastian ordenarlo
//esta bien seleccionado "alumno2.nombre" pero jecuta ninguna accion
//esta de sobra sebastian se no se define como alumno
// alumno2 recorre alumno1 sin hacer nada extra

// ASI SE VERIA MEJOR: para dejar algun resultado en el DOM o Console

var alumno1 = {nombre: "Matías", edad:5}
var alumno2 = {nombre: "Sebastián", edad:8}
console.log(alumno1.nombre)
console.log(alumno2.edad)

