import "./login.css"


export const createLogin = () => {
    const divLogin = document.createElement("div");
    divLogin.id = "div-login";

    divLogin.innerHTML = `
        <label id="label-login">Login</label>
        <input type="text" id="input-username" placeholder="Usuario o email">
        <input type="password" id="input-passwd" placeholder="Contraseña">
        <button typle"submit">Iniciar sesión</button>
    `;

    return divLogin;
}