import "./cardPrices.css"

export const cardPrices = (data) => {
    const preciosContainer = document.createElement("div");
    preciosContainer.id = "precios-container";
    preciosContainer.classList.add("tarjetas-container");

    preciosContainer.innerHTML = data.map(({ value, datetime }) => {
        const horas = Number(datetime.split("T")[1].split(":")[0]);
        return `
        <div class="card">
            <div class="card-body">
                <p><strong>Hora:</strong> ${horas}</p>
                <p><strong>Precio:</strong> ${value} €/MWh</p>
            </div>
        </div>`;
    }).join(""); 
    return preciosContainer;
};

