import { API_ROUTES } from "../config/routes.js";
import { validateDate } from "./scripts.js";

// FETCH PARA OBTENER LOS RANGOS PERMITIDOS 
// export const getHourRanges = async () => {
//     try {
//         const response = await fetch("http://localhost:4000/api/hour-ranges");
//         if (!response.ok) throw new Error("Error al obtener los rangos");

//         const data = await response.json();
//         return data.hourRanges;

//     } catch (error) {
//         console.error("Error :", error.message);
//         throw error;
//     }
// };


//' ** FETCH PARA OBTENER LOS PRECIOS POR DIAS **
export const fetchDailyPrices = async (startDate, endDate) => {
  try {
    validateDate(startDate, endDate);

    const url = API_ROUTES.DAILY_PRICES(startDate, endDate);
    const response = await fetch(url);

    if (!response.ok) throw new Error("Error al obtener precios diarios");
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

//' ** FETCH PARA OBTENER LOS PRECIOS POR HORAS **
export const fetchHourPrices = async (startDate, endDate, range) => {
  try {
    validateDate(startDate, endDate);

    const url = API_ROUTES.HOUR_PRICES(startDate, endDate, range);
    const response = await fetch(url);

    if (!response.ok) throw new Error("Error al obtener precios por horas");
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

//` ** FETCH PARA VER SI EL USUARIO ESTA EN LA BD **
export const loginUser = async (username, password) => {
  try {
      const url = `${API_ROUTES.LOGIN}`; 
      const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
      });

      if (!response.ok) throw new Error("Usuario o contraseña incorrectos");

      const data = await response.json();
      return data; // Usuario autenticado
  } catch (error) {
      console.error("Error en loginUser:", error.message);
      throw error;
  }
};

//` ** FETCH PARA REGISTRAR UN USUARRIO **
export const registerUser = async (username, mail, password) => {
  try {
    const response = await fetch(API_ROUTES.REGISTER, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, mail, password }),
    });

    if (!response.ok) throw new Error("Error al registrar el usuario");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en registerUser:", error);
    throw error;
  }
};
