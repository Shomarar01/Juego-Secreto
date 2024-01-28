//Crea una lista vacía llamada "listaGenerica".
let listaGenerica =[];

//Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotin', 'Python'];

//Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang' );

//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarEnConsola(lenguajes){
    console.log(lenguagesDeProgramacion);
}
mostrarEnConsola();

//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mostrarEnOrdenInverso(lista){
    console.log(lenguagesDeProgramacion.reverse());
}

mostrarEnOrdenInverso();


//Crea una función que calcule el promedio de los elementos en una lista de números.
function calcularPromedio(lista){
    let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma / lista.length;
}

let numeros = [10, 20, 30, 40, 50];
let promedio1 = calcularPromedio(numeros);
console.log('Promedio:', promedio1);


//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function encontrarMayorMenor(lista) {
    let mayor = lista[0];
    let menor = lista[0];
  
    for (let i = 1; i < lista.length; i++) {
      if (lista[i] > mayor) {
        mayor = lista[i];
      }
      if (lista[i] < menor) {
        menor = lista[i];
      }
    }
  
    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
  }
  
  let numerosOtro = [15, 8, 25, 5, 12];
  encontrarMayorMenor(numeros);

//Crea una función que devuelva la suma de todos los elementos en una lista.
function sumarTodaLista( lista){
    let suma=0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
      }
      return suma;
}
let numerosSuma = [15, 8, 25, 5, 12];
let suma = sumarTodaLista(numerosSuma);
console.log('Suma:', suma);


//Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function encontrarIndiceElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === elemento) {
        return i; // Retorna el índice del elemento encontrado
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
  }


//Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumarDosListas( lista1, lista2){
    if ( lista1.length == lista2.length){
        var sumaL = [];

    // Iterar sobre las listas y sumar los elementos uno a uno
    for (var i = 0; i < lista1.length; i++) {
        sumaL.push(lista1[i] + lista2[i]);
    }

    // Devolver la lista con la suma de los elementos
    return sumaL;

    }
}

// Ejemplo de uso:
var lista1 = [1, 2, 3, 4];
var lista2 = [5, 6, 7, 8];
console.log(sumarDosListas(lista1, lista2));

//Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
