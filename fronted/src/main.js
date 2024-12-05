//importaciones
import { createThemeButton, darkButton, lightButton } from "./components/botonTema/botonTema";
import { createFooter } from "./components/footer/footer";
import { createMain } from "./components/main/main";
import { createNav } from "./components/nav/nav";
import { createSpinner, showSpinner, hideSpinner } from "./components/spinner/spinner";

document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
  
    const nav = createNav();
    const main = createMain();
    const footer = createFooter();
    const themeBtn = createThemeButton();
    
    // Crear y añadir el spinner
    const spinner = createSpinner();
    
    nav.appendChild(themeBtn);
    main.appendChild(spinner);

    // Crear y añadir el botón de tema
    app.appendChild(nav);
    app.appendChild(main);
    app.appendChild(footer);

    hideSpinner();
    showSpinner();

    // Cambio de tema al hacer clic
    const tema = () => {
        if (themeBtn.classList.contains("dark-btn")) {
            darkButton();
        } else {
            lightButton();
        }
    };

    themeBtn.addEventListener("click", tema);
    console.log("adf");
});