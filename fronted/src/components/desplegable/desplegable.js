export const desplegable = () => {
    // Crear los elementos de los desplegables
    const desplegableHoras = document.createElement("select");
    desplegableHoras.id = "desplegableHoras";

    const desplegableDias = document.createElement("select");
    desplegableDias.id = "desplegableDias";

    // Opciones para horas
    const rangosHoras = [
        { label: "0-6", value: "0-6" },
        { label: "6-12", value: "6-12" },
        { label: "12-18", value: "12-18" },
        { label: "18-24", value: "18-24" },
    ];

    // Añadir opciones al desplegable de horas
    rangosHoras.forEach(({ label, value }) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = label;
        desplegableHoras.appendChild(option);
    });

    // Opciones para días (del 01 al 31)
    const dias = [];
    for (let i = 1; i <= 31; i++) {
        const diaFormateado = i.toString().padStart(2, "0"); // Formatear el día con dos dígitos
        dias.push({ label: diaFormateado, value: diaFormateado });
    }

    // Añadir opciones al desplegable de días
    dias.forEach(({ label, value }) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = label;
        desplegableDias.appendChild(option);
    });

    // Crear el contenedor para las tarjetas
    const contenedorTarjeta = document.createElement("div");
    contenedorTarjeta.id = "contenedorTarjeta";

    // Evento para manejar la selección de horas
    desplegableHoras.addEventListener("change", async (event) => {
        const rangoSeleccionado = event.target.value;
        const diaSeleccionado = desplegableDias.value || "01"; // Día por defecto (01)
        contenedorTarjeta.innerHTML = ""; // Limpiar las tarjetas previas

        // Generar la URL y obtener los datos
        const urlHours = import.meta.env.VITE_URL_HOURS;
        const startDate = diaSeleccionado; // Solo el número del día
        const endDate = diaSeleccionado; // Solo el número del día
        const url = `${urlHours}/start_date=${startDate}/end_date=${endDate}/rangeHours=${rangoSeleccionado}`;
        
        // Llamar a la función para obtener las tarjetas
        const card = await cardPrices(url);
        contenedorTarjeta.appendChild(card);
    });

    // Evento para manejar la selección de días
    desplegableDias.addEventListener("change", async (event) => {
        const diaSeleccionado = event.target.value;
        const rangoSeleccionado = desplegableHoras.value || "0-6"; // Rango por defecto
        contenedorTarjeta.innerHTML = ""; // Limpiar las tarjetas previas

        // Generar la URL y obtener los datos
        const urlDays = import.meta.env.VITE_URL_DAYS;
        const startDate = diaSeleccionado; // Solo el número del día
        const endDate = diaSeleccionado; // Solo el número del día
        const url = `${urlDays}/start_date=${startDate}/end_date=${endDate}/rangeHours=${rangoSeleccionado}`;
        
        // Llamar a la función para obtener las tarjetas
        const card = await cardPrices(url);
        contenedorTarjeta.appendChild(card);
    });

    // Crear el contenedor principal y agregar los desplegables y las tarjetas
    const contenedor = document.createElement("div");
    contenedor.id = "contenedorDesplegable";
    contenedor.appendChild(desplegableHoras);
    contenedor.appendChild(desplegableDias);
    contenedor.appendChild(contenedorTarjeta);

    return contenedor;
};
