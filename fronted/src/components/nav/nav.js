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
<<<<<<< HEAD
    const nav = document.createElement("nav");
    nav.id = "nav";

    //div donde van a estar todos los botones
    const divNav = document.createElement("div");
    divNav.id="divNav";

    const logo = document.createElement("img");
    logo.src="./public/img/logo_luz.png"
    logo.width="300"

    nav.append(logo, divNav);

    return nav;
}

export const addNav = (...element) => {
    const divNav = document.getElementById("divNav");
    element.forEach(e=>divNav.append(e));
}
=======
  const nav = document.createElement("nav");
  nav.id = "nav";

  // Crear el logo
  const logo = document.createElement("div");
  logo.id = "logoId";


  // Crear el elemento de imagen dentro del contenedor
  const logo2 = document.createElement("img");
  logo2.src = "/img/logo_luz.svg";
  logo2.alt = "Logo";
  logo2.style.width = "100%"; 
  logo2.style.height = "auto"; 
  logo.appendChild(logo2); 

  // Div contenedor para botones
  const divNav = document.createElement("div");
  divNav.id = "divNav";

  // Crear los botones
  const themeBtn = createThemeButton();
  const btnExit = btnClearSession();
  const btnLuz = createLuzButton();
  const btnTiempo = createTiempoButton();

  // Añadir los botones al contenedor
  divNav.append(themeBtn, btnTiempo, btnLuz, btnExit);

  // Añadir logo y contenedor de botones al nav
  nav.append(logo, divNav);

  // Lógica de cambio de tema
 

  // Lógica para cerrar sesión
  btnExit.addEventListener("click", () => {
    localStorage.removeItem("userSession");
    location.reload();
  });

  return nav;
};
>>>>>>> develop
