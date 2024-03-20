
let resultado = document.getElementById('resultado');

    
let asignar = (valor) => {
    resultado.value += valor;
}


let calcular = () => {
    resultado.value = eval(resultado.value);
}

let limpiar = () => {
    resultado.value = '';
}
