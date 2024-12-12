<<<<<<< HEAD
//importaciones
import { createLuzButton } from "./components/botonLuz/botonLuz";
import { createThemeButton } from "./components/botonTema/botonTema";
import { createTiempoButton } from "./components/botonTiempo/botonTiempo";
import { createFooter } from "./components/footer/footer";
import { createMain } from "./components/main/main";
import { addNav, createNav } from "./components/nav/nav";
import { createSpinner, showSpinner, hideSpinner } from "./components/spinner/spinner";

document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
  
    const nav = createNav();
    const main = createMain();
    const footer = createFooter();
    const themeBtn = createThemeButton();
    const luzBtn = createLuzButton();
    const tiempoBtn = createTiempoButton();
    
    // Crear y añadir el spinner
    const spinner = createSpinner();
    
    //nav.append(themeBtn, luzBtn, tiempoBtn);
    main.appendChild(spinner);

    // Crear y añadir el botón de tema
    app.appendChild(nav);
    app.appendChild(main);
    app.appendChild(footer);

    //añade a un div dentro del nav
    addNav(themeBtn, luzBtn, tiempoBtn); 
});
=======
// Importaciones
import { createLanding } from "./components/landingPage/landingPage.js";
import { fetchHourPrices } from "./helpers/api.js";

document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");

    // Crear la landing page
    const landingPage = createLanding();
    app.appendChild(landingPage);
});
>>>>>>> develop
