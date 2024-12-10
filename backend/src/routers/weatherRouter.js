import express from 'express';
import { getWeather } from '../helpers/getWeather.js';
const router = express.Router();

//get toda la data Api del clima
router.get("/", async (req,res) => {
    try {
        const data = await getWeather();
        res.json(data);
    }catch (error) {
        console.error("Error al realizar la petición", error);
    }
});


export default router;
