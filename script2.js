const pantalla = document.getElementById('pantalla');

function agregar(valor) {
    if (pantalla.value === '0' || pantalla.value === 'Error') {
        pantalla.value = valor;
    } else {
        pantalla.value += valor;
    }
}

function limpiar() {
    pantalla.value = '0';
}

function borrar() {
    if (pantalla.value.length > 1 && pantalla.value !== 'Error') {
        pantalla.value = pantalla.value.slice(0, -1);
    } else {
        pantalla.value = '0';
    }
}

function cambiarSigno() {
    if (pantalla.value !== '0' && pantalla.value !== 'Error') {
        if (pantalla.value.startsWith('-')) {
            pantalla.value = pantalla.value.substring(1);
        } else {
            pantalla.value = '-' + pantalla.value;
        }
    }
}

function calcular() {
    try {
        let expresion = pantalla.value;
        
        
        expresion = expresion.replace(/×/g, '*');
        expresion = expresion.replace(/÷/g, '/');
        
       
        if (expresion.includes('√')) {
            expresion = expresion.replace(/√(\d+(\.\d+)?)/g, 'Math.sqrt($1)');
        }

        
        const resultado = eval(expresion);
        
        
        pantalla.value = resultado;
    } catch (error) {
        pantalla.value = 'Error';
    }
}