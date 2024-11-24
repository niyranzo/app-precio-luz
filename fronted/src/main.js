//importaciones
import { createThemeButton, darkButton, lightButton } from "./components/botonTema/botonTema";
import { createSpinner, showSpinner, hideSpinner } from "./components/spinner/spinner";

document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app"); // div #app del index
    const nav = document.createElement("nav");
    const themeBtn = createThemeButton();
    nav.classList.add("nav"); 
    /*
    // Crear y añadir el spinner
    const spinner = createSpinner();
    app.appendChild(spinner);
    hideSpinner();
    showSpinner();
    */

    // Crear y añadir el botón de tema
    
    app.appendChild(themeBtn);
    nav.appendChild(themeBtn); 
    app.appendChild(nav);

    // Cambio de tema al hacer clic
    const tema = () => {
        if (themeBtn.classList.contains("dark-btn")) {
            darkButton();
        } else {
            lightButton();
        }
    };

    themeBtn.addEventListener("click", tema);

});