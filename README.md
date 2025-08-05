#  corrector-de-codigos-sum

![Versión](https://img.shields.io/badge/versi%C3%B3n-1.0-blue)
![Licencia](https://img.shields.io/badge/licencia-MIT-green)
![Compatible](https://img.shields.io/badge/compatible%20con-Tampermonkey-orange)

Este script para Tampermonkey está diseñado para resolver un problema de eficiencia común durante la emisión de tickets de comedor en el sistema SUM de la UNMSM. Su función es corregir automáticamente los códigos de estudiante escaneados desde los carnets de biblioteca, eliminando el prefijo "00" que añade el lector de códigos de barras.

---

## ✨ Demostración en Acción

<!-- ESTA ES LA PARTE MÁS IMPORTANTE PARA QUE SEA "LLAMATIVO". Un GIF vale más que mil palabras.
1. Usa una herramienta gratuita como 'ScreenToGif' (Windows) o 'Kap' (Mac).
2. Graba tu pantalla mostrando cómo el script corrige el código "00..." al instante.
3. Sube el GIF a tu repositorio de GitHub.
4. Reemplaza la siguiente línea con el enlace a tu GIF. -->

![Demostración del Script](https://URL_DE_TU_GIF_AQUI.gif)

---

## 🚀 Características Principales

*   **Corrección Automática e Instantánea:** Elimina el prefijo "00" de los códigos de carnet de biblioteca sin ninguna intervención manual.
*   **Aumento de Eficiencia:** Evita los pasos manuales de borrar los ceros o usar las flechas del teclado, reduciendo el tiempo por ticket y los posibles errores de digitación.
*   **Cero Configuración:** Simplemente instálalo y funcionará. No requiere ninguna configuración adicional.
*   **Ligero y Seguro:** El script es mínimo y solo se activa en la página de emisión de tickets del SUM, sin interferir en ninguna otra web.

---

## 🛠️ Instalación (Guía para la Oficina)

Para utilizar este script, solo necesitas seguir dos sencillos pasos.

### Paso 1: Instalar Tampermonkey

Si aún no lo tienes, primero debes instalar la extensión **Tampermonkey** en tu navegador. Es un gestor de scripts seguro y muy popular.

*   [Instalar para Google Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
*   [Instalar para Mozilla Firefox](https://addons.mozilla.org/es/firefox/addon/tampermonkey/)
*   [Instalar para Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)

### Paso 2: Instalar el Script

Una vez que tengas Tampermonkey, haz clic en el siguiente enlace para instalar el script:

➡️ **[Haz Clic Aquí para Instalar el Corrector de Códigos](https://raw.githubusercontent.com/frank777ch/uicdreams/main/src/student-code/student-code.user.js)** ⬅️

Se abrirá una nueva pestaña de Tampermonkey mostrando el código. Simplemente haz clic en el botón **"Instalar"**.

¡Y listo! El script ya está funcionando.

---

## 💡 Modo de Uso

No necesitas hacer nada especial. Simplemente:

1.  Ve a la página de "Emitir Ticket" del SUM como lo haces siempre.
2.  Escanea un carnet de biblioteca.
3.  El script corregirá automáticamente el código en el campo correspondiente, eliminando los "00" del inicio.
4.  Continúa con el proceso normal.

---

## ❓ Solución de Problemas

**¿El script no parece funcionar?**
*   **Verifica que Tampermonkey esté activado** en tu navegador.
*   **Verifica que el script esté activado** dentro del panel de Tampermonkey. Debería tener un interruptor en verde.
*   Asegúrate de estar en la URL correcta que está definida en el `@match` del script.

---

## ⚖️ Licencia

Este proyecto está bajo la Licencia MIT.

---

Creado con ❤️ por **Frank**.

<!-- Puedes añadir un enlace a tu perfil de GitHub o a alguna red social si quieres -->