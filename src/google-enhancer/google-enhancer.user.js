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

    console.log('Google Enhancer v1.0.0 cargado!');

    const searchBar = document.querySelector('textarea[name="q"]');
    if (searchBar) {
        searchBar.style.border = '2px solid #8ab4f8';
        searchBar.style.borderRadius = '24px';
    }
})();