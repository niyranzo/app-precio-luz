import { divTiempo } from '../contenedorTiempo/divTiempo';
import { createSpinner, hideSpinner, showSpinner } from '../spinner/spinner';
import './botonTiempo.css'

export const createTiempoButton =  () => {
    const tiempoButton = document.createElement("button");
    tiempoButton.id = "tiempo-btn";
    tiempoButton.classList.add("dark-btn", "btn");
    tiempoButton.textContent = "Tiempo";

    tiempoButton.addEventListener("click", async () => {
        const main = document.getElementById("main");
        main.innerHTML = ""; // Limpiar contenido previo
        const spinner = createSpinner();
        main.appendChild(spinner);
        showSpinner();
        try {
            // Esperar el resultado de divTiempo
            const divTiempoElement = await divTiempo();
            main.appendChild(divTiempoElement);
        } catch (error) {
            console.error("Error al cargar divTiempo:", error);
        }
        hideSpinner();
    });

    return tiempoButton;
};
