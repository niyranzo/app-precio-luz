import './spinner.css'
export const createSpinner = () => {
    //voy a crear el spinner en el DOM 
    const spinner= document.createElement("div");
    spinner.id="spinner";
    spinner.classList.add("hidden", "spinner");
    
    //crear elemento para el css
    const elementoSpinner = document.createElement("div");
    elementoSpinner.classList.add("spinner-element");

    spinner.appendChild(elementoSpinner);
    return spinner;
}

export const showSpinner = () => {
    //mostrar el spinner
    const spinner = document.getElementById("spinner");
    spinner.classList.remove("hidden");
}

export const hideSpinner = () => {
    //ocultar el spinner
    const spinner = document.getElementById("spinner");
    spinner.classList.add("hidden");
}     