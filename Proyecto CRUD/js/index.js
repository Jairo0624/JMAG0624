let formulario = document.getElementById('formulario');
    let formularioEditar = document.getElementById('formularioEditar');
    let nombre = document.getElementById('nombre');
    let fecha = document.getElementById('fecha');
    let descripcion = document.getElementById('descripcion');
    let idTarea = document.getElementById('idTarea');
    
    let audioMp3 = document.getElementById('audioMp3');
    let videoMp4 = document.getElementById('videoMp4');
    let imagen = document.getElementById('imagen');
 
    let tareas = [
        {nombre : "Geometry Dash", 
        fecha : "2013-08-13", 
        descripcion :"Geometry Dash es un videojuego de plataformas y videojuego rítmico creado en 2013 por el desarrollador sueco Robert Topala.",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqnwU-PsfkfSP_gP_Jafhjl_6LGxEiL3nQ5OoCHdNBvXi885LiYJ38LJuWm7Y5J-0VZyA&usqp=CAU",
        audioMp3: "Music/Jumper.mp3",
        videoMp4:"Videos/Geometry Dash 2.2 Trailer.mp4" }, ,
        
        {nombre : "Super Mario Galaxy", 
        fecha : "2007-11-01", 
        descripcion :" Es un videojuego de plataformas en 3D desarrollado por Nintendo. ",
        imagen: "https://www.fayerwayer.com/resizer/v2/L73WKC6WCZA4HH4HXUZMMNUTI4.jpg?auth=8a7ac22d4032a79e179eae23609b70c09ad49ed3594462779545ef3c57d460e4&width=1440&height=810&smart=true",
        audioMp3: "Music/Super Mario Galaxy-Wind Garden.mp3",
        videoMp4: "Videos/Super Mario Galaxy Nintendo Wii Trailer.mp4"},
        
        {nombre : "Brawl Stars",
        fecha : "2018-02-12",
        descripcion :"¡Frenéticas batallas multijugador 3c3 y modo de supervivencia para dispositivos móviles! Juega en una gran variedad de modos de juego. ",
        imagen: "https://pbs.twimg.com/media/GBJJunGWsAAUw7c?format=jpg&name=4096x4096",
        audioMp3: "Music/Brawl Stars OST - Menu.mp3",
        videoMp4: "Videos/Brawl Stars_ No Time to Explain.mp4"},];
 
    let listaTareas = document.getElementById("listaTareas");
    let btnGuardar = document.getElementById('btnGuardar');
    let btnGuardarEditar = document.getElementById('btnGuardarEditar');
 
    function mostrarTareas(){
        listaTareas.innerHTML = "";
        tareas.forEach((tarea,indice) => {
            listaTareas.innerHTML += `
            <div class='row py-4' >
                <div class='col-2 border p-2'>
                    <strong>${ tarea.nombre }</strong>
                </div>
                <div class='col-2 border p-2'>
                    <strong>${ tarea.fecha }</strong>
                </div>
                <div class='col-2 border p-2 text-justify'>
                    <strong>${ tarea.descripcion }</strong>
                </div>
                <div class='col-1 border p-2 text-center'>
                    <button class='btn btn-success' data-bs-toggle="modal" data-bs-target="#editarTarea" onclick="editarTarea(${ indice })">Editar</button>
                </div>
                <div class='col-1 border p-2 text-center'>
                    <button class='btn btn-danger' onClick="borrarTarea(${ indice })">Borrar</button>
                </div>
                <div class='col-1 border p-1 text-center'>
                    <img src="${ tarea.imagen }" class="imagenProducto card-img-top py-5" alt="...">
                </div>
                <div class='col-1 border p-1 text-center'>
                    <audio controls>
                        <source src="${ tarea.audioMp3 }" type="audio/mp3">
                    </audio>
                </div>
                <div class='col-2 border p-2 text-center'>
                    <video controls>
                        <source src="${ tarea.videoMp4 }" type="video/mp4">
                    </video>
                </div>
            </div>
            `;
        });
    }
 
    mostrarTareas();
 
    let editarTarea = (indice) => {
        nombreEditar.value = tareas[indice].nombre;
        fechaEditar.value = tareas[indice].fecha;
        descripcionEditar.value = tareas[indice].descripcion;
        idTarea.value = indice;
    }
 
    formularioEditar.addEventListener("submit", (e)=>{
        e.preventDefault();
        let indice = idTarea.value;
        tareas[indice].nombre = nombreEditar.value;
        tareas[indice].fecha = fechaEditar.value;
        tareas[indice].descripcion = descripcionEditar.value;
        mostrarTareas();
        cerrarModalEditar();
    });
 
    let agregarDatos = ()=> {
        let datos = {
            nombre: nombre.value,
            fecha: fecha.value,
            descripcion: descripcion.value
        }
        tareas.push(datos);
        mostrarTareas();
    }
    
    let cerrarModal = ()=> {
        btnGuardar.setAttribute("data-bs-dismiss","modal");
        btnGuardar.click();
    }
 
    let cerrarModalEditar = ()=> {
        btnGuardarEditar.setAttribute("data-bs-dismiss","modal");
        btnGuardarEditar.click();
    }
 
    let borrarTarea = (indice)=> {
        tareas.splice(indice,1);
        console.log(tareas);
        mostrarTareas();
    }
 
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        agregarDatos();
        cerrarModal();
        formulario.reset();
    });