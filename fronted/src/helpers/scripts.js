export async function getData() {
    const rangoHoras = document.getElementById("desplegableHoras").value; // Rango de horas
    const diaSeleccionado = document.getElementById("desplegableDias").value; // Día seleccionado


    const url = `http://localhost:4000/api/hours/start_date=${diaSeleccionado}&end_date=${diaSeleccionado}&rangeHours=${rangoHoras}`;

    try {
        const response = await fetch(url);

      
        if (!response.ok) {
            throw new Error("Error al obtener los datos de la API.");
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error("Error al obtener los datos:", error);
        return null;
    }
}
