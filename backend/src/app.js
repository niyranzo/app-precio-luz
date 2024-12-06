import express from 'express';
import dayRouter from "./routers/dayRouter.js";
import hoursRouter from "./routers/hoursRouter.js";
import { PORT } from './config/config.js';

// Crear la instancia de express
const app = express();

// Usar middleware para que el servidor pueda entender JSON
app.use(express.json());

// Rutas 
app.use("/api/days", dayRouter);
app.use("/api/hours", hoursRouter);

// Puerto en el que se va a correr el servidor
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
   v