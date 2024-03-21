
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

let calcularRaiz = () => {
    resultado.value = Math.sqrt(eval(resultado.value));
}

let calcularPotencia = () => {
    resultado.value = Math.pow(eval(resultado.value), 2);
}

let calcularEuler = () => {
    resultado.value = Math.exp(eval(resultado.value));
}

let calcularPi = () => {
    resultado.value = Math.PI;
}

let quitarCaracter = () => {
    resultado.value = resultado.value.slice(0, -1);
}