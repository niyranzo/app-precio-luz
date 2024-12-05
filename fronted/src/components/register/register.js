import { btnClearSession } from "../btnClearSession/btnClearSession";
import { createSpinner, showSpinner, hideSpinner } from "../spinner/spinner";
import "./register.css";

export const createRegister = () => {
    const divRegister = document.createElement("div");
    divRegister.id = "div-register";

    // Estructura HTML del formulario
    divRegister.innerHTML = `
        <label>Register</label>
        <input type="text" id="input-username" placeholder="Nombre de usuario" required>
        <input type="email" id="input-email" placeholder="Email" required>
        <p id="errorMessage" style="color: red; display: none;">Introduce un email válido</p>
        <input type="password" id="input-passwd" placeholder="Contraseña" required>
        <input type="password" id="input-passwd2" placeholder="Repite la contraseña" required>
        <p id="passwordErrorMessage" style="color: red; display: none;">Las contraseñas no coinciden</p>
        <button type="submit" id="register-button">Registrar</button>
        <div id="spinner-container"></div>
    `;

    // Insertar el spinner dinámicamente en el contenedor
    const spinnerContainer = divRegister.querySelector("#spinner-container");
    spinnerContainer.appendChild(createSpinner());

    setTimeout(() => {
        // Validación de email
        const input = divRegister.querySelector("#input-email");
        const errorMessage = divRegister.querySelector("#errorMessage");
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        input.addEventListener("input", () => {
            const inputValue = input.value;
            const value = regex.test(inputValue) ? "none" : "block";
            errorMessage.style.display = value;
        });

        // Validación de contraseñas
        const inputPassword = divRegister.querySelector("#input-passwd");
        const inputPassword2 = divRegister.querySelector("#input-passwd2");
        const passwordErrorMessage = divRegister.querySelector("#passwordErrorMessage");
        const registerButton = divRegister.querySelector("#register-button");

        const validatePasswords = () => {
            const passwordsMatch = inputPassword.value === inputPassword2.value;
            passwordErrorMessage.style.display = passwordsMatch ? "none" : "block";
            return passwordsMatch;
        };

        // Escuchar en ambos campos de contraseña
        inputPassword.addEventListener("input", validatePasswords);
        inputPassword2.addEventListener("input", validatePasswords);

        // Validar al hacer clic en el botón "Registrar"
        registerButton.addEventListener("click", (event) => {
            event.preventDefault();

            if (!validatePasswords()) {
                alert("Las contraseñas deben coincidir");
                return;
            }

            //! Mostrar spinner durante la simulación de carga
            showSpinner();

            setTimeout(() => {
                hideSpinner();

                //! SIMULACIÓN: Aquí puedes añadir lógica para guardar datos reales
                alert("Registro exitoso");
            }, 2000);
        });
    }, 0);

    // Reutilizando botón de cerrar sesión para volver
    const btnExit = btnClearSession();
    btnExit.innerHTML = "Volver";
    divRegister.appendChild(btnExit);

    return divRegister;
};
