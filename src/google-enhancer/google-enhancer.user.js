// ==UserScript==
// @name         Google Enhancer
// @namespace    https://github.com/frank777ch/uicdreams
// @version      1.0.0
// @description  Añade un borde a la caja de búsqueda de Google.
// @author       Frank
// @match        https://www.google.com/*
// @grant        none

// @downloadURL  https://raw.githubusercontent.com/frank777ch/uicdreams/main/src/google-enhancer/google-enhancer.user.js
// @updateURL    https://raw.githubusercontent.com/frank777ch/uicdreams/main/src/google-enhancer/google-enhancer.user.js
// ==/UserScript==

(function() {
    'use strict';

    console.log('Google Enhancer v1.1.0 cargado, buscando la barra de búsqueda...');

    const intervalId = setInterval(() => {
        const searchBar = document.querySelector('textarea[name="q"]');
        if (searchBar) {
            console.log('¡Barra de búsqueda encontrada! Aplicando estilos.');
            searchBar.style.border = '3px solid #8ab4f8';
            searchBar.style.borderRadius = '24px';

            clearInterval(intervalId);
        }
    }, 100);

})();