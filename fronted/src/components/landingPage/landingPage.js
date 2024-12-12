import { createLogin } from "../login/login";
import { createRegister } from "../register/register";

import { createMain } from "../main/main.js";
import { createNav } from "../nav/nav.js";
import { createFooter } from "../footer/footer.js";

import { createSpinner } from "../spinner/spinner.js";

import { setSession, getSession } from "../../helpers/scripts.js";

import "./landingPage.css";


export const createLanding = () => {
    const landing = document.createElement("div");
    landing.id = "landing";

    const userSession = getSession("userSession");

    if (userSession) {

        landing.classList.remove("logged-out");

        //. CREAR ELEMENTOS PRINCIPALES

        const nav = createNav();
        const main = createMain();
        const footer = createFooter();


        //. CREAR Y AÑADIR SPINNER

        const spinner = createSpinner();
        main.appendChild(spinner);
        
        //. AÑADIR TODOS LOS ELEMENTOS AL LANDING 

        landing.appendChild(nav);
        landing.appendChild(main);
        landing.appendChild(footer);


    } else {
         landing.classList.add("logged-out");
         
        // Mostrar la vista de Login
        const login = createLogin();
        landing.appendChild(login);
    }

    return landing;
};
