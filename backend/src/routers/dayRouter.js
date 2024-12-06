import express from 'express';
import { createDayHandler, createDaysHandler, getAllDaysHandler, getDaysRangeHandler, updatePriceHandler } from '../controllers/dayController.js';

const router = express.Router();

// GET MEDIANTE UN RANGO DE DIAS 
router.get("/start_date=:start/end_date=:end", (req, res) => {
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

    //devolvemos la data
    getDaysRangeHandler(req, res)
    
});

//GET DE TODOS LOS DIAS
router.get("/", getAllDaysHandler);
// POST PARA CREAR LOS DIAS (solo se usa 1 vez) el q descomente esto lo mato
// router.post("/", createDaysHandler); // para todos los dias 
// router.post("/", createDayHandler); // para 1 dia
// ACTUALIZAR ALGUN DIA 
router.put("/:day", updatePriceHandler)


export default router;
