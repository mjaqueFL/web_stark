
function deleteCookie(nombre)
{
    //document.cookie = nombre+"=;0;path=/";
    setCookie(nombre,"", 0);
}

function setCookie(nombre, valor, expiracion)
{
    var dia = new Date(); // fecha actual
    dia.setTime(dia.getTime() + (expiracion*24*60*60*1000)); // fecha actual más el número de días que se le haya mandado a la función
    var expires = "expires=" + dia.toUTCString();
	document.cookie=nombre+"="+valor+";"+expires+";path=/";
}

function getCookie(nombre)
{
    var nombre = nombre + "=";
    var cadenaCookies = document.cookie.split(';'); // separa todas las cookies existentes por ; y las guarda en el array ca
    var c;
    for(let i=0; i<cadenaCookies.length; i++)
    {
        c=cadenaCookies[i];
        while (cadenaCookies[i].charAt(0) == ' ') c = c.substring(1); // quita los espacios de cadenaCookies[i]
        if (cadenaCookies[i].indexOf(nombre) == 0) return c.substring(nombre.length, c.length); // comprueba si el nombre de la cookie es el que se le ha pasado
    }

    return "";
}