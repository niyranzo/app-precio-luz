import express from 'express';
import { getWeather } from '../helpers/getWeather.js';
const router = express.Router();

//get toda la data Api del clima
router.get("/", async (req,res) => {
    const city = req.query.city || "Granada";
    try {
        const data = await getWeather(city);
        res.json(data);
    }catch (error) {
        console.error("Error al realizar la petición", error);
    }
});


export default router;
