//alert("hola")

//   Crear una función que devuelva una copia de un 
//   objeto, si el objeto contiene un arreglo éste 
//   también debe ser una copia.



//console.log(misCosas)
var funcion1 = function (nombre){
	var objetoCasa = ["sillon","mesa","silla"];
	var objetosOficina = ["lapiz","cuaderno","telefono"];
	var misCosas = objetoCasa+","+objetosOficina;
	
	console.log(nombre +"le pertenece el:"+ misCosas);
	console.log("primer elemento de Casa es:"+objetoCasa[0]);
	console.log("segundo elemento de oficina es:"+objetoCasa[1]);

};
funcion1("miguel ")
