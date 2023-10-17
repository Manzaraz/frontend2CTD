// 👇Acá vemos que el document nos dá acceso a todo el DOM, ese arbol que contiene todos los nodos de nuestro sitio
// console.log(window);
console.log(document)

// Ahora vamos a utilizar 2 métodos propios de document que nos facilitan "pescar" elementos en el sitio:
// - querySelector()
// - querySelectorAll()

// Obtenemos el titulo principal
const titulo = document.querySelector("h1")

// Ahora vayamos a la consola y despleguemos la flecha que nos muestra todas las propiedades del nodo
console.log(titulo);


// nos traemos ahora un listado de nodos 👇
console.log(titulo.textContent);
console.log(titulo.innerText);


// hacemos un selector más específico👇
const itemsMenu = document.querySelector(".info")
const infoExtra = document.querySelector(".info .clima")
const navItems = document.querySelectorAll("ul li")
const imagen = document.querySelector("[src='./img/futbol.webp']")


console.log(itemsMenu);
console.log(infoExtra);
console.log(navItems);
console.log(imagen);
console.log(itemsMenu.children);


/* ------------------------------- Practicando ------------------------------ */
// Seleccionamos la lista de noticias y revisamos su informacion interna.
// Aprovechamos que la NodeList es un ITERABLE, entonces podemos recorrerla.
// 🚩 No es un Array.
const articulos = document.querySelectorAll("article")
console.log(articulos);


// Ahora hacemos la misma practica pero con ForEach, y accedemos a propiedades de los nodos.
for (let i = 0; i < articulos.length; i++) {
    console.log(articulos[i])
}

// vamos a practiacar con ForEach
articulos.forEach(function (articulo) {
    const titular = articulo.querySelector("h2").innerText
    console.log(titular);
})

// for (const noticia of articulos) {
for (noticia of articulos) {
    const texto = noticia.querySelector("p").textContent
    console.log(texto);
}


/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1 - Escribir un selector para cada elemento del sitio.
// 2 - Plasmarlo en un diagrama de árbol como la consigna: https://docs.google.com/document/d/15nGvKkEcbrRgwqV50ISh0QYZ_TO67vmWQaLfNpUxqjs/preview


