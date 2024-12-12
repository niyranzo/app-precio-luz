import { urlWeather } from "../config/config.js";

/**
 * @author Nicole
 * @description Traer la data de la API del tiempo actual en Granada.
 * @returns {Promise<Array>}
 */
export const getWeather = async () => {
    try {
        const response = await fetch(urlWeather);
        if(!response.ok){
            throw new Error("Error al obtener la data");
        }
        return await response.json();
    } catch (error) {
        console.error("Error en la petición")
    }   
}