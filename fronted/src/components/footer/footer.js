import "./footer.css"

export const createFooter = () => {
    const footer = document.createElement("footer");
    footer.id = "footer";
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");  
    const p3 = document.createElement("p");
    p1.textContent="esto es trivial"
    p2.textContent="© 2024 supernenas+1"
    p3.textContent="isaias best profe <3"
    footer.append(p1,p2,p3);
    return footer;
}

export const addFooter = (element) => {
    const footer = document.getElementById("footer");
    footer.appendChild(element);
}