import "./nav.css";
import { createThemeButton, darkButton, lightButton } from "../botonTema/botonTema.js";
import { btnClearSession } from "../btnClearSession/btnClearSession.js";

export const createNav = () => {
    const nav = document.createElement("nav");
    nav.id = "nav";

    // Crear el botón de tema
    const themeBtn = createThemeButton();
    nav.appendChild(themeBtn);

    // Crear el botón para cerrar sesión
    const btnExit = btnClearSession();
    nav.appendChild(btnExit);


    // Añadir lógica de cambio de tema
    themeBtn.addEventListener("click", () => {
        if (themeBtn.classList.contains("dark-btn")) {
            darkButton();
        } else {
            lightButton();
        }
    });

    return nav;
};
