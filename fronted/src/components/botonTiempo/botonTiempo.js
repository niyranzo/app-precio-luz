import './botonTiempo.css'

export const createTiempoButton = () => {
    const tiempoButton = document.createElement("button");
    tiempoButton.id = "tiempo-btn";
    tiempoButton.classList.add("dark-btn", "btn");
    tiempoButton.textContent = "Tiempo";
    return tiempoButton;
};