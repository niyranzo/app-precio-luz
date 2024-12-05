//. ----------- IMPORTACIONES ------------- 

import { baseUrl, dateTimeEnd, dateTimeEndHour, dateTimeStart, dateTimeStartHour, timeTruncHour } from "../config/config.js";
import { getDataPrices } from "./getDataPrice.js";


//. ----------- DECLARACIÓN DE FUNCIONES ----------- 
/**
 * @author Ana
 * @description Filtra los datos de precios según un rango horario
 * @param {String} rangeHour --> "[0-6],[6-12],[12-18],[18-24]"
 * @param {String} startDay
 * @param {String} endDay
 * @returns {Promise<Array>}
 */
export const getFilteredPrices = async (rangeHour, startDay, endDay) => { // ---> const rangeHour = import.meta.env.VITE_HOUR_RANGES.split(","); Incluir donde se llame a la funcion
    try {
        // url de la API construida con los parametros
        const url = `${baseUrl}${dateTimeStart}${startDay}${dateTimeStartHour}&${dateTimeEnd}${endDay}${dateTimeEndHour}&${timeTruncHour}`;

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
