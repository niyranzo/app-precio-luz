import './chart.css'
export const chart = (data) =>{
    const horas = [];
    const precios = [];
    data.keys().forEach(k => {
        const datos=data.get(k);
        datos.forEach(({ precio, hora })=>{
            horas.push(hora);
            precios.push(precio);
            ;
        })
    });
    const canva = document.getElementById('miCanva');
    return new Chart(canva, {
      type: 'line', // Tipo de gráfica: 'bar', 'line', 'pie', etc.
      data: {
        labels: horas, // Etiquetas en el eje X
        datasets: [{
          label: 'Precio',
          data: precios, // Datos de la gráfica
          backgroundColor: "#ffabc6",
          borderColor:  "#ffabc6",
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
}