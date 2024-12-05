import { createDay, getAllDays, getDayById, updateDay } from "../models/day";

//traer 1 dia por id
export const getDayHandler = (req,res) => {
    const { id } = req.params; //tomar la data
    getDayById(id, (err, rows) => {
        if(err){
            res.status(500).json({error:err.message}); //500 = error de conexion
        }else{
            res.status(200).json(rows);
        }
    });
}

// tomar todos los dias
export const getAllDaysHandler = (req,res) => {
    getAllDays((err, rows) => {
        if(err){
            res.status(500).json({error:err.message});//500 = error de conexion
        }else{
            res.status(200).json(rows);
        }
    });
}

//id, day, price, lastupdate

// crear los dias
export const createDayHandler = (req,res) => {
    const { day, price, lastupdate} = req.body; //tomar la data
    // createCliente es la consulta sql para crear un cliente
    createDay(day, price, lastupdate, (err, result) => {
        if(err){
            res.status(500).json({error:err.message});//500 = error de conexion
        }else{
            res.status(201).json(result);
        }
    });
}

//actualizar los dias 
export const updateDayHandler = (req, res) => {
    const { id } = req.params;
    const { day, price, lastupdate} = req.body; //tomar la data
    updateDay(id, day, price, lastupdate, (err, result) => {
        if(err){
            res.status(500).json({error:err.message});//500 = error de conexion
        }else{
            res.status(201).json(result);
        }
    })
}