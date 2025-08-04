// ==UserScript==
// @name         Ejemplo básico wikipedia con tampermonkey
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Modifica el título, el primer párrafo y añade un nuevo elemento en Wikipedia para demostrar el poder de Tampermonkey.
// @author       Tu Nombre
// @match        https://es.wikipedia.org/wiki/Filosof%C3%ADa

// @grant        GM_addStyle

// @downloadURL  https://raw.githubusercontent.com/frank777ch/uicdreams/main/src/wikipedia-philosophy/wikipedia-philosophy.user.js
// @updateURL    https://raw.githubusercontent.com/frank777ch/uicdreams/main/src/wikipedia-philosophy/wikipedia-philosophy.user.js
// ==/UserScript==

(function() {
    'use strict';

    console.log('¡Script de manipulación de Wikipedia en acción!');

    const tituloPrincipal = document.getElementById('firstHeading');

    if (tituloPrincipal) {
        tituloPrincipal.innerHTML = '¡La Filosofía ha sido MODIFICADA por Tampermonkey!';

        tituloPrincipal.style.color = 'tomato';
    }

    const contenido = document.getElementById('mw-content-text');

    if (contenido) {
        const primerParrafo = contenido.querySelector('p');

        if (primerParrafo) {
            primerParrafo.style.backgroundColor = '#e6cc07ff';
            primerParrafo.style.borderLeft = '4px solid #fdd835';
            primerParrafo.style.padding = '10px';
        }
    }

})();