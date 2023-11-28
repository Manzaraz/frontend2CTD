// Creamos un nuevo metodo que nos sirve para verificar si el campo está vacio y si hay errores
const setErrors = (message, field, isError = true) => {
    // console.log(message, field, isError);
    if (isError) {
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error")
        field.nextElementSibling.textContent = message
    } else {
        field.classList.remove("invalid")
        field.nextElementSibling.classList.remove("error")
        field.nextElementSibling.textContent = ""       
    }
}
// Creamos un metodo para verificarf si el input esta vacio
const isEmpty = (message, e) => {
    console.log(e.target);
    const field = e.target
    const fieldValue = normalizarEmail(field.value) 

    if (fieldValue.length  == 0) {
        setErrors(message, field)
    }

}

/* ---------------------------------- texto --------------------------------- */
function validarTexto(texto) {
    
}

function normalizarTexto(texto) {
    return texto.trim()
}

/* ---------------------------------- email --------------------------------- */
// function validarEmail(email) {
function validarEmail(e) {
    // console.log(e);
    // console.log(e.target);
    const field = e.target
    const fieldValue = normalizarEmail(field.value) 
    // console.log(fieldValue);
    const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    // console.log(regex.test(fieldValue));

    if (fieldValue.length > 4 && !regex.test(fieldValue)) {
        setErrors(`🚨 Por favor ingrese un ${field.name} válido`, field)
    } else {
        setErrors("", field, false)        
    }


}

function normalizarEmail(email) {

    return email.trim().toLowerCase()
}

/* -------------------------------- password -------------------------------- */
// function validarContrasenia(contrasenia) {
function validarContrasenia(e) {
    const field = e.target
    const fieldValue = normalizarTexto(field.value) 
    // console.log(fieldValue.length);

    if (fieldValue.length < 6) {
        setErrors(`🚨Por favor ingrese ${field.name} válido, que sea mayor a 6 caracteres`, field)
    } else {
        setErrors("", field, false)        
    }    
}

function compararContrasenias(contrasenia_1, contrasenia_2) {
    
}

