function menu()
{
	nav=document.getElementsByTagName("nav")[0].style;
	if(nav.height=="")
	{
		nav.height="10em"
	}
	else
	{
		nav.height=""
	}
}

function comprobar(x)
{
	if(x.checked)
		document.getElementById("botonRegistro").disabled=false;
	else
		document.getElementById("botonRegistro").disabled=true;
}


window.onload=function()
{
	// Cuando se pulsa el botón, se abre el modal 
		document.getElementById("botonPago").onclick = function()
	{
		document.getElementById("modalPanel").style.display = "block";
	}

	// Pulsar x para cerrar el modal
	document.getElementById("cerrarModal").onclick = function()
	{
		document.getElementById("modalPanel").style.display = "none";
	}

	// Cuando se hace click en cualquier lugar fuera del modal, se cierra
	window.onclick = function(event)
	{
		if (event.target == document.getElementById("modalPanel"))
		{
			document.getElementById("modalPanel").style.display = "none";
		}
	}
}
