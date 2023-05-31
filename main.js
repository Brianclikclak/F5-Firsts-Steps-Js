/*FUNCION PARA CREAR EL TEXTO EN HTML*/

function agregarTexto(texto) {
    let paragraph = document.createElement("p");
    let textNode = document.createTextNode(texto);
    paragraph.appendChild(textNode);
    document.body.appendChild(paragraph);
  }

/* Crear variables de diferentes tipos de datos: número, cadena de texto, booleano e imprimir su valor por
 la pantalla del navegador y la consola.*/
 

 function agregarTexto(texto) {
    let paragraph = document.createElement("p");
    let textNode = document.createTextNode(texto);
    paragraph.appendChild(textNode);
    document.body.appendChild(paragraph);
  }

 /* VARIABLES */
 

let edad = 27;
let miNombre = "Brian";
let booleano = true;
let numeroUno = 5;
let numeroDos = 10

/*De las variables declaradas anteriormente, identifica las que son de tipo texto y concatena dichas
cadenas de texto.Deberás imprimir el resultado por la pantalla del navegador y la consola.*/

console.log(edad, miNombre, booleano);
agregarTexto(`Mi nombre es ${miNombre} y tengo ${edad} ?: ${booleano}`);

/*De las variables declaradas anteriormente, identifica las que son de tipo integer y realiza operaciones
matemáticas básicas con las variables creadas anteriormente (suma, resta, multiplicación, división).
Deberás imprimir el resultado por la pantalla del navegador y la consola.*/

let resultado = numeroUno - numeroDos;
console.log(resultado);
agregarTexto("5 - 10 = " + resultado);

resultado = numeroUno + numeroDos;
console.log(resultado);
agregarTexto("5 + 10 = " +  resultado);

resultado = numeroUno * numeroDos;
console.log(resultado);
agregarTexto("5 x 10 = " + resultado);

resultado = numeroUno / numeroDos;
console.log(resultado);
agregarTexto("5 / 10 = " + resultado);


/*De las variables declaradas anteriormente, identifica las que son de tipo texto y concatena dichas
cadenas de texto.Deberás imprimir el resultado por la pantalla del navegador y la consola.*/

console.log("Mi edad es un valor tipo" + typeof edad);
console.log("Mi nombre es un valor tipo" + typeof miNombre);
agregarTexto("Mi nombre es un valor tipo:" + " " + typeof miNombre);
agregarTexto("Mi edad es un valor tipo:" + " " + typeof edad)
agregarTexto("True es un valor de tipo:" + " " + typeof booleano);

/* FUNCIONES */

/*Crear una función que imprima por la pantalla del navegador y la consola el mensaje "Hola, [nombre]"
con un parámetro para el nombre.*/

function saludar(nombre){
    let saludo = `Hola ${miNombre}`;
    agregarTexto(saludo);
    return ;
}
saludar();

/*Crear función que reciba como parámetros dos números y que devuelva la suma de ellos. Deberás
imprimir el resultado por la pantalla del navegador y la consola.*/

function sumarNumeros(num1, num2) {
    let suma = num1 + num2;
    console.log("El resultado de la suma es:", suma);
    document.write("El resultado de la suma es: " + suma);
    return suma;
  }
  
  // Ejemplo de uso de la función sumarNumeros
   resultado = sumarNumeros(5, 7);

  /* Crear función que determine si un número es par o impar. Deberás imprimir el resultado por la pantalla
del navegador y la consola.*/

function numeroPar(numero) {
    let numeroTres = 20;
    if ( numeroTres % 2 === 0){
        console.log(numeroTres + " es un numero par");
        document.write(numeroTres + " es un numero par");
    } else {
        console.log(numeroTres + " es un numero impar");
        document.write(numeroTres + " es un numero impar")
    }
}
 numeroPar()

 //  OBJETOS

 //Crear un objeto carro haciendo la abstracción de sus atributos y un objeto anidado.

 const coche = {
   marca: "Opel",
   modelo: "Astra",
   color: "negro",
   potencia: 5,
   puertas: 5,
   informacion: {
    asientos: 5,
    año: 2004,
    combustible: "gasolina",
  },
};


// Función para devolver la marca del coche
function obtenerModelo(coche) {
  return coche.modelo;
}

let modeloCoche = obtenerModelo(coche);
console.log("Modelo del coche:", modeloCoche);
agregarTexto("Modelo del coche: " + modeloCoche);

// Función para devolver la cantidad de puertas del coche
function obtenerCantidadPuertas(coche) {
  return coche.puertas;
}

let cantidadPuertas = obtenerCantidadPuertas(coche);
console.log("Cantidad de puertas:", cantidadPuertas);
agregarTexto("Cantidad de puertas: " + cantidadPuertas);

// Función para devolver un atributo del objeto anidado
function obtenerAtributoAnidado(coche, atributo) {
  return coche.informacion[atributo];
}

let atributoAnidado = "asientos";
let valorAtributo = obtenerAtributoAnidado(coche, atributoAnidado);
console.log(`${atributoAnidado}:`, valorAtributo);
agregarTexto(`${atributoAnidado}: ${valorAtributo}`);

//  ARRAYS

// Crear un array de 10 números
let numeros = [5, 8, 2, 1, 10, 3, 7, 4, 6, 9];

// Función para imprimir en consola todos los números de un array
function imprimirNumeros(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    agregarTexto
  }
}

imprimirNumeros(numeros);

// Función para añadir un número al array
function añadirNumero(array, numero) {
  array.push(numero);
}

añadirNumero(numeros, 11);
console.log("Array después de añadir número:", numeros);

// Función para eliminar los números pares del array
function eliminarPares(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      array.splice(i, 1);
      i--;
    }
  }
}

eliminarPares(numeros);
console.log("Array después de eliminar pares:", numeros);

// Función para devolver el número mayor de un array
function obtenerNumeroMayor(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

let numeroMayor = obtenerNumeroMayor(numeros);
console.log("Número mayor del array:", numeroMayor);

// Función para devolver el número menor de un array
function obtenerNumeroMenor(array) {
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}

let numeroMenor = obtenerNumeroMenor(numeros);
console.log("Número menor del array:", numeroMenor);

// Función para convertir en minúsculas todas las letras de un texto
function convertirAMinusculas(texto) {
  return texto.toLowerCase();
}

let textoMinusculas = convertirAMinusculas("TEXTO EN MINÚSCULAS");
console.log("Texto en minúsculas:", textoMinusculas);

// Función para convertir en mayúsculas todas las letras de un texto
function convertirAMayusculas(texto) {
  return texto.toUpperCase();
}

let textoMayusculas = convertirAMayusculas("texto en mayúsculas");
console.log("Texto en mayúsculas:", textoMayusculas);

// Función para convertir la primera letra de cada nombre en mayúscula
function convertirPrimeraLetraMayuscula(arrayNombres) {
  for (let i = 0; i < arrayNombres.length; i++) {
    let nombre = arrayNombres[i];
    arrayNombres[i] = nombre.charAt(0).toUpperCase() + nombre.slice(1);
  }
}

let nombres = ["juan", "maría", "pedro", "lucía"];
convertirPrimeraLetraMayuscula(nombres);
console.log("Nombres con primera letra mayúscula:", nombres);

// MANIPULACION DEL DOM

// Crear un botón en HTML y usar JavaScript para mostrar un mensaje cuando se hace clic.


document.getElementById("btn").onclick = function(){
  alert("Tampoco es que te fuera a enseñar algo");
}


// Cambiar el contenido de un elemento HTML mediante JavaScript.

let texto = 0; 

document.getElementById("btnDos").addEventListener("click", function() {
  let parrafo = document.getElementById("texto");
  
  if (texto === 0) {
    parrafo.textContent = "En cuando hagas click arriba, cambiare";
    texto = 1;
  } else if (texto === 1) {
    parrafo.textContent = "Ves? He cambiado";
    texto = 2;
  } else {
    parrafo.textContent = "Empezemos de nuevo";
    texto = 0;
  }
});
 
// Ocultar y mostrar elementos HTML utilizando JavaScript.

document.getElementById("ocultarBtn").addEventListener("click", function (){
  let texto = document.getElementById("parrafoDos");
  texto.style.display = "none";
});

document.getElementById("mostrarBtn").addEventListener("click", function(){
  let texto = document.getElementById("parrafoDos");
  texto.style.display = "block";
});
  
// Crear un array de 10 nombres



let nombresDos = ["Juan", "María", "Carlos", "Laura", "Pedro", "Ana", "Luis", "Sara", "Javier", "Lucía"];

function imprimirNombres() {
  let lista = document.createElement("ul");
  for (var i = 0; i < nombresDos.length; i++) {
    let item = document.createElement("li");
    item.textContent = nombresDos[i];
    lista.appendChild(item);
  }
  document.body.appendChild(lista);
}
imprimirNombres()
let numerosDos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function imprimirCantidadNumeros() {
  let cantidad = numerosDos.length;
  let mensaje = "El array de números contiene " + cantidad + " elementos.";
  let parrafo = document.createElement("p");
  parrafo.textContent = mensaje;
  document.body.appendChild(parrafo);
}
imprimirCantidadNumeros();

let datos = [
  { id: 1, name: "Perro", status: "Activo", species: "Mastin", type: "Tipo 1 ", gender: "Masculino" },
  { id: 2, name: "Gato", status: "Inactivo", species: "Siames", type: "Tipo 2", gender: "Femenino" },
  
];

let tabla = document.createElement("table");
let encabezado = document.createElement("tr");

for (let key in datos[0]) {
  let th = document.createElement("th");
  th.textContent = key;
  encabezado.appendChild(th);
}

tabla.appendChild(encabezado);

for (let i = 0; i < datos.length; i++) {
  let fila = document.createElement("tr");

  for (let key in datos[i]) {
    let celda = document.createElement("td");
    celda.textContent = datos[i][key];
    fila.appendChild(celda);
  }

  tabla.appendChild(fila);
}

document.body.appendChild(tabla);






 
 
 



