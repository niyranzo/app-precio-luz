import { createLogin } from "../login/login";
import { createRegister } from "../register/register";
import "./main.css"

export const createMain = () => {
    const main = document.createElement("main");
    main.id = "main";

    //. AÑADIR LOGIN A MAIN 
    const login = createLogin();
    main.appendChild(login);

    
    //. AÑADIR REGISTER A MAIN 
    const register = createRegister();
    main.appendChild(register);

    return main;
}

export const addMain = (element) => {
    const main = document.getElementById("main");
    main.appendChild(element);
}