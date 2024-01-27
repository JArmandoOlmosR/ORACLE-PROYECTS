let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();


 let listaGenerica = [];

 let lenguajesProgra = ['js','C','C++','kotlin','python' ];
 lenguajesProgra.push('java');
 lenguajesProgra.push('ruby');
 lenguajesProgra.push('GoLang');

 function mostrarLenmgu() {
    console.log(lenguajesProgra);

 }

let numerosLista = [5,5,5,5]

function media(lista) {
    let suma = numerosLista.reduce((total, numero) => total + numero, 0);
    let longitud = numerosLista.length;
    let promedio = suma/longitud;
    console.log('la media total de toda la lista es:', promedio);
}
media();

let numerosLista2 = [3,6,20,549,1];

function mayorMenor(lista) {
    let mayor = numerosLista2[0];
    let menor = numerosLista2[0];

    for(let i=1;i<numerosLista2.length;i++) {
        if(numerosLista2[i] > mayor) {
            mayor = numerosLista2[i];
        } if(numerosLista2[i] < menor) {
            menor = numerosLista2[i];
        }

    }
    console.log('mayor', mayor);
    console.log('menor', menor);
}
mayorMenor();


let numerosLista3 = [5,5,5,5]

function media2(lista) {
    let suma2 = numerosLista3.reduce((total1, numero1) => total1 + numero1, 0);
    console.log('la suma es', suma2);
}

media2();



function encontrarIndiceElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === elemento) {
        return i; // Retorna el índice del elemento encontrado
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
  }

  encontrarIndiceElemento();