import { clearSession } from '../../helpers/scripts';
import './btnClearSession.css';

export const btnClearSession = () => {
    // Crear el botón de cerrar sesión
    const btnClear = document.createElement("button");
    btnClear.id = "btn-clear";
    btnClear.setAttribute("type", "button"); // Botón de tipo "button"
    btnClear.textContent = "Cerrar Sesión";


    // Obtener el tema actual del body y asignar la clase correspondiente
     
    /*
    const body = document.body;
    const currentTheme = body.classList.contains("dark") ? "dark" : "light";
    btnClear.classList.add(currentTheme === "dark" ? "dark-btn" : "light-btn");
    */
    btnClear.classList.add("dark-btn", "btn");

    // Asignar evento de click para cerrar sesión
    btnClear.addEventListener("click", () => {
        clearSession("userSession"); 
        location.reload(); 

        //' Forma original, cambia el CSS de login sepa Dios porqué
        // const app = document.getElementById("app"); 
        // app.innerHTML = "";

        // const login = createLogin();
        // app.appendChild(login);
    });

    return btnClear;
};


