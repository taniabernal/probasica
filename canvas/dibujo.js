var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;

var lienzo = d.getContext("2d");


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{

  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
  console.log("mensaje");

}


function dibujoPorClick()
{

    var lineas = parseInt(texto.value);
    var l = 0;
    var yi, xf;
    var colour = "#DB2464";
    var espacio = ancho / lineas;

for(l = 0; l < lineas; l++)
     {
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea(colour, 300, yi, xf, 0);
        dibujarLinea(colour, 0, yi, xf, 300);
        console.log("lineas" + l);

      }
      dibujarLinea(colour, 1, 1, 1, 299);
      dibujarLinea(colour, 1, 299, 299, 299);
}
