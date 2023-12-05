/* --------------------------------- spinner -------------------------------- */
// necesitamos clickear el boton y que desaparezca el texto y se vea el gif unos segundos
const btn = document.querySelector('button');
const btnImg = document.querySelector('button img');
const btnTexto = document.querySelector('button span');

btn.addEventListener("click", () => { 
    console.log("Click");  
    // Para mostrar el spinner
    invertirClases()
    btn.setAttribute("disabled", "")
    // despues de 3 segundos invertimos esta situación... o cuando recibimos la respusta del fetch
    setTimeout(() => {
        invertirClases()
        btn.removeAttribute("disabled")
    }, 3000);

 })

 function invertirClases() {
    btnImg.classList.toggle("oculto")
    btnTexto.classList.toggle("oculto")
 }


/* ----------------------------- barra progreso ----------------------------- */
const barra = document.querySelector('#barra');
const relleno = document.querySelector('#relleno');

let porcentaje = 0

// Mostramos la barra en el porcentaje inicial👇🏼
relleno.style.width = `${porcentaje}%`

const intervalo = setInterval(() => {
    if (porcentaje < 100) {
        porcentaje++
        relleno.style.width = `${porcentaje}%`
    } else {
        // Frenamos el intervalo 
        clearInterval(intervalo)
    }
}, 100);
// relleno.style.width = `100%` // que esto seria lo ideal agregarlo dentro del objeto respuesta del fetch, dentro de uno del los .then()


/* -------------------------------- skeleton -------------------------------- */

const apiUrl = 'https://pokeapi.co/api/v2/pokemon/pikachu';
const pokemon = document.querySelector('#pokemon')
const skeleton = document.querySelector('.skeleton');

fetch(apiUrl)
.then( res => res.json())
.then( data => {
    console.log(data);
    console.log(data.name);
    console.log(data.sprites.front_default);
    console.log(data.types[0].type.name);

    // usamos el set timeout para demorar la carga, esto es opcional
    setTimeout(() => {
        // remover la tarjeta existente
        skeleton.remove()
    
        // inserte la taarjeta
        
        pokemon.innerHTML += componenteTarjeta(data.name, data.sprites.front_default, data.types[0].type.name)
    }, 3000);


})

const componenteTarjeta = (nombre, img, tipo) => {
    return `
        <article>
            <h2>${nombre}</h2>
            <img src="${img}" alt="pokemon">
            <h6>Tipo: ${tipo}</h6>
        </article>
    `
}