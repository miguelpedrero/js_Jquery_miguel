// Se pide modelar el siguiente problema:
// En una sala de clases hay alumnos, cada alumno 
//tiene notas y un promedio final. Se pide:

//  -Crear la función constructora alumno que 
//	 recibe el nombre de éste y un arreglo con las notas

// -La función constructora debe revisar que el nombre 
//	sea un string y que el arreglo de notas sean integers

// -Crear el método promedio que devuelva el promedio de
//   notas de todos los alumnos.

// alumno1 = Student.new("Oscar", [10,9,10])
//alumno1.promedio()// 9.6666667

//alert("hola")

var alumno1 = ("Miguel",[10,9,6]);
var alumno2 = ("José",[10,9,5]);

var promedioMiguel = function(){

	console.log("miguel tienes estas notas: "+alumno1);

	console.log(("supromedio: "+parseInt(alumno1[0]+alumno1[1]+alumno1[2])/3));
	//console.log(parseInt(compañeros[i].edad));

};

promedioMiguel()


