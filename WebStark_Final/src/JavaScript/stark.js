function menu()
{
	nav=document.getElementsByTagName("nav")[0].style;
	if(nav.height=="")
	{
		nav.height="10em";
	}
	else
	{
		nav.height="";
	}
}

function comprobar(x)
{
	if(x.checked)
		document.getElementById("botonRegistro").disabled=false;
	else
		document.getElementById("botonRegistro").disabled=true;
}

var modalPanel; // se guardará aquí el elemento del modal panel

function informacionPago() // Cuando se pulsa el botón, se abre el modal 
{
	modalPanel=document.getElementById("modalPanel");
	modalPanel.style.display = "block";
	document.getElementById("cerrarModal").focus();
}

function cerrarModal() // Pulsar x para cerrar el modal
{
	modalPanel.style.display = "none";
}

//______________________________________________________cookie

window.onload=function()
{
	
	var modalCookie = document.getElementById("modalCookie");
	var btnAceptar = document.getElementById("aceptarCookie");
	var btnCerrar = document.getElementById("cerrarCookie");

	if(comprobarCookie("cookieStark"))
	{
		setCookie("cookieStark", "Aceptada", 1);
	}
	else
	{
		modalCookie.style.display="block";
	}


	// Pulsar el boton 'cerrar' para cerrar el modal
	btnCerrar.onclick = function()
	{
		modalCookie.style.display = "none";
	}

	// Pulsar el boton 'aceptar'
	btnAceptar.onclick = function()
	{
		setCookie("cookieStark", "Aceptada", 1);
		modalCookie.style.display = "none";
	}
}

function comprobarCookie(nombre)
{
	var nombre= getCookie(nombre);
	if (nombre=="" || nombre==null)
	{
		return false;
	}
	else
	{
		return true;
	}
}

var personaje;// se guardará aquí el elemento del aside que contiene el personaje

function mostrarPersonaje(idPersonaje)
{
	personaje=document.getElementById(idPersonaje);
	personaje.style.display="block";
}

function cerrarPersonaje()
{
	personaje.style.display="none";
}

// al hacer click en la ventana se hacen dos comprobaciones, una de personajes y otra del modal de información de pago (registro)
window.onclick = function(event)
{
	if (event.target == personaje) // comprueba que se haya pulsado fuera del div de información de personaje
	{
		cerrarPersonaje();
	}
	
	if (event.target == modalPanel) // comprueba que se haya pulsado fuera del modal panel de información de pago
	{
		cerrarModal();
	}
}