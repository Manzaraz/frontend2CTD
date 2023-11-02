/* --------------------------- listado de almbumes --------------------------- */
const albumesFamosos = [{
        id: "x123",
        nombre: "Nevermind",
        imagen: "https://m.media-amazon.com/images/I/71DQrKpImPL._SL1400_.jpg",
        like: true
    },
    {
        id: "y456",
        nombre: "Thriller",
        imagen: "https://img.discogs.com/LfnH5tbhcZ4xRMNLAodIyvea9xA=/fit-in/600x600/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-294033-1151290881.jpeg.jpg",
        like: false
    },
    {
        id: "z789",
        nombre: "The wall",
        imagen: "https://img.discogs.com/EbLYco6R1A-5Z7QJ4t4O1JSzsM8=/fit-in/587x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4620059-1370165707-3841.jpeg.jpg",
        like: false
    },
    {
        id: "a987",
        nombre: "Abbey Road",
        imagen: "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/RDH5EPH2TNENPI73NBWUWWMLPA.jpg",
        like: false
    },
    {
        id: "b654",
        nombre: "Origin of Symmetry",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_967206-MLA26105577132_102017-O.webp",
        like: false
    },
    {
        id: "c321",
        nombre: "Back in Black",
        imagen: "https://i1.wp.com/www.scienceofnoise.net/wp-content/uploads/2020/07/068660474366a63e1263e53ff370eb50.jpg",
        like: false
    }
];



/* -------------------------------------------------------------------------- */
/*                  [1] FUNCION: captar el nombre de usuario                  */
/* -------------------------------------------------------------------------- */
//do while, prompt, innerText
function obtenerUsuario() {
    const nombreUsuario = document.querySelector("#nombreUsuario")
    // console.log(nombreUsuario);

    let usuario = ""
    // Pedir el nombre del usuario hasta que saa válido
    do {
        usuario = prompt("Ingrese su nombre de usuario: ").toLowerCase().trim()
        // usuario = prompt("Ingrese su nombre de usuario: ")
    } while (usuario === null || usuario == "" || usuario.length < 3);

    // console.log(usuario.charAt(0).toUpperCase() + usuario.slice(1));
    // usuario = usuario.charAt(0).toUpperCase() + usuario.slice(1)
    let nombres  = usuario.split(" ")
    console.log(nombres.map( (nombre) => nombre.charAt(0).toUpperCase() + nombre.slice(1)));

    usuario = nombres.map( (nombre) => nombre.charAt(0).toUpperCase() + nombre.slice(1)).join(" ")

    // Insertando el dato en el HTML
    // nombreUsuario.textContent = usuario
    // nombreUsuario.createTextNode(usuario) // asî no se implementa con createTextNode
    nombreUsuario.append(document.createTextNode(usuario)) // así se implementa con con createTextNode
    // nombreUsuario.textContent = usuario.toLowerCase()
    // nombreUsuario.innerText = `<div>${usuario}</div>`
    // nombreUsuario.textContent = `<div>${usuario}</div>`
    // nombreUsuario.innerHTML = `<div>${usuario}</div>`


}
obtenerUsuario();

/* -------------------------------------------------------------------------- */
/*                [2] FUNCION: renderizar tarjetas del almbumes               */
/* -------------------------------------------------------------------------- */
//forEach, template strings, innerHTML
function renderizarAlbumes(listado) {
    // capturamos el selector donde inserto los nuevos nodos (o etiquetas HTML)
    const covers = document.querySelector(".covers")
    // console.log(covers);
    
    covers.innerHTML = ""
    console.log(covers);

    /* //Técnica de nodos
    listado.forEach(album => {
        //  Primero creamos los selectores que inyectaremos en el DOM
        const li = document.createElement("li")
        const img = document.createElement("img")
        const p = document.createElement("p")
        const i = document.createElement("i")

        // Agregamos atributos de cada nodo o etiqueta creada
        li.setAttribute("data-id", album.id)

        img.setAttribute("src", album.imagen)
        img.setAttribute("alt", album.nombre)

        p.textContent = album.nombre

        i.setAttribute("id", album.id)
        i.setAttribute("class", `fa fa-heart ${album.like ? "favorito" : ""}`)

        // cargamos los nuevos nodos al li, y des al cover
        li.appendChild(img)
        li.appendChild(p)
        li.appendChild(i)

        covers.appendChild(li)
    });
    */

    // Insercion atraves de template literals
   listado.forEach(album => 

    covers.innerHTML += `
        <li data-id="${album.id}">
            <img src="${album.imagen}" alt="${album.nombre}">
            <p >${album.nombre}</p>
            <i id="${album.id}" class="fa fa-heart ${album.like ? "favorito" : ""} "  ></i>
        </li>
    `

   );

//    if (album.like == true) {
//         console.log("Favorito");
//     } else {
//         console.log("No me gusta");    
//    }

// //    operador ternario
//    (album.like == true) ? console.log("Fav") : console.log("No fav");;


};

renderizarAlbumes(albumesFamosos);



/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                   [3] FUNCION: mostrar datos del usuario                   */
/* -------------------------------------------------------------------------- */
// Dentro del div '.perfil' tenemos un parrafo con 2 span en los que debemos colocar
// correctamente su contenido.
// Para eso debemos hacer ciertos calculos y colocar esa info en el HTML. Debemos:
// 1- contar la cantidad de albumes del array y pintarlo en el span correspondiente
// 2- contar la cantidad de favoritos y pintarlo en el span correspondiente
// 3- tener en cuenta: usar las palabra en plural o en singular, según cuando
// sea necesario ( es decir: 1 album, 1 favorito / 2 albumes, 3 favoritos )
function mostrarDatosEnPerfil(albumes) {
    // desarrollar la función 👇
    const cantidadAlbumes = document.getElementById("cant-albums"),
        cantidadFavoritos = document.querySelector("#cant-favoritos");

    let contadorAlbum = 0,
        contadorFavoritos = 0;

    albumes.forEach( function(album) {
    // albumes.forEach( (album) =>{
        contadorAlbum++
        // if (album.like == true) {
        if (album.like) {
            contadorFavoritos++
        }
    })

    console.log(contadorAlbum);
    console.log(contadorFavoritos);


    if (contadorAlbum == 1) {
        cantidadAlbumes.innerText = contadorAlbum + " álbum"
    } else {
        cantidadAlbumes.textContent = `${contadorAlbum} álbumes`
    }
    if (contadorFavoritos == 1) {
        cantidadFavoritos.innerText = contadorFavoritos + " favorito"
    } else {
        cantidadFavoritos.textContent = `${contadorFavoritos} favoritos`
    }
    

}
mostrarDatosEnPerfil(albumesFamosos);