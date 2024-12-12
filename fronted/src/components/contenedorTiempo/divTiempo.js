import { fetchTiempo } from "../../helpers/api";
import './divTiempo.css'


export const divTiempo = async () => {
    const divTiempo = document.createElement("div");
    divTiempo.id = "div-tiempo";
    const p = document.createElement("p");
    p.id = "text";
    p.textContent = "Tiempo actual en Granada";
    const clima = document.createElement("p");
    const hr = document.createElement("hr");
    const tempActual = document.createElement("p");
    const tempMin = document.createElement("p");
    const tempMax = document.createElement("p");
    const tempSensacion = document.createElement("p");

    try {
        const data = await fetchTiempo();
        clima.textContent = `Clima: ${data.weather[0].description}`;
        tempActual.textContent = `Temperatura actual: ${data.main.temp}ºC`;
        tempMax.textContent = `Temperatura maxima: ${data.main.temp_max}ºC`;
        tempMin.textContent = `Temperatura minima: ${data.main.temp_min}ºC`;
        tempSensacion.textContent = `Humedad: ${data.main.humidity}%`;

    } catch (error) {
        console.error("error", error);
    }
   
    divTiempo.append(p, hr, clima, tempActual, tempMin, tempMax, tempSensacion)
    return divTiempo;
}