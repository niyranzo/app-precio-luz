import { fetchTiempo } from "../../helpers/api";
import './divTiempo.css'
import { searchCity } from "../searchCity/searchCity";

export const divTiempo = async () => {
    const divTiempo = document.createElement("div");
    divTiempo.id = "div-tiempo";
    const p = document.createElement("p");
    p.id = "text";
    p.textContent = "Tiempo actual en: ";

    // Buscador
    const searchComponent = searchCity(async (city) => {
        await updateWeather(city);
    });

    // Icono
    const iconContainer = document.createElement("div");
    iconContainer.id = "icon-container";
    const weatherIcon = document.createElement("img");
    iconContainer.appendChild(weatherIcon);


    // Información adicional
    const additionalInfo = document.createElement("div");
    additionalInfo.id = "additional-info";
    
    const clima = document.createElement("p");
    const hr = document.createElement("hr");
    const tempActual = document.createElement("p");
    const tempMin = document.createElement("p");
    const tempMax = document.createElement("p");
    const tempSensacion = document.createElement("p")
    const windInfo = document.createElement("p");
    const feelsLikeInfo = document.createElement("p");

    

clima.setAttribute("data-icon", "🌥️");
tempMin.setAttribute("data-icon", "🌡️");
tempMax.setAttribute("data-icon", "🔥");
tempSensacion.setAttribute("data-icon", "💧");
windInfo.setAttribute("data-icon", "💨");
feelsLikeInfo.setAttribute("data-icon", "🧥");



    tempActual.id = "temperature";
    // Función para actualizar el clima
    const updateWeather = async (city = "") => {
    try {
        const data = await fetchTiempo(city);
        if(!data) {
            alert(`${city} no es el nombre de una ciudad o región de España. Vuelve a repasar 📚🗺️`);
            return;
        }
        clima.textContent = `Clima: ${data.weather[0].description}`;
        tempActual.textContent = `${data.main.temp}ºC`;
        tempMax.textContent = `Temperatura maxima: ${data.main.temp_max}ºC`;
        tempMin.textContent = `Temperatura minima: ${data.main.temp_min}ºC`;
        tempSensacion.textContent = `Humedad: ${data.main.humidity}%`;
        weatherIcon.src = data.iconUrl;
        windInfo.textContent = `Viento: ${Math.round(data.wind.speed * 3.6)} km/h`;
        feelsLikeInfo.textContent = `Sensación: ${Math.round(data.main.feels_like)}º`;


    } catch (error) {
        console.error("error", error);
    }
    };

    // Clima inicial (por ejemplo, Granada)
    await updateWeather();


    additionalInfo.append(clima, tempMin, tempMax, tempSensacion, windInfo, feelsLikeInfo);
    divTiempo.append(p, searchComponent, iconContainer,  tempActual, hr, additionalInfo);
    
    return divTiempo;
}