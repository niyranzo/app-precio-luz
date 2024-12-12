import './botonLuz.css';
import { contenedorDesplegable } from '../desplegable/desplegable.js';
import { fetchDailyPrices2 } from '../../helpers/api.js'; // Importar API
import { cardPrices } from '../cardPrices/cardPrices.js'; // Asumimos que esta función genera tarjetas

export const createLuzButton = () => {
    const luzButton = document.createElement("button");
    luzButton.id = "luz-btn";
    luzButton.classList.add("dark-btn", "btn");
    luzButton.textContent = "Luz";

    const verLuz = async (horas, dias) => {
        const main = document.getElementById("main");
        main.innerHTML = ""; // Limpiar contenido previo

        // Crear contenedor principal para la vista de luz
        const luzContainer = document.createElement("div");
        luzContainer.id = "luz-container";

        // Subcontenedor para gráfico     
        const graficoContainer = document.createElement("div");
        graficoContainer.id = "grafico-container";
        graficoContainer.textContent = "Aquí podemos poner el gráfico";

        const grafico = document.createElement("canvas");
        grafico.id = "grafico-luz";
        graficoContainer.appendChild(grafico);

        // Subcontenedor para precios (será reemplazado con tarjetas)
        

        try {
            const data = await fetchDailyPrices2(dias, horas);
            const card = cardPrices(data);
            luzContainer.append(graficoContainer, card);
        } catch (error) {
            console.error(error);
        }

        // Añadir los subcontenedores al contenedor principal
       
        // Añadir contenedor principal al main
        main.appendChild(luzContainer);
    };

    luzButton.addEventListener("click", () => {
        const main = document.getElementById("main");
        main.innerHTML = ""; // Limpiar contenido previo

        // Crear componente desplegable
        const desplegableComponent = contenedorDesplegable();
        desplegableComponent.id = "selector-container";
        desplegableComponent.classList.add("selector-container");

        // Crear botón para cargar los datos seleccionados
        const loadButton = document.createElement("button");
        loadButton.textContent = "Mostrar datos";
        loadButton.classList.add("dark-btn", "btn");

        // Manejar clic en "Mostrar datos"
        loadButton.addEventListener("click", () => {
            const desplegableHoras = document.getElementById("hoursRangeSelects").value;
            const desplegableDias = document.getElementById("daysRangeSelects").value;
            console.log(desplegableHoras);
            
            verLuz(desplegableHoras, desplegableDias);
        });

        desplegableComponent.appendChild(loadButton);
        main.appendChild(desplegableComponent);
    });

    return luzButton;
};
