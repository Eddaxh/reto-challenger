//Edgar David Chico Ramirez (Eddaxh)
//Funcion de encripcion de la informacion 

function encriptar() {

        let texto = document.getElementById("textoEntrada").value;
        let textoEncriptado = "";
        
        // Bucle para recorrido de cada letra del texto
        for (let i = 0; i < texto.length; i++) {
            if (texto[i] === "e") {
                textoEncriptado += "edgar";
            } else if (texto[i] === "a") {
                textoEncriptado += "amor";
            } else if (texto[i] === "o") {
                textoEncriptado += "oa";
            } else if (texto[i] === "u") {
                textoEncriptado += "urop";
            } else if (texto[i] === "i") {
                textoEncriptado += "irru";
            } else {
                textoEncriptado += texto[i]; // Si no es ninguna de las letras, se mantiene igual
            }
        }        
        mostrarElemento();
        asignarTextoElemento('p', textoEncriptado);
        ocultarElemento();
        limparTexto();
        return textoEncriptado;
    
   
}

//Funcion de desencripcion 
  
function desencriptar() {
    let texto = document.getElementById("textoEntrada").value;
    let textoDesencriptado = "";
    let i = 0;
    
    while (i < texto.length) {
        if (texto[i] === "e" && texto.substring(i, i+5) === "edgar") {
            textoDesencriptado += "e";
            i += 5; // Salto de caracteres
        } else if (texto[i] === "a" && texto.substring(i, i+4) === "amor") {
            textoDesencriptado += "a";
            i += 4;
        } else if (texto[i] === "o" && texto.substring(i, i+2) === "oa") {
            textoDesencriptado += "o";
            i += 2;
        } else if (texto[i] === "u" && texto.substring(i, i+4) === "urop") {
            textoDesencriptado += "u";
            i += 4;
        } else if (texto[i] === "i" && texto.substring(i, i+4) === "irru") {
            textoDesencriptado += "i";
            i += 4;
        } else {
            textoDesencriptado += texto[i]; 
            i++;
        }
    }    
    mostrarElemento();
    asignarTextoElemento('p', textoDesencriptado);
    ocultarElemento();
    limparTexto();
} 

//visualizacion del boton de copiar 

function mostrarElemento() {
        document.getElementById("copiar").style.display =  "block";
}
//Funcion ocultar la informacion que necesitemos

function ocultarElemento() {
    document.getElementById("imagenRespuesta").style.display = "none";   
    document.getElementById("textoEntrada2").style.display = "none";   
}

//Asignacion de texto a elemento de html

function asignarTextoElemento(elemento, texto) {
    document.querySelector(elemento).innerHTML = texto;
}
 //limpiar la caja de texto

function limparTexto() {
    let valorCaja = document.querySelector('#textoEntrada');
    valorCaja.value = '';
}

//Funcion copiar texto 
function copiarTexto() {
    let texto = document.getElementById("textoInfo").innerText;    
    navigator.clipboard.writeText(texto).then(() => {        
    });
}

//Edgar David Chico Ramirez (Eddaxh)