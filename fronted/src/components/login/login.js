import "./login.css";
import { setSession } from "../../helpers/scripts";
import { createSpinner, showSpinner, hideSpinner } from "../spinner/spinner";
import { createRegister } from "../register/register"; // Importar vista de registro

export const createLogin = () => {
  const divLogin = document.createElement("div");
  divLogin.id = "div-login";

  divLogin.innerHTML = `
    <form id="login-form">
        <label id="label-login">Login</label>
        <input type="text" id="input-username" placeholder="Usuario o email" required>
        <input type="password" id="input-passwd" placeholder="Contraseña" required>
        <button id="login-button" type="submit">Iniciar sesión</button>
        <p id="register-prompt">¿Aún no tienes cuenta? <a href="#" id="register-link">Regístrate</a></p>
        <div id="spinner-container"></div>
    </form>
`;

  // Insertar el spinner dinámicamente en el contenedor
  const spinnerContainer = divLogin.querySelector("#spinner-container");
  spinnerContainer.appendChild(createSpinner());

  // Detectar clics en el formulario
  const loginForm = divLogin.querySelector("#login-form");
  loginForm.addEventListener("click", (event) => {
    event.preventDefault();

    const target = event.target;

    // Lógica para iniciar sesión
    if (target.id === "login-button") {
      const username = divLogin.querySelector("#input-username").value;
      const password = divLogin.querySelector("#input-passwd").value;

      //! Mostrar spinner durante la simulación de carga
      showSpinner();

      setTimeout(() => {
        hideSpinner();

        //! SIMULACIÓN, SUSTITUIR POR DATOS REALES
        if (username === "admin" && password === "1234") {
          setSession("userSession", { username });
          alert("Sesión iniciada");
          location.reload();
        } else {
          alert("Usuario o contraseña incorrectas");
        }
      }, 2000);
    }

    // Lógica para mostrar la vista de registro
    if (target.id === "register-link") {
      const app = document.getElementById("app");
      app.innerHTML = ""; 
      const register = createRegister(); 
      app.appendChild(register); 
    }
  });

  return divLogin;
};
