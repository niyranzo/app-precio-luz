import { createThemeButton, darkButton, lightButton } from "./components/botonTema/botonTema.js";
import { cardPrices } from "./components/cardPrices/cardPrices.js";
import { createFooter } from "./components/footer/footer.js";
import { createMain } from "./components/main/main.js";
import { createNav } from "./components/nav/nav.js";
import { createSpinner, showSpinner, hideSpinner } from "./components/spinner/spinner.js";
import { desplegable } from "./components/desplegable/desplegable.js";

document.addEventListener("DOMContentLoaded", async () => {
    const app = document.getElementById("app");

    // Crear componentes principales
    const nav = createNav();
    const main = createMain();
    const footer = createFooter();
    const spinner = createSpinner();
    const themeBtn = createThemeButton();

    // Añadir el botón de tema a la navegación
    nav.appendChild(themeBtn);

    // Añadir el spinner al main (al inicio está visible)
    main.appendChild(spinner);

    // Crear y añadir el componente desplegable
    const contenedorDesplegables = desplegable();
    main.appendChild(contenedorDesplegables);

    // Añadir todos los componentes al contenedor principal
    app.appendChild(nav);
    app.appendChild(main);
    app.appendChild(footer);

    // Lógica para el cambio de tema
    const tema = () => {
        if (themeBtn.classList.contains("dark-btn")) {
            darkButton();
        } else {
            lightButton();
        }
    };
    themeBtn.addEventListener("click", tema);

    // Mostrar spinner mientras cargan los datos iniciales
    showSpinner();

    // Obtener los valores de los desplegables y actualizar la URL
    const desplegableHoras = document.getElementById("desplegableHoras");
    const desplegableDias = document.getElementById("desplegableDias");

    const obtenerDatos = async () => {
        // Mostrar spinner mientras se carga la información
        showSpinner();
        const rangoHoras = desplegableHoras.value; // Ejemplo: "0-6"
        const diaSeleccionado = desplegableDias.value; // Ejemplo: "08"

        // Construir la URL dependiendo de la selección
        let url;
        if (rangoHoras) {
            // Si se seleccionan las horas, generamos la URL con ese parámetro
            url = `http://localhost:4000/api/hours/start_date=${diaSeleccionado}/end_date=${diaSeleccionado}/rangeHours=${rangoHoras}`;
        } else {
            // Si no se seleccionan horas, generamos la URL para días
            url = `http://localhost:4000/api/days/start_date=${diaSeleccionado}/end_date=${diaSeleccionado}`;
        }

        try {
            // Limpiar tarjetas existentes
            const contenedorTarjeta = document.getElementById("contenedorTarjeta");
            contenedorTarjeta.innerHTML = "";

            // Crear nuevas tarjetas según la URL
            const card = await cardPrices(url);
            contenedorTarjeta.appendChild(card);
        } catch (error) {
            console.error("Error cargando las tarjetas:", error);
            const contenedorTarjeta = document.getElementById("contenedorTarjeta");
            contenedorTarjeta.innerHTML = "No se pudieron cargar los precios.";
        } finally {
            hideSpinner();
        }
    };

    // Eventos para actualizar datos al cambiar los valores de los desplegables
    desplegableHoras.addEventListener("change", obtenerDatos);
    desplegableDias.addEventListener("change", obtenerDatos);

    // Ocultar spinner al terminar de cargar todo inicialmente
    hideSpinner();
});
