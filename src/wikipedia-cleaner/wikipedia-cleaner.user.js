// ==UserScript==
// @name         Wikipedia Cleaner
// @namespace    https://github.com/frank777ch/uicdreams
// @version      1.0.0
// @description  Limpia la interfaz de Wikipedia ocultando el menú lateral para una lectura más enfocada.
// @author       Frank
// @match        https://*.wikipedia.org/*

// @grant        GM_addStyle

// @downloadURL  https://raw.githubusercontent.com/frank777ch/uicdreams/main/src/wikipedia-cleaner/wikipedia-cleaner.user.js
// @updateURL    https://raw.githubusercontent.com/frank777ch/uicdreams/main/src/wikipedia-cleaner/wikipedia-cleaner.user.js
// ==/UserScript==

(function() {
    'use strict';

    console.log('Wikipedia Cleaner v1.0.0 cargado!');

    GM_addStyle(`
        #mw-panel {
            display: none !important;
        }
    `);

})();