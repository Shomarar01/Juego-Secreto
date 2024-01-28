
function calculeIMC( altura, peso){
  var imc = peso / (altura * altura);
  return imc;
}
var resultadoIMC = calculeIMC(152, 58);
console.log(resultadoIMC);
/*calculeIMC(152, 58);
console.log(imc);*/

//2.Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  // Ejemplo de uso
  let numero = 5;
  let resultado = calcularFactorial(numero);
  console.log(`El factorial de ${numero} es ${resultado}`);

//3.Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function convertirADolares(dolares) {
 var cotizacionDolar = 17.16;
 var pesosMXN = dolares * cotizacionDolar;
 return pesosMXN;
}

let valorEnDolar= 100;
let valorEnPesosMXN = convertirADolares(valorEnDolar);
console.log(`La cantidad ingresada ${valorEnDolar} dólares es de ${valorEnPesosMXN} MXN`);


//4.Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
function areaYPerimetro (altura, anchura){
  var areaSala = altura*anchura;
  var perimetroSala =  altura*2 + anchura*2;
  console.log( " Área: " + areaSala);
  console.log( "Perímetro: " + perimetroSala);
}

let altura = 5;
let anchura = 10;
areaYPerimetro ( altura, anchura);


//5.Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
 function areaYPerimetroCirculo(radio){
  var pi = 3.14;
  var areaCirculo = pi * radio* radio;
  var perimetroCirculo = (2*pi) * radio;
  console.log( "Área del circulo: " + areaCirculo);
  console.log( "Perímetro del circulo: " + perimetroCirculo);
 }
let radio = 24;
let diametro = radio*2;
areaYPerimetroCirculo(radio);


//6.Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function tablaDeMultiplicar(numero){
  for (var i = 1; i <= 10; i++) {
    var resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
  }
}
// Ejemplo de uso
let multiplicacion = 9;
tablaDeMultiplicar(numero);

  
