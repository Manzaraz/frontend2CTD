/* -------------------------------------------------------------------------- */
/*                                  FUNCION 2                                 */
/* -------------------------------------------------------------------------- */
// 👇 Esta funcion nos devuelve 1, 2 o 3 según la elección del usuario.
// Hasta que el usuario ingrese un dato válido le seguimos pidiendo que elija.

function pedirJugada() {
    // inicilaizamos con la variable elección en 0
    let eleccion = 0

    do {
        // pedimos que elija una opcion válida  
        // convertimos el texto que nos llega en un número
        // y reemplazamos en valor guardado en la variable
        eleccion = parseInt(prompt("Ingrese para jugar 1(🗿 Piedra) 2(🧻 Papel) o 3(✂️Tijera)"))

    } while (isNaN(eleccion) || eleccion < 1 || eleccion > 3);

    // para mostrar por consola
    console.log("----------------------------");
    console.log("La elección del jugador es:")
    console.log(eleccion);
    console.log("----------------------------");

    // Finalmente devolevemos el valor de eleccion
    return eleccion
}
// let jugadaUsuario = pedirJugada()

/* -------------------------------------------------------------------------- */
/*                                  FUNCION 3                                 */
/* -------------------------------------------------------------------------- */
function jugadaRandom() {
    min = 1
    max = 4
    let numero = parseInt(Math.random() * (max - min) + min);
    // let numero = Math.floor(Math.random() * (max - min) + min);

    // let numero = Math.round(Math.random() * (max - min) + min); // esta opcion no me toma el 1
    // let numero = Math.ceil(Math.random() * (max - min) + min); // esta opcion me da 4

    // mostramos los datos por consola
    console.log("----------------------------");
    console.log("La jugada de la compu es:")
    console.log(numero);
    console.log("----------------------------");

    // finalmente devolvemos el valor de la eleccion
    return numero
}

// let jugadaPC = jugadaRandom()


/* -------------------------------------------------------------------------- */
/*                                  FUNCION 4                                 */
/* -------------------------------------------------------------------------- */
// 👇 Esta funcion nos devuelve el resultado de la partida según las elecciones.
// Comparamos la eleccion de cada uno para saber quien pierde y quien gana.

function compararJugadas() {
    const RESULTADOS_POSIBLES = ['¡Genial, ganaste!', 'Esto fue un empate.', 'Una lástima, perdiste.'];
    const OPCIONES = ['piedra', 'papel.', 'tijera'];

    const ELECCION_JUGADOR = pedirJugada()
    const JUGADA_PC = jugadaRandom()

    // El valor por defecto de la jugada es Gana
    let resultaRonda = RESULTADOS_POSIBLES[0]

    if (ELECCION_JUGADOR == JUGADA_PC) {
        resultaRonda = RESULTADOS_POSIBLES[1]
    } else if (
        (ELECCION_JUGADOR == 1 && JUGADA_PC == 2) ||
        (ELECCION_JUGADOR == 2 && JUGADA_PC == 3) ||
        (ELECCION_JUGADOR == 3 && JUGADA_PC == 1)
    ) {
        resultaRonda = RESULTADOS_POSIBLES[2]
    }

    return `La computadora eligió: ${OPCIONES[JUGADA_PC - 1]} \n eleccion Jugador: ${OPCIONES[ELECCION_JUGADOR - 1]} \n ${resultaRonda}`
}

// let jugada = compararJugadas()
// console.log(jugada);
// const resultadoDePartida = compararJugadas()
// console.log(resultadoDePartida);
