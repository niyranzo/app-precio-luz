import "./register.css";

export const createRegister = () => {
    const divRegister = document.createElement("div");
    divRegister.id = "div-register";

    // Estructura HTML del formulario
    divRegister.innerHTML = `
        <label>Register</label>
        <input type="text" id="input-username" placeholder="Nombre de usuario">
        <input type="email" id="input-email" placeholder="Email">
        <p id="errorMessage" style="color: red; display: none;">Introduce un email válido</p>
        <input type="password" id="input-passwd" placeholder="Contraseña">
        <input type="password" id="input-passwd2" placeholder="Repite la contraseña">
        <p id="passwordErrorMessage" style="color: red; display: none;">Las contraseñas no coinciden</p>
        <button type="submit" id="register-button">Registrar</button>
    `;

    
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


        // Escuchar en ambos campos de contraseña
        inputPassword.addEventListener("input", validatePasswords);
        inputPassword2.addEventListener("input", validatePasswords);


        // Validar al hacer clic en el botón "Registrar"
        registerButton.addEventListener("click", (event) => {
            if (!validatePasswords()) {
                event.preventDefault();
                alert("Las contraseñas deben coincidir");
            } else {
                alert("Registro exitoso");
            }
        });
    }, 0);

    return divRegister;
};
