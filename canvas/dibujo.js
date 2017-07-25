var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var colour = "#DB2464";

for(l = 0; l < lineas; l++)
 {
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarLinea(colour, 300, yi, xf, 0);
    dibujarLinea(colour, 0, yi, xf, 300);
    console.log("lineas" + l);

  }
  dibujarLinea(colour, 1, 1, 1, 299);
  dibujarLinea(colour, 1, 299, 299, 299);

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
