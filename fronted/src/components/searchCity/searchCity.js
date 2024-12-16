import './searchCity.css';

export const searchCity = (onCitySelected) => {
    // Contenedor principal del selector
    const searchContainer = document.createElement("div");
    searchContainer.id = "search-container";

    // Campo de texto para ingresar el nombre de la ciudad
    const cityInput = document.createElement("input");
    cityInput.id = "city-input";
    cityInput.type = "text";
    cityInput.placeholder = "Granada";

    // Botón de búsqueda
    const searchButton = document.createElement("button");
    searchButton.id = "search-button";
    searchButton.textContent = "Buscar";

    // Evento al hacer clic en el botón
    searchButton.addEventListener("click", () => {
        const enteredCity = cityInput.value.trim(); 
        if (enteredCity === "") {
            alert("Introduce el nombre de una ciudad");
            return;
        }
        if (onCitySelected) {
            onCitySelected(enteredCity); 
        }
    });

    // Organizar los elementos en el contenedor
    searchContainer.append(cityInput, searchButton);

    return searchContainer;
};
