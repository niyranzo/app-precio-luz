import "./nav.css";
import {
  createThemeButton,
  darkButton,
  lightButton,
} from "../botonTema/botonTema.js";
import { btnClearSession } from "../btnClearSession/btnClearSession.js";
import { createLuzButton } from "../botonLuz/botonLuz.js";
import { createTiempoButton } from "../botonTiempo/botonTiempo.js";

export const createNav = () => {
  const nav = document.createElement("nav");
  nav.id = "nav";

  // Crear el logo
  const logo = document.createElement("img");
  logo.src = "/img/logo_luz.png";
  logo.width = "300";

  // Div contenedor para botones
  const divNav = document.createElement("div");
  divNav.id = "divNav";

  // Crear los botones
  const themeBtn = createThemeButton();
  const btnExit = btnClearSession();
  const btnLuz = createLuzButton();
  const btnTiempo = createTiempoButton();

  // Añadir los botones al contenedor
  divNav.append(themeBtn, btnExit, btnLuz, btnTiempo);

  // Añadir logo y contenedor de botones al nav
  nav.append(logo, divNav);

  // Lógica de cambio de tema
  themeBtn.addEventListener("click", () => {
    if (themeBtn.classList.contains("dark-btn")) {
      darkButton();
    } else {
      lightButton();
    }
  });

  // Lógica para cerrar sesión
  btnExit.addEventListener("click", () => {
    localStorage.removeItem("userSession");
    location.reload();
  });

  return nav;
};
