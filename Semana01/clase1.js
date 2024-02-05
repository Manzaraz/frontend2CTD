/* -------------------------------------------------------------------------- */
/*                                  FUNCION 1                                 */
/* -------------------------------------------------------------------------- */
function iniciarJuego() {
    // Saludamos al vistante
    alert("Bienvenido al juego de Piedra, Pael o Tijera de Frontend 2.!");
    // Guardar el nombre en una variable
    const nombre = prompt("Su nombre");

    // alert("Hola " + nombre + ".")
    alert(`¡Hola estimado: ${nombre}, Mucha suerte!`)

    // Mostramos los datos en consola
    console.log("---------------------------");
    console.log("El nombre del jugador es: ");
    console.log(nombre);
    console.log("---------------------------");

    return nombre
}


/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Modificar la funcion de iniciarJuego(), validar si ingresa un dato válido como nombre.
// 2- Si no ingresa un texto, o tiene menos de 3 caracteres debemos volverle a pedir que lo ingrese.
// 3- Finalmente el nombre devuelto debe estar todo en mayúsculas.



/*  
// ***************************
// Resolución de la mesa de uno de los equipos
// Equipo 2
// ***************************


function iniciarJuego() {
    let ok = false;
    let soloLetras
    // suludamos al usuario
    alert("Bienvenido al piedra papel o tijera de Frontend II.");

    do {
        let nombre = prompt("Ingese su nombre por favor:").toUpperCase().trim()
        soloLetras = /^[a-zA-Z]+$/;
        // guardamos en una variable en nombre ingresado
        // if (!isNaN(nombre) || nombre.length <= 3) {
        if (nombre.length < 3 || !soloLetras.test(nombre)) {

            alert("Tu nombre debe tener mas de 3 caracteres y no se permiten numeros");
            nombre = prompt("Ingese su nombre por favor:").toUpperCase()
            ok = true
        } else {
            ok = false
            alert("Gracias por jugar " + nombre + ". ¡Mucha suerte!");
            // mostramos los datos por consola
            console.log("----------------------------");
            console.log("El jugador es:")
            console.log(nombre);
            console.log("----------------------------");
            return nombre;
        }
    } while (ok == true)
}


// creamos una variable a nivel global para guardar el nombre del jugador que nos devuelve la función
// let nombreJugador = iniciarJuego();
// console.log(nombreJugador);


*/ 

