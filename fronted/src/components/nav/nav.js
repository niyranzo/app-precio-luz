import "./nav.css"

export const createNav = () => {
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