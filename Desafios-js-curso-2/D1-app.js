let horaDelDesafio =document.querySelector('h1');
horaDelDesafio.innerHTML='Hora del Desafio';

/*function consola(){
    console.log('El botón fue clicado.');
}
*/

function mostarMensajeEnLaConsola() {
    console.log('El botón fue clicado!')
}

function ciudad(){
    let ciudadBrasil= prompt('Ingresa el nombre de una ciudad de Brasil');
    alert('Estuve en ' + ciudadBrasil + ' y me acordé de ti.');
}

function alerta(){
    alert('Yo amo JS.');
}


function sumaDosNumeros(){
    let numeroUno = parseInt(prompt('Ingresa un número'));
    let numeroDos= parseInt(prompt('Ingresa otro número'));
    let sumaNumeros= numeroUno + numeroDos
    alert(`El resultado de la suma de los dos numéros que ingresaste es ${numeroUno} + ${numeroDos} = ${sumaNumeros}`);
}