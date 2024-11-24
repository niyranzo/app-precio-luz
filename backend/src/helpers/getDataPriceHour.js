//. ----------- IMPORTACIONES ------------- 

import { getDataPrices } from "./getDataPrice";


//. ----------- DECLARACIÓN DE VARIABLES ------------- 

const baseUrl = process.env.BASE_URL;
const dateTimeStart = process.env.DATE_TIME_START;
const dateTimeEnd = process.env.DATE_TIME_END;
const timeTruncHour = process.env.TIME_HOUR;
const url = `${baseUrl}?start_date=${dateTimeStart}&end_date=${dateTimeEnd}&time_trunc=${timeTruncHour}`;




//. ----------- DECLARACIÓN DE FUNCIONES ----------- 
/**
 * @author Ana
 * @description Filtra los datos de precios según un rango horario
 * @param {string} rangeHour --> "[0-6],[6-12],[12-18],[18-24]"
 * @returns {Promise<Array>}
 */
export const getFilteredPrices = async (rangeHour) => { // ---> const rangeHour = import.meta.env.VITE_HOUR_RANGES.split(","); Incluir donde se llame a la funcion
    try {

        // Obtener datos desde la API
        const data = await getDataPrices(url);

        // Validar si hay datos
        if (data.length === 0) {
            return []; 
        }

        // Obtener las horas de inicio y fin del rango
        const selectedHours = rangeHour.split("-").map(hour => parseInt(hour));

        // Filtrar por franja horaria
        const filteredData = data.filter(({ datetime }) => {
            const date = new Date(datetime);
            const hours = date.getHours();
            return hours >= selectedHours[0] && hours < selectedHours[1];
        });

        return filteredData;

    } catch (error) {
        console.error("Error al filtrar los precios:", error);
    }
};
