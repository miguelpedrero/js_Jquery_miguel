//alert("hola")

var contador = 50;


$('body').keydown(function(e){


	if(e.keyCode == 37) {//left
		console.log("left!!");
		$('div').css({'left':contador+'px'});
		contador --;contador --;contador --;contador --;contador --;
		contador --;contador --;contador --;contador --;contador --;
		contador --;contador --;contador --;contador --;contador --;
		contador --;contador --;contador --;contador --;contador --;
		contador --;contador --;contador --;contador --;contador --;
		contador --;contador --;contador --;contador --;contador --;
		contador --;contador --;contador --;contador --;contador --;
		contador --;contador --;contador --;contador --;contador --;
		contador --;contador --;contador --;contador --;contador --;
		contador --;contador --;contador --;contador --;contador --;



	} else if(e.keyCode == 39){//right
		
		$('div').css({'left':contador});
		contador++;contador++;contador++;contador++;contador++;
		contador++;contador++;contador++;contador++;contador++;
		contador++;contador++;contador++;contador++;contador++;
		contador++;contador++;contador++;contador++;contador++;
		contador++;contador++;contador++;contador++;contador++;
		contador++;contador++;contador++;contador++;contador++;
		contador++;contador++;contador++;contador++;contador++;
		contador++;contador++;contador++;contador++;contador++;
		contador++;contador++;contador++;contador++;contador++;
		contador++;contador++;contador++;contador++;contador++;

	}

});
