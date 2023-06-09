function recortarGuion() {
    var texto = document.getElementById("texto").value;
    var resultado = texto.replace(/(.*)\s(\d{1,2}:\d{2})\n/g, '$1 $2 ');
    return resultado;
}

function productoFinal() {
    const texto = recortarGuion();
    let resultado = texto.replace(/\d{1,2}:\d{2} /g, '');
    resultado = recortarString(resultado);
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = resultado;

    // Mostrar u ocultar el botón "Copiar" según el contenido del resultado
    const botonCopiar = document.getElementById("copiar");
    botonCopiar.style.display = resultado ? "block" : "none";
}

function recortarString(cadena) {
    for (let i = 0; i < 5; i++) {
        if (cadena[i] === ":") {
            const posEspacio = cadena.indexOf(" ", i + 3);
            return cadena.substring(i + 3);
        }
    }
    return cadena;
}

function limpiar() {
    var texto = document.getElementById("texto");
    texto.value = "";
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";

    // Ocultar el botón "Copiar"
    const botonCopiar = document.getElementById("copiar");
    botonCopiar.style.display = "none";
}


function copiarTexto() {
    const resultadoDiv = document.getElementById("resultado");
    const textoCopiar = resultadoDiv.innerText;

    // Crear un elemento temporal para copiar el texto
    const tempInput = document.createElement("input");
    tempInput.value = textoCopiar;
    document.body.appendChild(tempInput);

    // Seleccionar y copiar el texto
    tempInput.select();
    document.execCommand("copy");

    // Eliminar el elemento temporal
    document.body.removeChild(tempInput);

    // Cambiar el texto del botón a "¡Copiado!"
    const botonCopiar = document.getElementById("copiar");
    botonCopiar.innerText = "¡Copiado!";
}

// Código posterior omitido...


