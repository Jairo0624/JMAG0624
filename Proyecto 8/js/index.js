let formulario = document.getElementById('formulario');
let nombre = document.getElementById('nombre');
let fecha = document.getElementById('fecha');
let descripcion = document.getElementById('descripcion');

let tareas = [];
let ListaTareas = document.getElementById('ListaTareas');
let btnGuardar = document.getElementById('btnGuardar');

let mostrarTareas = () => {
    ListaTareas.innerHTML = "Esta es mi lista de tareas";
    tareas.forEach((tarea,indice) => {
        ListaTareas.innerHTML += `<p>${tarea.nombre}<p>`;
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


formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    agregarDatos();
});