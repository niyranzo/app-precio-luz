
//. ----------- IMPORTACIONES ------------- 
import { getDataPrices } from "./getDataPrice.js";


//. ----------- DECLARACIÓN DE FUNCIONES ----------- 
/**
 * Calcula los precios totales por día a partir de los datos obtenidos con getDataPrices
 * @param {String} url
 * @returns {Promise<Map>} - Un Map [día, precio total del día]
 */
export const getDataPriceDays = async (url) => {
    try {
        const data = await getDataPrices(url);

        if (!data || data.length === 0) {
            console.error("No hay datos");
            return new Map();
        }

        // Filtrar los datos por día
        const mapDay = data.reduce((acc, { value, datetime }) => {
            const date = new Date(datetime);
            const day = date.getDate();

            // Suma de precio/hora por dia
            acc.has(day) ? acc.set(day, acc.get(day) + value) : acc.set(day, value); 
            

            return acc;
        }, new Map());

        return mapDay; 

    } catch (error) {
        console.error("Error al calcular los precios diarios:", error);
    }
};
