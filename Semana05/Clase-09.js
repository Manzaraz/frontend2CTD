/* -------------------------- estado por defecto ------------------------- */
const estadoUsuario = {
    email: "",
    password: "",
    rol: "",
    terminos: false
};

// ponemos en true solo cuando estén correctos
const estadoErroresOK = {
    email: false,
    password: false,
    rol: false,
    terminos: false
};

/* ---------------------------------- nodos --------------------------------- */

// capturamos todos los elementos que necesitamos
const formulario = document.forms[0];

const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const inputRol = document.querySelector('#rol');
const inputTerminos = document.querySelector('#terminos');

const emailError = document.querySelector('#emailError');
const passwordError = document.querySelector('#passwordError');
const rolError = document.querySelector('#rolError');
const terminosError = document.querySelector('#terminosError');


/* -------------------------------------------------------------------------- */
/*                   [1] FUNCION: mostrar errores al usuario                  */
/* -------------------------------------------------------------------------- */
function mostrarErrores() {
    estadoErroresOK.email ? emailError.classList.remove("visible") : emailError.classList.add("visible")
    estadoErroresOK.password ? passwordError.classList.remove("visible") : passwordError.classList.add("visible")
    estadoErroresOK.rol ? rolError.classList.remove("visible") : rolError.classList.add("visible")
    estadoErroresOK.terminos ? terminosError.classList.remove("visible") : terminosError.classList.add("visible")
}

/* -------------------------------------------------------------------------- */
/*               [2] FUNCION: actulizamos los estados de la app               */
/* -------------------------------------------------------------------------- */

// 👇 por cada cambio en el formulario actualizamos
formulario.addEventListener('change', function () {


    // 👇 actualizo el estado de la pantalla con los datos
    estadoUsuario.email = inputEmail.value
    estadoUsuario.password = inputPassword.value
    estadoUsuario.rol = inputRol.value
    estadoUsuario.terminos = inputTerminos.checked

    estadoErroresOK.email = validarEmail(estadoUsuario.email)
    estadoErroresOK.password = validarPassword(estadoUsuario.password)
    estadoErroresOK.rol = validarRol(estadoUsuario.rol)
    estadoErroresOK.terminos = validarTerminos(estadoUsuario.terminos)
    // estadoErroresOK.password =  validarPasswd(estadoUsuario.password)

  
    mostrarErrores()
});


/* -------------------------------------------------------------------------- */
/*                        [3] FUNCIONES: validar campos                       */
/* -------------------------------------------------------------------------- */
function validarEmail(email) {
    let resultado = false

    console.log(email);
    // validamos el emaail a la vieja escuela jds
    // if (
    //     email.includes("@") &&
    //     email.includes(".") &&
    //     !email.includes(" ") &&
    //     email.length > 5
    // ) {
    //     resultado = true
    // }
   

    // mail@algo.com
    // ejemplo de expresion regular
    let regExp = new RegExp("[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}") // Modifiqué la expresión regular
    if (regExp.test(email)) {
        resultado = true
        console.log("cumple");
    }

    return resultado
}

function validarPassword(password) {

    let resultado = false

    // let regExp = new RegExp("/^[A-Za-z\d$@$!%*?&]{6,12}+$/")

    // if (regExp.test(password)) {
        if (password.length > 5 && !password.includes(" ")) {
            
            resultado = true
            console.log("cumple");
        }
    
    
    return resultado
}
function validarRol(rol) {

    let resultado = false

    if (rol == "frontend" || rol == "backend") {
        
        resultado = true
        console.log("cumple");
    }
    
    return resultado
}
function validarTerminos(verificacion) {

    let resultado = false

    if (verificacion) {
        
        resultado = true
        console.log("cumple");
    }
    
    return resultado
}


/* -------------------------------------------------------------------------- */
/*                      [4] FUNCION: escuchamos el submit                     */
/* -------------------------------------------------------------------------- */

// en el evento submit nos remitimos a chequear nuestro estado de errores
formulario.addEventListener('submit', function (evento) {
    // prevenimos el default para manejar nososotro el comportamiento
   evento.preventDefault()

    if (
        estadoErroresOK.email &&
        estadoErroresOK.password &&
        estadoErroresOK.rol &&
        estadoErroresOK.terminos
    ) {
        console.log("success");
        navegarPaginaExito()
    }

});




/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                [5] FUNCION: Formulario completado con éxito                */
/* -------------------------------------------------------------------------- */
// Esta funcion se va a encargar de realizar la redirección cuando el formulario se complete correctamente.
// Para eso debera cumplir con los siguientes requerimientos.
// 1 - Deshabilitar el boton del formulario.
// 2 - Esperar 3 segundos para redireccionar a la página de 
// 3 - Durante ese tiempo el boton deshabilitado debe mostrar el texto: "Cargando..."
// 4 - Cuando vaya a la página de 'usuario.html' NO se debe permitir que mediante el botón de "Atrás"(la flechita del navegador) el usuario vuelva a index.

function navegarPaginaExito() {
    //   desarrollar la funcion aqui
    const btn = document.querySelector("button")
    btn.setAttribute("disabled", true)
    btn.textContent = "Cargando..."

    localStorage.setItem("user", JSON.stringify(estadoUsuario))

    setTimeout(() => {
        location.replace('./usuario.html')
        // console.log("redirige");
        
    }, 3000);

}
