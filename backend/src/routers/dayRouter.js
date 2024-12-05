import express from 'express';
import { baseUrl, dateTimeEnd, dateTimeEndHour, dateTimeStart, dateTimeStartHour, timeTruncHour } from '../config/config.js';
import { getDataPriceDays } from '../helpers/getDataPriceDays.js';

const router = express.Router();
router.get("/start_date=:start/end_date=:end", async (req, res) => {
   const { start, end } = req.params;
   // comprobacion de que los parametros sean correctos
    if(isNaN(start) || isNaN(end)) {
        return res.status(404).json({error:"Parametros tienen que ser números"});
    }
    if((start <=0 || start > 31) || (end <=0 || end > 31)) {
        return res.status(404).json({error:"Parametros tienen que ser mayores a 0 y menores a 31"});
    }
    if(start > end ){
        return res.status(404).json({error:"El parametro start tiene que ser menor al end o el formato del numero menor a 10 no es 00"});
    }
    try {
        const data = await getDataPriceDays(`${baseUrl}${dateTimeStart}${start}${dateTimeStartHour}&${dateTimeEnd}${end}${dateTimeEndHour}&${timeTruncHour}`);
        const arr = [...data]
        res.json(arr)
    }catch (error) {
        console.error("Error al realizar la petición", error);
    }
});

export default router;
