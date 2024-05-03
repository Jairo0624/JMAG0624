let formulario = document.getElementById('formulario');
let nombre = document.getElementById('nombre');
let fecha = document.getElementById('fecha');
let descripcion = document.getElementById('descripcion');

let tareas = [];
let ListaTareas = document.getElementById('ListaTareas');
let btnGuardar = document.getElementById('btnGuardar');

let mostrarTareas = () => {
    ListaTareas.innerHTML = "";
    tareas.forEach((tarea,indice) => {
        ListaTareas.innerHTML += `
        <div class='row'> 
            <div class='col-3 border p-3'>
                <strong>${ tarea.nombre }</strong>
            </div>
            <div class='col-3 border p-3'>
                <strong>${ tarea.fecha }</strong>
            </div>
            <div class='col-4 border p-3'>
                <strong>${ tarea.descripcion }</strong>
            </div>
            <div class='col-1 border p-3 text-center'>
                <button class='btn btn-success'>Editar</button>
            </div>
            <div class='col-1 border p-3 text-center'>
                <button class='btn btn-danger' onclick="borrarTarea(${indice})">Borrar</button>
            `;
    })
}

mostrarTareas();

let agregarDatos = () => {
    let datos = {
        nombre: nombre.value,
        fecha: fecha.value,
        descripcion: descripcion.value
    };
    tareas.push(datos);
    console.log(tareas);
    mostrarTareas();
}

let cerrarModal = () => {
    btnGuardar.setAttribute('data-bs-dismiss', 'modal');
    btnGuardar.click();
}   

let borrarTarea = (boton,indice) => {
    tareas.splice(indice, 1)
    console.log(tareas);
    mostrarTareas();
}

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    agregarDatos();
    cerrarModal();
    formulario.reset();
});