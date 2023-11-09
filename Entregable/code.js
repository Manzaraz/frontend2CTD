/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

// function obtenerDatosDelUsuario() {
//   /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */

// }

// function renderizarDatosUsuario() {
//   /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
//   obtenerDatosDelUsuario();
//   /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */

// }


// function recorrerListadoYRenderizarTarjetas() {
//   /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */

// }

// function alternarColorTema() {
//   /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */

// }

// /* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

//   window.addEventListener("keypress", function(e) {
//     console.log(e);
//     console.log(e.keyCode);
//     if (e.code == "KeyF") {
//       document.querySelector("#sobre-mi").classList.remove("oculto")
//       console.log(e.key);
//     }
//   })

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt("Por favor, introduce tu nombre:");
  
  const anioNacimiento = parseInt(prompt("Por favor, introduce tu año de nacimiento:"));
  datosPersona.anioNacimiento = anioNacimiento;
  
  datosPersona.ciudad = prompt("Por favor, introduce tu ciudad:");
  
  const javaScript = confirm("¿Te interesa JavaScript?");
  datosPersona.javaScript = javaScript;
  
  const anioActual = new Date().getFullYear();
  datosPersona.edad = anioActual - anioNacimiento;
  
  console.log("Datos recopilados:", datosPersona);
}
  // consultarDatos();
function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  const nombreElement = document.getElementById("nombre");
  const edadElement = document.getElementById("edad");
  const ciudadElement = document.getElementById("ciudad");
  const interesElement = document.getElementById("interes");
  //
  nombreElement.textContent = datosPersona.nombre;
  edadElement.textContent = datosPersona.edad;
  ciudadElement.textContent = datosPersona.ciudad;
  if (datosPersona.javaScript) {
    interesElement.textContent = "Sí";
  } else {
    interesElement.textContent = "No";
  }
}
function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  
let materiasRenderizadas = false;
  if (materiasRenderizadas) {
    return;
  }
  const fila = document.getElementById('fila');
  const materias = [
    {
      nombre: 'Matemáticas',
      lenguajes: 'JavaScript, Python',
      bimestre: 'Primer Bimestre',
      imagenSrc: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/164EE/production/_109347319_gettyimages-611195980.jpg' ,
      imagenAlt: 'Matemáticas',
    },
    
  ];
  materias.forEach((materia) => {
    
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('caja');
    const imagen = document.createElement('img');
    imagen.src = materia.imagenSrc;
    imagen.alt = materia.imagenAlt;
    
    const parrafoLenguajes = document.createElement('p');
    parrafoLenguajes.classList.add('lenguajes');
    parrafoLenguajes.textContent = 'Lenguajes: ' + materia.lenguajes;
    
    const parrafoBimestre = document.createElement('p');
    parrafoBimestre.classList.add('bimestre');
    parrafoBimestre.textContent = 'Bimestre: ' + materia.bimestre;
    
    tarjeta.appendChild(imagen);
    tarjeta.appendChild(parrafoLenguajes);
    tarjeta.appendChild(parrafoBimestre);
    
    fila.appendChild(tarjeta);
  });
  
  materiasRenderizadas = true;
const obtenerMateriasBtn = document.getElementById('obtenerMateriasBtn');
obtenerMateriasBtn.addEventListener('click', renderizarMaterias);
}
function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 
function alternarTema() {
  const sitioElement = document.getElementById('sitio');
  sitioElement.classList.toggle('dark');
  
}
const alternarTemaBtn = document.getElementById('cambiar-tema');
alternarTemaBtn.addEventListener('click', alternarTema);
}
/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
function manejarEventoDeTeclado(event) {
if (event.key === 'F' || event.key === 'f') {
  const parrafoSobreMi = document.getElementById('sobre-mi');
  parrafoSobreMi.classList.remove('oculto');
  
  
  document.removeEventListener('keydown', manejarEventoDeTeclado);
}
}
document.addEventListener('keydown', manejarEventoDeTeclado);