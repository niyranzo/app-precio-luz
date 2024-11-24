import './botonTema.css'

export const createThemeButton = () => {
    const body = document.body; 
    body.classList.add("light"); // Empieza con el tema claro

    const loadButton = document.createElement("button");
    loadButton.id = "change-theme-btn";
    loadButton.classList.add("dark-btn", "btn"); // Agregar una clase base para el botón
    loadButton.textContent = "Tema";
    return loadButton;
};

export const lightButton = () => {
    //se establece el modo oscuro y aparece el boton para cambiar a claro
    const body = document.body;
    body.classList.remove("dark");
    body.classList.add("light");

    const loadButton = document.getElementById("change-theme-btn");
    loadButton.classList.remove("light-btn");
    loadButton.classList.add("dark-btn"); 
};

export const darkButton = () => {
    //se establece el modo claro y aparece el boton para cambiar a oscuro
    const body = document.body;
    body.classList.remove("light");
    body.classList.add("dark");

    const loadButton = document.getElementById("change-theme-btn");
    loadButton.classList.remove("dark-btn");
    loadButton.classList.add("light-btn");
};
