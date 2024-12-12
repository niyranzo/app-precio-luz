import './botonLuz.css';
import { contenedorDesplegable } from '../desplegable/desplegable.js';
import { fetchDailyPrices2 } from '../../helpers/api.js'; 
import { cardPrices } from '../cardPrices/cardPrices.js';
import { chart } from '../grafico/grafico.js';
import { createSpinner, hideSpinner, showSpinner } from '../spinner/spinner.js';

export const createLuzButton = () => {
    const luzButton = document.createElement("button");
    luzButton.id = "luz-btn";
    luzButton.classList.add("dark-btn", "btn");
    luzButton.textContent = "Luz";

    const verLuz = async (horas, dias) => {
        try {
            const data = await fetchDailyPrices2(dias, horas);
            const luzContainer = document.createElement("div");
            luzContainer.id = "luz-container";
    
            const graficoContainer = document.createElement("div");
            graficoContainer.id = "grafico-container";
    
            const card = cardPrices(data);
            const canva = chart(data);
    
            graficoContainer.appendChild(canva);
            luzContainer.append(graficoContainer, card);
    
            main.innerHTML = ""; 
            main.appendChild(luzContainer);
        } catch (error) {
            console.error("Error cargando datos:", error);
        }
    };
    
    luzButton.addEventListener("click", () => {
        const main = document.getElementById("main");
        main.innerHTML = ""; 
        
        const desplegableComponent = contenedorDesplegable();
        desplegableComponent.id = "selector-container";
        desplegableComponent.classList.add("selector-container");

        const loadButton = document.createElement("button");
        loadButton.textContent = "Mostrar datos";
        loadButton.classList.add("dark-btn", "btn");

        // Manejar clic en "Mostrar datos"
        loadButton.addEventListener("click", async () => {
            const spinner = createSpinner(); 
            main.appendChild(spinner);
            
            showSpinner(); 
        
            const desplegableHoras = document.getElementById("hoursRangeSelects").value;
            const desplegableDias = document.getElementById("daysRangeSelects").value;
        
            try {
                await verLuz(desplegableHoras, desplegableDias);
            } catch (error) {
                console.error("Error al cargar los datos:", error);
            } finally {
                hideSpinner();
            }
        });
        
        desplegableComponent.appendChild(loadButton);
        main.append(desplegableComponent);
    });

    return luzButton;
};
