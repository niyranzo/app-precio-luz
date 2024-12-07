import "./footer.css"
import dataFooter from "../../data/footer-user-data.js"
export const createFooter = () => {
    const footer = document.createElement("footer");
    footer.id = "footer";

    dataFooter.forEach(d=>{
        const a = document.createElement("a");
        a.textContent = d.Nombre;            
        a.href = d.Git;                       
        a.target = "_blank";  
        footer.append(a);
    })
    return footer;
}

export const addFooter = (element) => {
    const footer = document.getElementById("footer");
    footer.appendChild(element);
}