// Laboratorio 1 — EcoHuerta
// Escribe debajo los ejemplos de las prácticas 1.1 a 1.5.
// Guarda este archivo y recarga fundamentos.html para ver la salida en la Consola.

//Practica 1.1
//Ejemplo: 
console.log("Bienvenido a EcoHuerta");
console.log(8 + 5);
console.log("8" + 5);
console.warn("Este cultivo necesita revisión");
//Prediccion: Si, debido a que es una suma así contenga las "" 
//Predicción erronea 

//Actividad 1.1
console.log("Jesus David Tobos Mora.");
console.log("Tomateos of trees");
console.log("Cantidad de plantas: " + (7 * 4));
console.log("Litros faltantes para regar 8 plantas: " + (8 * 2));
//Operaciones 

//Division   
console.log(20 / 4)
//Residuo de la division
console.log(20 % 6)
//Potencia
console.log(2 ** 3)

//Diferencias entre warn() y error en la consola
//warn() muestra un mensaje de advertencia en la consola, mientras que error es alguna falla que se produce en el código y se muestra en la consola como un mensaje de error.

console.log("Cultivo registrado");

//Practica 1.2

//Variables
//Const, String
const cultivoInicial = "Tomate";
//Let, Number
let diasIniciales = 15;
//Const, Number
const aguaSemanalInicial = 4.5;
//Const, Boolean
const necesitaSolInicial = true;

console.log(cultivoInicial); // Muestra "Tomate"
console.log(typeof cultivoInicial); // Muestra "string"
console.log(typeof diasIniciales); // Muestra "number"
console.log(typeof necesitaSolInicial); // Muestra "boolean"

diasIniciales = diasIniciales + 7;
console.log(diasIniciales); // Muestra 22
console.log(aguaSemanalInicial * 3); // Muestra 13.5

//Conversion de datos
const cantidadTexto = "12";
const cantidadNumero = Number(cantidadTexto);

console.log(cantidadTexto + 3); // Muestra "123"
console.log(cantidadNumero + 3); // Muestra 15
console.log(Number("doce")); // Muestra NaN
console.log(Number.isNaN(Number("doce"))); // Muestra true
console.log(12 === "12"); // Muestra false

console.log(cantidadNumero + 3); // Muestra 15
console.log(Number("doce")); // Muestra NaN
console.log(Number.isNaN(Number("doce"))); // Muestra true
console.log(12 === 12); // Muestra true

//Declaración, asignación y tipo
const nombreDePrueba = "Rábano";  // Declara y asigna una cadena
let unidadesDePrueba = 8;        // Declara un número que puede cambiar
unidadesDePrueba = 12;           // Reasigna el valor anterior

console.log(nombreDePrueba); // Muestra "Rábano"
console.log(unidadesDePrueba); // Muestra 12
console.log(typeof unidadesDePrueba); // Muestra "number"

//Depurar
let pendienteDeAsignacion;
const datoAusente = null;

console.log(pendienteDeAsignacion); // undefined
console.log(datoAusente);          // null
console.log(typeof pendienteDeAsignacion); // "undefined"

//Numero asignado a la depuracion

pendienteDeAsignacion = 10;

console.log(pendienteDeAsignacion); //Muestra 10     
console.log(typeof pendienteDeAsignacion) //Muestra "number"

//Cadena asignada a la depuracion

pendienteDeAsignacion = "DIEZ"; 

console.log(pendienteDeAsignacion); // Muestra "DIEZ"
console.log(typeof pendienteDeAsignacion); // Muestra "string"

//Operaciones por diferenciar
const precioDePrueba = 2500;
const cantidadDePrueba = 3;
const descuentoDePrueba = 1000;

console.log(precioDePrueba * cantidadDePrueba); // Muestra 7500
console.log(precioDePrueba * cantidadDePrueba - descuentoDePrueba); // Muestra 6500
console.log(cantidadDePrueba >= 3); // Muestra true
console.log(cantidadDePrueba === "3"); // Muestra false debido a que 3 no es el mismo tipo de dato que "3" 
console.log(cantidadDePrueba !== 0); // Muestra true

//Ensayo

console.log(Number("  ")); // Muestra 0
console.log(Number("-3")); // Muestra -3
console.log(Number("2,5")); // Muestra NaN

//Actividad  
const NombreCultivo = "Tomate";
const ValorUnidad = 2500;
let UnidadesDisponibles = 8;

console.log(typeof NombreCultivo); // Muestra "string"
console.log(typeof ValorUnidad); // Muestra "number"
console.log(typeof UnidadesDisponibles); // Muestra "number"
console.log(NombreCultivo); // Muestra "Tomate"
console.log(ValorUnidad * UnidadesDisponibles); // Muestra 20000
console.log(UnidadesDisponibles >= 5); // Muestra true que es si hay disponibilidad de unidades

//Preuba

const DiezUnidades = (ValorUnidad * 10); // Muestra 25000
console.log(DiezUnidades);
const SieteUnidades = (ValorUnidad * 7); // Muestra 17500
console.log(SieteUnidades);
let Diferencia = (DiezUnidades - SieteUnidades); // Muestra 7500
console.log(Diferencia);
// Prueba 10 + 2 * 3 y (10 + 2) * 3. Explica el orden de las operaciones.
console.log(10 + 2 * 3); // Muestra 16, porque primero se realiza la multiplicación y luego la suma.
console.log((10 + 2) * 3); // Muestra 36, porque primero se realiza la suma dentro del paréntesis y luego la multiplicación.
// Predice y ejecuta 10 > 8, 10 <= 8, 10 !== "10", 5 === 5 y 5 == "5". Para código nuevo prefiere === y !== a la comparación con conversión implícita.
console.log(10 > 8); // Muestra true
console.log(10 <= 8); // Muestra false
console.log(10 !== "10"); // Muestra true, porque son de tipos diferentes
console.log(5 === 5); // Muestra true, porque son iguales y del mismo tipo
console.log(5 == "5"); // Muestra true, porque se realiza una conversión implícita y ambos valores son iguales después de la conversión.
// Calcula el costo de agua de un cultivo si usa 3.5 litros por semana durante cuatro semanas y cada litro cuesta 250 unidades monetarias. Resultado esperado: 3500.
const litrosPorSemana = 3.5;
const semanas = 4;
const costoPorLitro = 250;
const costoTotal = litrosPorSemana * semanas * costoPorLitro;
console.log(costoTotal); // Muestra 3500
// Prueba los operadores abreviados: contador += 1, contador -= 2 y contador *= 3. Crea primero la variable contador con let.
let contador = 0;
contador += 1; // Muestra 1
console.log(contador);
contador -= 2; // Muestra -1
console.log(contador);
contador *= 3; // Muestra -3
console.log(contador);

//Error Intencional 
const diasDePrueba = 10;
diasDePrueba = 11;
console.log(diasDePrueba);