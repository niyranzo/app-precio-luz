import express from 'express';
const router = express.Router();

router.get("/start_date=:start/end_date=:end", (req, res) => {
   const { start, end } = req.params;
    res.json({
        message: "Ruta con parámetros dinámicos",
        start_date: start,
        end_date: end,
    });
});

export default router;
