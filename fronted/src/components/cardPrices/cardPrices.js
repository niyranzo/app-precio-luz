import { fetchDailyPrices, fetchHourPrices } from "../../helpers/api.js"; // Importamos las funciones de la API

document.addEventListener("DOMContentLoaded", async () => {
    const app = document.getElementById("app");
    const desplegableHoras = document.getElementById("desplegableHoras");
    const desplegableDias = document.getElementById("desplegableDias");
    const contenedorTarjetas = document.getElementById("contenedorTarjeta");

    // Función para manejar el evento de selección y actualizar las tarjetas
    const obtenerDatos = async () => {
        const rangoHoras = desplegableHoras.value;  // Ejemplo: "0-6"
        const diaSeleccionado = desplegableDias.value;  // Ejemplo: "08"

        try {
            let data;
            if (rangoHoras) {
                // Obtener precios por horas
                data = await fetchHourPrices(diaSeleccionado, diaSeleccionado, rangoHoras);
            } else {
                // Obtener precios diarios
                data = await fetchDailyPrices(diaSeleccionado, diaSeleccionado);
            }

            // Limpiar tarjetas anteriores
            contenedorTarjetas.innerHTML = "";

            // Verificar si los datos son válidos
            if (data && Array.isArray(data) && data.length > 0) {
                data.forEach((item) => {
                    // Asegurarse de que cada item tenga la estructura correcta
                    if (item.datetime && item.value && item.percentage) {
                        const datetime = new Date(item.datetime);
                        const date = datetime.toLocaleDateString(); // Formato de fecha
                        const hour = datetime.getHours().toString().padStart(2, "0"); // Extrae la hora con 2 dígitos

                        const card = document.createElement("div");
                        card.className = "card";
                        card.innerHTML = `
                            <h3>Precio: ${item.value} €/MWh</h3>
                            <p>Fecha: ${date}</p>
                            <p>Hora: ${hour}:00</p>
                            <p>Porcentaje: ${item.percentage.toFixed(2)}%</p>
                        `;
                        contenedorTarjetas.appendChild(card);  // Agregar la tarjeta directamente al contenedor
                    }
                });
            } else {
                // Si no se encontraron datos válidos, mostrar un mensaje
                const errorCard = document.createElement("div");
                errorCard.className = "card";
                errorCard.textContent = "No se encontraron datos válidos.";
                contenedorTarjetas.appendChild(errorCard);  // Agregar el mensaje de error directamente al contenedor
            }
        } catch (error) {
            console.error("Error obteniendo los datos:", error);
            // Mostrar error si ocurre algo al obtener los datos
            contenedorTarjetas.innerHTML = "Error al cargar los datos.";
        }
    };

    // Eventos para actualizar datos al cambiar los valores de los desplegables
    desplegableHoras.addEventListener("change", obtenerDatos);
    desplegableDias.addEventListener("change", obtenerDatos);

    // Inicializar las tarjetas con los datos por defecto
    obtenerDatos();
});
