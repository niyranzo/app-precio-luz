// Importaciones
import { createLanding } from "./components/landingPage/landingPage.js";

document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");

    // Crear la landing page
    const landingPage = createLanding();
    app.appendChild(landingPage);
});
