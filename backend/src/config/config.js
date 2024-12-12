//config necesarias del proyecto
import dotenv from "dotenv";

dotenv.config(); //carga las variables de entorno del archivo .env en process.env

// exportamos las variables
export const PORT = process.env.PORT || 4000; //si no carga la variable
export const DATABASE_PATH = process.env.DATABASE_PATH || "./database/proyecto.sqlite";
export const baseUrl = process.env.BASE_URL ;
export const day = process.env.TIME_DAY;
export const dateTimeStart = process.env.DATE_TIME_START;
export const dateTimeStartHour = process.env.DATE_TIME_START_HOUR;
export const dateTimeEnd = process.env.DATE_TIME_END;
export const dateTimeEndHour = process.env.DATE_TIME_END_HOUR;
export const timeTruncHour = process.env.TIME_HOUR;