import { dataDays } from "../data/data.js";
import { createDay, getAllDays, getRangeDays, updatePriceDay } from "../models/day.js";

//traigo la data para crearla si no existe o actualiazarla

//traer la data por un rango de dias 
export const getDaysRangeHandler = (req,res) => {
    const { start, end} = req.params;
    getRangeDays(Number(start), Number(end) , (err, rows) => {
        if(err){
            res.status(500).json({error:err.message}); //500 = error de conexion
        }else{
            res.status(200).json(rows);
        }
    });
}

// tomar todos los dias
export const getAllDaysHandler =  (req,res) => {
    getAllDays(async (err, rows) => {
        if(err){
            res.status(500).json({error:err.message}); //500 = error de conexion
        }else{
            res.status(200).json(rows);
        }
    });
}

//crear todos los dias
export const createDaysHandler = async (req, res) => {
    const days = await dataDays();

    //tiene que ser un array 
    if(!Array.isArray(days)){
        return res.status(404).json({ error: "Debe ser un array de dias" });
    }
    
    let results = [];

    days.forEach(({ day, price }) => {
        createDay(day, price, (err, result) => {
            if(err){
                results.push({error:err.message});//500 = error de conexion
            }else{
                results.push(result);
            }
        });
    });
    res.status(200).json({ message: "Se introdujeron los datos de los dias" });
} 


// crear un dias
export const createDayHandler = (req,res) => {
    const { day, price} = req.body; //tomar la data
    // createCliente es la consulta sql para crear un cliente
    createDay(day, price, (err, result) => {
        if(err){
            res.status(500).json({error:err.message});//500 = error de conexion
        }else{
            res.status(201).json(result);
        }
    });
}

//actualizar 1 dia
export const updatePriceHandler = (req, res) => {
    const { day } = req.params;
    const { price} = req.body; //tomar la data
    updatePriceDay(day, price, (err, result) => {
        if(err){
            res.status(500).json({error:err.message});//500 = error de conexion
        }else{
            res.status(201).json(result);
        }
    })
}