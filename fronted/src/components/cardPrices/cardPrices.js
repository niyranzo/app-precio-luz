export async function cardPrices(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error al obtener los datos");

        const data = await response.json();

        // Crear un contenedor para las tarjetas
        const cardsFragment = document.createDocumentFragment();

        // Generar una tarjeta para cada elemento de datos
        data.forEach((item) => {
            // Asegurarse de que item.datetime esté en el formato esperado
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
            cardsFragment.appendChild(card);
        });

        return cardsFragment;
    } catch (error) {
        console.error("Error al obtener las tarjetas:", error);
        const errorCard = document.createElement("div");
        errorCard.className = "card";
        errorCard.textContent = "Error al cargar los datos.";
        return errorCard;
    }
}
