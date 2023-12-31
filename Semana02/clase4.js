// 🚩 Antes de empezar, vinculemos el HTML solo con el script de clase 5.

// Vamos a interactuar con el DOM para agregarle mas estilos a nuestro sitio.
// 👇 Primero capturemos todos los elementos que vamos a modificar.
const sitio = document.querySelector("body")
let btnTema = document.querySelector(".tema button")
let menuItems = document.querySelectorAll("nav li")
let contenedorDeNoticias = document.querySelector("main")
let articulos = document.querySelectorAll("article")
let titulos = document.querySelectorAll("article h2")


// console.log(titulos)

/* ---------------------------- Editado los ITEMS --------------------------- */
// 👇acá podemos ver todas las propiedades CSS que podemos modificar con JS
// console.log(menuItems);
// console.log(menuItems[1].style);

// agregamos manualmente nuevos estilos en el menú
// menuItems.forEach(function (item) {
//     item.style.textTransform = "uppercase"
//     item.style.color = "aqua";
//     item.style.backgroundColor = "rgba(255,255,255, 0.2)"
//     item.style.borderRadius = "50vh"
//     item.style.padding = "10px"
//     item.style.marginTop = "20px"
// })
menuItems.forEach(item => {
    item.style.textTransform = "uppercase"
    item.style.color = "aqua";
    item.style.backgroundColor = "rgba(255,255,255, 0.2)"
    item.style.borderRadius = "50vh"
    item.style.padding = "10px"
    item.style.marginTop = "20px"
})

// for (let i = 0; i < menuItems.length; i++) {
//     menuItems[i].style.color = "aqua";
// }

/* ----------------------------- Editando clases ---------------------------- */

// vamos probando uno a uno los métodos
// console.log(sitio.classList);

// console.log(sitio.classList.contains("dark"));
// console.log(sitio.classList);

// console.log(sitio.classList.add("dark"));
// console.log(sitio.classList);

// console.log(sitio.classList.remove("dark"));
// console.log(sitio.classList);

// console.log(sitio.classList.remove("dark")); // si yo la aplico nuevamente en este caso no pasa nada en nuestro layout
// console.log(sitio.classList.toggle("dark"));
// console.log(sitio.classList);
// console.log(sitio.classList.toggle("dark"));
// console.log(sitio.classList);
// console.log(sitio.classList.toggle("dark"));
// console.log(sitio.classList);
// console.log(sitio.classList.toggle("dark"));
// console.log(sitio.classList);




/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// Primero debemos comentar o eliminar las líneas que modifican las clases de "sitio"
// 1- Desarrollar la función a continuacion para que el usuario elija el tema del sitio.
// 2- Debemos preguntarle al usuario mediante un confirm si desea usar el modo oscuro.
// 3- Si el usuario confirma debemos aplicar la clase "dark" al "sitio", si cancela debe quedar en modo claro.
// 4- A su vez, si está en modo onsecuritypolicyviolation, el texto del boton debe decir "Cambiar a modo claro 🌞". De lo contrario, si está en modo claro debeb decir "Cambiar a modo oscuro 🌛"
function elegirTema() {

}
elegirTema();