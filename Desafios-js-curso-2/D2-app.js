// Crear una función que muestre "¡Hola, mundo!" en la consola.
function mostrarHola(){
    console.log('¡Hola, mundo!');
}

mostrarHola();


//Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function recibirNombre(nombre){
    console.log(`¡Hola, ${nombre} !`);
}

recibirNombre('Shomara');

//Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function recibirNumero(numero){
    return numero *2;
}
let resultadoDoble= recibirNumero(22);
console.log(resultadoDoble);

//Crear una función que reciba tres números como parámetros y devuelva su promedio.
function calcularPromedio(a, b ,c){
    return ( a + b + c) / 3;
}

let promedio = calcularPromedio( 20, 15, 2);
console.log(promedio);


//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function numeroMayor(a, b){
    return a > b ? a : b;
}

let mayor = numeroMayor( 22, 20);
console.log(mayor);


//Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function potenciaNumero(numero) {
    return numero*numero;
    
}

let resultado1= potenciaNumero(2);
console.log(resultado1);