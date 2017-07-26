var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var mapa = "tile.png";

var fondo = new Image();
fondo.src = mapa;
fondo.addEventListener("load", dibujar);

var vaca = new Image();
vaca.src = "vaca.png";

var cerdo = new Image();
cerdo.src = "cerdo.png";

var pollo = new Image();
pollo.src = "pollo.png";

function dibujar()
{
  papel.drawImage(fondo, 0, 0);
}


function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
