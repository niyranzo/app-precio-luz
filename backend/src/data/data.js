import { getDataPriceDays } from "../helpers/getDataPriceDays.js";

export const dataDays = async () => {
    try {
        const data = await getDataPriceDays("https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real?start_date=2024-01-1T00:00&end_date=2024-01-31T23:59&time_trunc=hour");
        // const arr = [...data]
        const arrDays = [];
        data.forEach((value, key) => {
          arrDays.push({
            day:key,
            price:value
          })
        })
        return arrDays;
      } catch (error) {
        console.error('error', error);
      }
}