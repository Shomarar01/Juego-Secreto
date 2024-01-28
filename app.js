/* Los dos siguientes comentarios son la forma más larga y "tradicional" de ingresar a los elementos 
del documento HTML y estan bien, pero es más eficiente y general para acceder a los elementos lo que no esta comentado.
Se eliminó esa declaración de variables, lo encapsulamos dentro de una funcion para asignar texto y muestra más profesionalismo y orden a 
la hora de trabajar, es mantenible y escalable, se reduce a la mitad el código. */
/*let titulo= document.querySelector ('h1'); 
titulo.innerHTML='Juego del número secreto';*/

/*let parrafo = document.querySelector('p');
parrafo.innerHTML= 'Indica un número del 1 al 10';*/

let numeroSecreto = generarNumeroSecreto();
let intentos =1;
let listaNumerosSorteados = [];
let numeroMaximo = 10; 

console.log(listaNumerosSorteados);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

   // console.log(intentos);
    //console.log(numeroSecreto);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `¡Acertaste el número en ${intentos} ${(intentos ===1) ? 'intento' : 'intentos'} !`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else{
        //El usuario no acertó
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        } else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos ++;
        limpiarCaja();


    }
    return;
}

// aqui usamos querrySelector en vez de .getElementById para probar otra forma y la sintaxis lleva el # porque ese simboliza el ID
function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario');
    /* las comillas así solas significa que esta vacio */
    valorCaja.value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()* 10)+1;

    console.log(numeroGenerado);
    //console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento( 'p', 'Ya se sortearon todos los números posibles');
    } else{
    //Si el número generado esta incluido en la lista hacemos una operacion, si no hacemos otra
        if  (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
         }
    }
}


function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numero
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Desabilitar el boton hasta que ganen 
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();




/*Los Template strings, o plantillas de cadenas, son características comunes en muchos lenguajes de programación y sistemas de plantillas. Estas plantillas ofrecen una manera eficiente de crear cadenas de texto donde es posible incluir marcadores o espacios reservados que posteriormente serán reemplazados por valores concretos. Estos marcadores, por lo general, se encuentran delimitados por caracteres especiales, como llaves, corchetes o signos de dólar, y desempeñan el papel de puntos de inserción para datos dinámicos.

En la gran mayoría de los lenguajes de programación, Template strings simplifican la tarea de concatenar valores variables en una cadena, sin requerir concatenación manual de cadenas o conversiones explícitas de tipos. Esto contribuye a que el código sea más legible y menos propenso a errores, lo cual es particularmente valioso en diversas situaciones, como la generación de mensajes de usuario, la construcción de consultas SQL dinámicas o la creación de documentos HTML.

Un ejemplo ilustrativo de esto se encuentra en JavaScript, donde puedes emplear las comillas invertidas (backticks) para crear plantillas de cadenas. Esto te permite incrustar expresiones dentro de la cadena utilizando el formato ${}. A continuación, un ejemplo práctico: */

/* link de info para profundizar sobre strings : https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals */