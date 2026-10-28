// Laboratorio 1 — EcoHuerta
// Este archivo se ejecuta desde index.html (con el atributo defer).
// La interfaz está preparada, pero los controles todavía no tienen lógica.
// Construye las funciones, eventos y validaciones de las prácticas 1.6 y 1.7
// y de la actividad integradora. No elimines los id del HTML.

const anio = document.getElementById("anio");
anio.textContent = new Date().getFullYear();

// Punto de partida: crea aquí tu arreglo de cultivos, funciones y eventos.
// Revisa los criterios de la actividad integradora antes de empezar.

//Practica 1.6
//DOM Y Eventos
const tituloCultivos = document.getElementById("cultivosTitulo");
console.log(tituloCultivos.textContent);
tituloCultivos.textContent = "Catálogo de EcoHuerta";

//inspeccionar elementos
console.log(document.getElementById("totalCultivos").textContent);
console.log(document.querySelector("#cultivosTitulo").textContent);
console.log(document.querySelector(".crop-card")?.textContent);