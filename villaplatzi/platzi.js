var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
  url: "tile.png",
  cargaOK: false
}
var vaca = {
  url: "vaca.png",
  cargaOK: false
}
var pollo = {
  url: "pollo.png",
  cargaOK: false
}
var cerdo = {
  url:"cerdo.png",
  cargaOK: false
}
var cantidad = aleatorio(5, 25);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);


function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}

function cargarPollos()
{
  pollo.cargaOK = true;
  dibujar();
}

function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujar();
}


function dibujar()
{

if (fondo.cargaOK == true)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }

if (vaca.cargaOK == true)
  {
    console.log(cantidad);
    for(var v=0; v < cantidad; v++)
    {
      var x = aleatorio(0, 3);
      var y = aleatorio(0, 3);
      var x = x * 80;
      var y = y * 80;
      papel.drawImage(vaca.imagen, x, y);
    }

  }

  if (pollo.cargaOK == true)
    {
      console.log(cantidad);
      for(var p=0; p < cantidad; p++)
      {
        var x = aleatorio(0, 2);
        var y = aleatorio(0, 2);
        var x = x * 50;
        var y = y * 50;
        papel.drawImage(pollo.imagen, x, y);
      }

    }

    if (cerdo.cargaOK == true)
      {
        console.log(cantidad);
        for(var c=0; c < cantidad; c++)
        {
          var x = aleatorio(0, 7);
          var y = aleatorio(0, 7);
          var x = x * 20;
          var y = y * 20;
          papel.drawImage(cerdo.imagen, x, y);
        }

      }
}

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
