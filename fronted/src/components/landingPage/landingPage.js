import { createLogin } from "../login/login";
import { createRegister } from "../register/register";

import { createMain } from "../main/main.js";
import { createNav } from "../nav/nav.js";
import { createFooter } from "../footer/footer.js";

import { setSession, getSession } from "../../helpers/scripts.js";

import "./landingPage.css"

export const createLanding = () => {
    const landing = document.createElement("div");
    landing.id = "landing";

    const userSession = getSession("userSession");

    if (userSession) {
        // Mostrar la vista principal con Nav y Footer
        const nav = createNav();
        const main = createMain();
        const footer = createFooter();

        landing.appendChild(nav);
        landing.appendChild(main);
        landing.appendChild(footer);

    } else {
        // Mostrar la vista de Login
        const login = createLogin();
        landing.appendChild(login);
    }

    return landing;
};