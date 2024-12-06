// Importaciones
import { createLanding } from "./components/landingPage/landingPage.js";
import { fetchHourPrices } from "./helpers/api.js";

document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");

    // Crear la landing page
    const landingPage = createLanding();
    app.appendChild(landingPage);
});
