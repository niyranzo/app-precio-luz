import './botonLuz.css';

export const createLuzButton = () => {
    const luzButton = document.createElement("button");
    luzButton.id = "luz-btn";
    luzButton.classList.add("dark-btn", "btn");
    luzButton.textContent = "Luz";

    const verLuz = (selectedRange) => {
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

        // Subcontenedor para la lista de precios
        const preciosContainer = document.createElement("div");
        preciosContainer.id = "precios-container";

        const preciosList = document.createElement("ul");
        preciosList.id = "precios-list";

        // Contenido de ejemplo para la lista de precios (basado en la selección)
        const preciosEjemplo = [
            { hour: "08:00 - 09:00", price: "0.15 €" },
            { hour: "09:00 - 10:00", price: "0.14 €" },
            { hour: "10:00 - 11:00", price: "0.13 €" },
        ];

        preciosEjemplo
            .filter(entry => entry.hour === selectedRange || !selectedRange) // Filtrar por rango si está seleccionado
            .forEach((entry) => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `<strong>${entry.hour}</strong><span>${entry.price}</span>`;
                preciosList.appendChild(listItem);
            });

        preciosContainer.appendChild(preciosList);

        // Añadir los subcontenedores al contenedor principal
        luzContainer.appendChild(graficoContainer);
        luzContainer.appendChild(preciosContainer);

        // Añadir contenedor principal al main
        main.appendChild(luzContainer);
    };

    luzButton.addEventListener("click", () => {
        const main = document.getElementById("main");
        main.innerHTML = ""; // Limpiar contenido previo

        // Crear selector de franja horaria
        const selectorContainer = document.createElement("div");
        selectorContainer.id = "selector-container";

        const label = document.createElement("label");
        label.setAttribute("for", "time-range");
        label.textContent = "Selecciona una franja horaria:";

        const select = document.createElement("select");
        select.id = "time-range";

        const options = [
            { value: "", text: "Todos" },
            { value: "08:00 - 09:00", text: "08:00 - 09:00" },
            { value: "09:00 - 10:00", text: "09:00 - 10:00" },
            { value: "10:00 - 11:00", text: "10:00 - 11:00" },
        ];

        options.forEach(option => {
            const opt = document.createElement("option");
            opt.value = option.value;
            opt.textContent = option.text;
            select.appendChild(opt);
        });

        // Crear botón para cargar la franja seleccionada
        const loadButton = document.createElement("button");
        loadButton.textContent = "Mostrar datos";
        loadButton.classList.add("dark-btn", "btn");

        loadButton.addEventListener("click", () => {
            const selectedRange = select.value;
            verLuz(selectedRange);
        });

        selectorContainer.appendChild(label);
        selectorContainer.appendChild(select);
        selectorContainer.appendChild(loadButton);

        // Añadir selector al main
        main.appendChild(selectorContainer);
    });

    return luzButton;
};
