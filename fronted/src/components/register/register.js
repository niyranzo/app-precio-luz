import { btnClearSession } from "../btnClearSession/btnClearSession";
import { createSpinner, showSpinner, hideSpinner } from "../spinner/spinner";
import { registerUser } from "../../helpers/api.js";
import "./register.css";

export const createRegister = () => {
    const divFondoRegister = document.createElement("div");
    divFondoRegister.id="fondo-register";

    const divRegister = document.createElement("div");
    divRegister.id = "div-register";

    divFondoRegister.append(divRegister);

    // Estructura del formulario
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

    // Insertar el spinner
    const spinnerContainer = divRegister.querySelector("#spinner-container");
    spinnerContainer.appendChild(createSpinner());

    setTimeout(() => { //<--- SIMULAR RETRASO PARA EL ESPINER

        //. Validación de email 
        const inputEmail = divRegister.querySelector("#input-email");
        const errorMessage = divRegister.querySelector("#errorMessage");
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        inputEmail.addEventListener("input", () => {
            const isValidEmail = regex.test(inputEmail.value);
            errorMessage.style.display = isValidEmail ? "none" : "block";
        });

        //. Validación de contraseñas
        const inputPassword = divRegister.querySelector("#input-passwd");
        const inputPassword2 = divRegister.querySelector("#input-passwd2");
        const passwordErrorMessage = divRegister.querySelector("#passwordErrorMessage");
        const registerButton = divRegister.querySelector("#register-button");

        const validatePasswords = () => {
            const passwordsMatch = inputPassword.value === inputPassword2.value;
            passwordErrorMessage.style.display = passwordsMatch ? "none" : "block";
            return passwordsMatch;
        };

        // Escuchar cambios en ambos campos de contraseña
        inputPassword.addEventListener("input", validatePasswords);
        inputPassword2.addEventListener("input", validatePasswords);

        // Evento click para el boton de registro
        registerButton.addEventListener("click", async (event) => {
            event.preventDefault();

            // Validar contraseñas
            if (!validatePasswords()) {
                alert("Las contraseñas deben coincidir");
                return;
            }

            // Validar email
            if (!regex.test(inputEmail.value)) {
                alert("Introduce un email válido");
                return;
            }

            // Validar que el nombre de usuario no esté vacío
            const inputUsername = divRegister.querySelector("#input-username");
            if (inputUsername.value.trim() === "") {
                alert("El nombre de usuario no puede estar vacío");
                return;
            }

            // Mostrar spinner durante el registro
            showSpinner();

            try {
                // Llamar a la función para registrar el usuario
                const result = await registerUser(
                    inputUsername.value.trim(),
                    inputEmail.value.trim(),
                    inputPassword.value.trim()
                );

                hideSpinner();
                alert("Registro exitoso: " + inputUsername.value.trim());
            } catch (error) {
                hideSpinner();
                alert("Error: " + error.message);
            }
        });
    }, 0);

    // Reutilizando botón de cerrar sesión para volver
    const btnExit = btnClearSession();
    btnExit.innerHTML = "Volver";
    divRegister.appendChild(btnExit);

    return divFondoRegister;
};
