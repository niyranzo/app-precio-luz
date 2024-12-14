import './searchCity.css';

export const searchCity = (onCitySelected) => {

    // Contenedor principal del selector
    const searchContainer = document.createElement("div");
    searchContainer.id = "search-container";

    // Selector de ciudades
    const citySelector = document.createElement("select");
    citySelector.id = "city-selector";

    // Opciones para el selector de ciudades
    const cities = [
        "Granada",    
        "Madrid",
        "Barcelona",
        "Sevilla",
        "Valencia",
        "Bilbao",
        "Zaragoza",
        "Málaga",
        "Córdoba",
        "Santander"
    ];

    cities.forEach(city => {
        const option = document.createElement("option");
        option.value = city;         
        option.textContent = city;   
        citySelector.appendChild(option);
    });


    // Botón de búsqueda
    const searchButton = document.createElement("button");
    searchButton.id = "search-button";
    searchButton.textContent = "Buscar";


    // Evento al hacer clic en el botón
    searchButton.addEventListener("click", () => {
        const selectedCity = citySelector.value; 
        if (onCitySelected) {
            onCitySelected(selectedCity);       
        }
    });
    

    // Organizar los elementos en el contenedor
    searchContainer.append(citySelector, searchButton);

    return searchContainer;
};
