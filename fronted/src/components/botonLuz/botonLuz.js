import './botonLuz.css'

export const createLuzButton = () => {
    const luzButton = document.createElement("button");
    luzButton.id = "luz-btn";
    luzButton.classList.add("dark-btn", "btn");
    luzButton.textContent = "Luz";
    
    const verLuz = () => {
        //cuando le doy me sale el select y el boton de cargar   
    };

    luzButton.addEventListener("click", verLuz);
    return luzButton;
};