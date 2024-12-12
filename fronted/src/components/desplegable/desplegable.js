const rangoHoras = import.meta.env.VITE_HOURS_RANGE;
const rangoDias = import.meta.env.VITE_DAYS_RANGE;

export const contenedorDesplegable = () => {
    const divDesplegable = document.createElement('div');
    divDesplegable.id = 'contenedorDesplegable';
    
    const texto = document.createElement("p");
    texto.textContent = "Selecciona una franja horaria";
    
    const hoursRangeSelects = document.createElement("select");
    hoursRangeSelects.id = "hoursRangeSelects";
    
    const hours = rangoHoras.split(",");
    const days = rangoDias.split(",");
    
    hours.forEach(h => {
        const option = document.createElement("option");
        option.value = h;
        option.textContent = h;
        hoursRangeSelects.appendChild(option);
    });

    const daysRangeSelects = document.createElement("select");
    daysRangeSelects.id = "daysRangeSelects";
    
    days.forEach(h => {
        const option = document.createElement("option");
        option.value = h;
        option.textContent = h;
        daysRangeSelects.appendChild(option);
    });

    divDesplegable.append(texto, hoursRangeSelects, daysRangeSelects);

    return divDesplegable;
}