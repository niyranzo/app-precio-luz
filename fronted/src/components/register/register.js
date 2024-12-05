import "./register.css"

export const createRegister = () => {
    const divRegister = document.createElement("div");
    divRegister.id = "div-register";

    divRegister.innerHTML = `
        <label>Register</label>
        <input type="text" id="input-username" placeholder="Nombre de usuario">
        <input type="email" id="input-email" placeholder="Email">
        <p id="errorMessage" style="color: red; display: none;">Introduce un email válido</p>
        <input type="password" id="input-passwd" placeholder="Contraseña">
        <input type="password" id="input-passwd2" placeholder="Repite la contraseña">
        <button typle"submit">Registrar</button>
    `;

    const input = divRegister.querySelector("#input-email");
    const errorMessage = divRegister.querySelector("#errorMessage");
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    input.addEventListener("input", ()=>{
        const inputValue = input.value;
        const value = regex.test(inputValue) ? "none" : "block"; 
        errorMessage.style.display = value;
    })
    
    return divRegister;
}