
//. FUNCIONES PARA MANEJAR LA "SESIÓN" 
export const setSession = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const getSession = (key) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
};

export const clearSession = (key) => {
    localStorage.removeItem(key);
};


//. FUNCIONES PARA VALIDAR DATOS 

export const validateDate = (startDate, endDate) => {

    const numericStartDate = Number(startDate);
    const numericEndDate = Number(endDate);

    // Verificar que ambas fechas son números válidos
    if (isNaN(numericStartDate) || isNaN(numericEndDate)) {
        throw new Error("Ambas fechas deben ser números válidos");
    }


    // Verificar que es una cadena de dos dígitos
    if (!/^\d{2}$/.test(startDate) || !/^\d{2}$/.test(endDate)) {
        throw new Error(`Deben ser dos dígitos`);
    }

    // Verificar el rango
    if ((numericStartDate < 1 || numericStartDate > 30)  || (numericEndDate < 1 || numericEndDate > 30)){
        throw new Error(`La fecha debe estar entre 01 y 30`);
    }

    // Comprobar el orden correcto
    if (numericStartDate > numericEndDate) {
        throw new Error("La fecha de inicio debe ser menor o igual a la fecha de fin");
    }

    return true;
};

