import './grafico.css';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export const chart = (data) => {
    const horas = [];
    const precios = [];

    data.forEach(({ value, datetime }) => {
        const h = Number(datetime.split("T")[1].split(":")[0]);
        horas.push(h);
        precios.push(value);
    });
    const canva = document.createElement("canvas");
    canva.id = "miCanva";
    new Chart(canva, {
      type: 'bar',
      data: {
          labels: horas,
          datasets: [{
              label: 'Precio',
              data: precios,
              backgroundColor: "rgba(255, 255, 255, 0.42)",
              borderColor: "rgba(182, 168, 199, 1)",
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          plugins: {
              legend: {
                  labels: {
                      color: 'white'
                  }
              }
          },
          scales: {
              x: {
                  ticks: {
                      color: 'white' 
                  }
              },
              y: {
                  beginAtZero: true,
                  ticks: {
                      color: 'white'
                  }
              }
          }
      }
  });
    return canva;
};
