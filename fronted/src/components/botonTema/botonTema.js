import './botonTema.css'

export const createThemeButton = () => {
    const body = document.body; 
    body.classList.add("light"); // Empieza con el tema claro

    const loadButton = document.createElement("button");
    loadButton.id = "change-theme-btn";
    loadButton.classList.add("dark-btn", "btn", "change-btn"); // Clase para cambiar de tema todos los botones, calse para todos lo botones, clase para este boton
    loadButton.textContent = "Tema";
   
    const tema = () => {
        if (loadButton.classList.contains("dark-btn")) {
            darkButton();
        } else {
            lightButton();
        }
    };

    loadButton.addEventListener("click", tema);
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
 
    const luzButton = document.getElementById("luz-btn");
    luzButton.classList.remove("light-btn");
    luzButton.classList.add("dark-btn"); 

    const tiempoButton = document.getElementById("tiempo-btn");
    tiempoButton.classList.remove("light-btn"); 
    tiempoButton.classList.add("dark-btn");

    const clearButton = document.getElementById("btn-clear");
    clearButton.classList.remove("light-btn"); 
    clearButton.classList.add("dark-btn");
};

export const darkButton = () => {
    //se establece el modo claro y aparece el boton para cambiar a oscuro
    const body = document.body;
    body.classList.remove("light");
    body.classList.add("dark");

    const loadButton = document.getElementById("change-theme-btn");
    loadButton.classList.remove("dark-btn");
    loadButton.classList.add("light-btn"); 

    const luzButton = document.getElementById("luz-btn");
    luzButton.classList.remove("dark-btn"); 
    luzButton.classList.add("light-btn");

    const tiempoButton = document.getElementById("tiempo-btn");
    tiempoButton.classList.remove("dark-btn"); 
    tiempoButton.classList.add("light-btn");

    const clearButton = document.getElementById("btn-clear");
    clearButton.classList.remove("dark-btn"); 
    clearButton.classList.add("light-btn");
};