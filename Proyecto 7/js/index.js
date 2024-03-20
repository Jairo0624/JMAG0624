
    let resultado = document.getElementById('resultado');

    function asignar(valor){
        resultado.value += valor;
    }

    function calcular(){
        resultado.value = eval(resultado.value);
    }

    function clean(){
        resultado.value = '';
    }