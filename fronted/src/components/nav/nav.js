import "./nav.css"

export const createNav = () => {
    const nav = document.createElement("nav");
    nav.id = "nav";
    return nav;
}

export const addNav = (element) => {
    const nav = document.getElementById("nav");
    nav.appendChild(element);
}