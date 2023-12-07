// SEGURIDAD: Si no se encuentra en localStorage info del usuario
// no lo deja acceder a la página, redirigiendo al login inmediatamente.
// if (!localStorage.jwt) {
if (!localStorage.getItem("jwt")) {
  console.log("No lo tengo");
  location.replace("./index.html")
}


/* ------ comienzan las funcionalidades una vez que carga el documento ------ */
window.addEventListener('load', function () {
  /* ------------------------- iniciamos libreria AOS ------------------------- */
  AOS.init();

  /* ---------------- variables globales y llamado a funciones ---------------- */
  const url = "https://todo-api.ctd.academy/v1"
  const urlTareas = `${url}/tasks`;
  const urlUsuario = `${url}/users/getMe`;
  const token = JSON.parse(localStorage.jwt)

  const btnCerrarSesion = document.querySelector('#closeApp');
  const formCrearTarea = document.querySelector('.nueva-tarea');
  const nuevaTarea = document.querySelector('#nuevaTarea');

  obtenerNombreUsuario()
  consultarTareas()

  /* -------------------------------------------------------------------------- */
  /*                          FUNCIÓN 1 - Cerrar sesión                         */
  /* -------------------------------------------------------------------------- */

  btnCerrarSesion.addEventListener('click', function () {
    // const cerrarSesion = confirm("¿Desas cerrar sesión?")
    // console.warn(cerrarSesion);

    // if (cerrarSesion) {
    //   localStorage.clear()
    //   location.replace("./index.html")
    // }

    // Implemento la librería sweet alert para reemplazar el confirm 
    Swal.fire({
      title: "¿Estás seguro de que deseas cerrar sesión?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Si, Confirmo!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '¡Hasta luego!',
          'Te esperamos pronto.',
          'success'
          )
          setTimeout(() => {
            localStorage.clear()
            location.replace("./index.html")
          }, 2000);
      }
    });

  });

  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 2 - Obtener nombre de usuario [GET]                */
  /* -------------------------------------------------------------------------- */

  function obtenerNombreUsuario() { 
    const settings = {
      method: "GET",
      headers: {
        // authorization: JSON.stringify(token) // si stringifico le afecto el valor del token que lee la API y me rechaza con el error 401
        authorization: token 
      }
    }

    console.log("consulto mi usuario a la api...");
    fetch(urlUsuario, settings)
      .then( response => {if (response.ok) return response.json()})
      .then( dataUsuario => {
        // console.log(dataUsuario);
        console.log(dataUsuario.firstName);
        const nombreUsuario = document.querySelector(".user-info p")
        nombreUsuario.textContent = dataUsuario.firstName
      })
  };


  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 3 - Obtener listado de tareas [GET]                */
  /* -------------------------------------------------------------------------- */

  function consultarTareas() {

    const settings = {
      method: "GET",
      headers: {
        authorization: token
      }
    }
    
    console.log("🚩 consultamos tareas");
    
    fetch(urlTareas, settings)
      .then( response => response.json())
      .then( tareas =>  {
        console.log("tareas del usuario");
        console.log(tareas);

        renderizarTareas(tareas)
        botonesCambioEstado()
        botonBorrarTarea()

      })
      .catch(err => console.log(err)) // se puede prescindir de esta línea
  };


  /* -------------------------------------------------------------------------- */
  /*                    FUNCIÓN 4 - Crear nueva tarea [POST]                    */
  /* -------------------------------------------------------------------------- */

  formCrearTarea.addEventListener('submit', function (event) {
    event.preventDefault()

    console.log("🚩 Creamos tarea nueva");
    console.log(nuevaTarea.value);
    
    const payload = {
      description: nuevaTarea.value.trim(),
      completed: false
    }
    const settings = {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
        authorization: token
      }
    }
    
    console.log("🚩 Creando una nuevatarea en la API");
    fetch(urlTareas, settings)
      .then(response => response.json())
      .then( tarea => {
        console.log(tarea);
        consultarTareas()
      })
      .catch(err => console.log(err))






  });


  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 5 - Renderizar tareas en pantalla                 */
  /* -------------------------------------------------------------------------- */
  function renderizarTareas(tareas) {
    console.log(tareas);

    const tareasPendientes = document.querySelector(".tareas-pendientes")
    const tareasTerminadas = document.querySelector(".tareas-terminadas")

    tareasPendientes.innerHTML = ""
    tareasTerminadas.innerHTML = ""

    // buscamos el numero de tareas finalizadas

    const numeroFinalizadas = document.querySelector("#cantidad-finalizadas")
    let contador = 0
    numeroFinalizadas.textContent = contador


    tareas.forEach(tarea => {
      // variable intermedia para manipular la fecaha
      let fecha = new Date(tarea.createdAt)
      
      if (tarea.completed) {
        contador++ 
        // lo mandamos al listado de tareas completadas
        tareasTerminadas.innerHTML += `
          <li class="tarea" data-aos="flip-down" data-aos-duration="3000">
            <div class="hecha">
              <i class="fa-regular fa-circle-check"></i>
            </div>
            <div class="descripcion">
              <p class="nombre">${tarea.description}</p>
              <div class="cambios-estados">
                <button class="change incompleta" id="${tarea.id}"><i class="fa-solid fa-rotate-left"></i></button>
                <button class="borrar" id="${tarea.id}"><i class="fa-regular fa-trash-can"></i></button>
              </div>
            </div>
          </li>
        `
      } else {
        // lo mandamos al listado de tareas incompletas
        tareasPendientes.innerHTML += `
          <li class="tarea"  data-aos="fade-right" data-aos-duration="1500" >
            <button class="change" id="${tarea.id}"><i class="fa-regular fa-circle"></i></button>
            <div class="descripcion">
              <p class="nombre">${tarea.description}</p>
              <p class="timestamp">${fecha.toLocaleDateString()}</p>
            </div>
          </li>
        `
      }
      numeroFinalizadas.textContent = contador
    });





  };

  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 6 - Cambiar estado de tarea [PUT]                 */
  /* -------------------------------------------------------------------------- */
  function botonesCambioEstado() {
    
    const btnCambioEstado = document.querySelectorAll(".change")

    btnCambioEstado.forEach(boton => {
      boton.addEventListener("click", (e) => { 
        console.log("cambio estado de tarea");
        console.log(e.target.id);

        const id = e.target.id
        const url = `${urlTareas}/${id}`

        const payload = {}

        // segun el tipo de boton que fue clickead, vamos a ver si contiene la clase incompleto
        if (e.target.classList.contains("incompleta")) {
          // si esta completa la paso a pendiente
          payload.completed = false          
        } else {
          // sino . la paso a completada
          payload.completed = true
        }
        console.log(payload);

        const settingsCambio = {
          method: "PUT",
          headers: {
            "Authorization": token,
            "Content-type": "application/json"
          },
          body: JSON.stringify(payload),
        }

        fetch(url, settingsCambio)
          .then(response => {
            console.log(response.status);
            // vuelvo a consultar tareas actualizadas para que las pinte como completadas
            consultarTareas()
          })
          .catch(err => console.log(err))
  
       })
    })
    



  }


  /* -------------------------------------------------------------------------- */
  /*                     FUNCIÓN 7 - Eliminar tarea [DELETE]                    */
  /* -------------------------------------------------------------------------- */
  function botonBorrarTarea() {
   //obtenemos los botones de borrado
   const btnBorrarTarea = document.querySelectorAll('.borrar');

   btnBorrarTarea.forEach(boton => {
     //a cada boton de borrado le asignamos la funcionalidad
     boton.addEventListener('click', function (event) {

       Swal.fire({
         title: '¿Confirma eliminar la tarea?',
         icon: 'question',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Confirmar',
         cancelButtonText: 'Cancelar'
       }).then((result) => {
         if (result.isConfirmed) {

           const id = event.target.id;
           const url = `${urlTareas}/${id}`

           const settingsCambio = {
             method: 'DELETE',
             headers: {
               "Authorization": token,
             }
           }
           fetch(url, settingsCambio)
             .then(response => {
               console.log("Borrando tarea...");
               console.log(response.status);
               //vuelvo a consultar las tareas actualizadas y pintarlas nuevamente en pantalla
               consultarTareas();
             })

           Swal.fire(
             'Tarea eliminada!',
           )
         }
       })
     })
   });

    

    

  };

});