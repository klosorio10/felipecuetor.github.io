var foto = 1;

function cambioFoto(entrada) {
	foto = entrada;
	document.getElementById("galeria").setAttribute("src",foto+".jpg");
	
}

function fotoMenosUno(entrada) {
	foto = foto-1;
		if(foto<1)
	{
		foto = 3;
	}

	
	document.getElementById("galeria").setAttribute("src",foto+".jpg");
	
}

function fotoMasUno(entrada) {
	foto = foto+1;
		if(foto>3)
	{
		foto = 1;
	}

	document.getElementById("galeria").setAttribute("src",foto+".jpg");
	
}