import express from 'express';
import productRoutes from "./routes/products.js";

// creamos la instancia de express
const app = express();
// usamos el middleware (funciones q se ecuentran entre el usuario y la api) para que nuestro servidor pueda entender json
app.use(express.json());
// rutas que podemos usar
app.use("/api/products", productRoutes);
// puerto en el que se va a correr el servidor 
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
