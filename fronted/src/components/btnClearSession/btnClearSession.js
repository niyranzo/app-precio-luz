import { clearSession } from '../../helpers/scripts';
import './btnClearSession.css';

export const btnClearSession = () => {
    // Crear el botón de cerrar sesión
    const btnClear = document.createElement("button");
    btnClear.id = "btn-clear";
    btnClear.setAttribute("type", "button");
    btnClear.textContent = "Cerrar Sesión";
    btnClear.classList.add("dark-btn", "btn"); // <-- para aplicar el cambio de tema

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


