import "./main.css"

export const createMain = () => {
    const main = document.createElement("main");
    main.id = "main";
    return main;
}

export const addMain = (element) => {
    const main = document.getElementById("main");
    main.appendChild(element);
}