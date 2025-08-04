// ==UserScript==
// @name         Escaneo de carnets de biblioteca
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Quita los "00" al momento de escanear los carnets de biblioteca
// @author       Frank
// @match        https://sumvirtual.unmsm.edu.pe/WebSum2/sum/comedor/EmitirTicket

// @downloadURL  https://raw.githubusercontent.com/frank777ch/uicdreams/main/src/student-code/student-code.user.js
// @updateURL    https://raw.githubusercontent.com/frank777ch/uicdreams/main/src/student-code/student-code.user.js
// ==/UserScript==

(function() {
    
    'use strict';

    console.log('Script cargado. Buscando el campo de código...');

    const campoCodigoAlumno = document.getElementById('codigo');

    if(campoCodigoAlumno){

        console.log('¡Se encontró el campo!');

        console.log(campoCodigoAlumno);

        console.log('Escuchando eventos...');

        campoCodigoAlumno.addEventListener('input', function(event) {
            
            console.log(`El campo cambió. Nuevo valor: "${event.target.value}"`);

        })

    } else {
        console.error('No se pudo encontrar el elemento.');
    }

})();