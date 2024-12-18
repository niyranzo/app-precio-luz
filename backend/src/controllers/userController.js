import { createUser, getAllUsers, getUserById, login } from "../models/user.js";
//models
//traer 1 usuario por id
export const getUserHandler = (req,res) => {
    const { id } = req.params; //tomar la data de los params
    getUserById(id, (err, rows) => {
        if(err){
            res.status(500).json({error:err.message}); //500 = error de conexion
        }else{
            res.status(200).json(rows);
        }
    });
}

//comprobar el login
export const loginHandler = (req, res) => {
    const { username, password } = req.body;
    login(username, password, (err, user) => {
        if (err) {
            console.error("Error en la consulta SQL:", err.message);
            return res.status(500).json({ error: "Error del servidor" });
        }
        if (!user) {
            return res.status(401).json({ error: "Credenciales incorrectas" });
        }
        res.status(200).json(user);
    });
};


// tomar todos los usuarios
export const getAllUsersHandler = (req,res) => {
    getAllUsers((err, rows) => {
        if(err){
            res.status(500).json({error:err.message});//500 = error de conexion
        }else{
            res.status(200).json(rows);
        }
    });
}

// crear los usuarios
export const createUserHandler = (req,res) => {
    const { username, mail, password} = req.body; //tomar la data
    // createCliente es la consulta sql para crear un cliente
    createUser(username, mail, password, (err, result) => {
        if(err){
            res.status(500).json({error:err.message});//500 = error de conexion
        }else{
            res.status(201).json(result);
        }
    });
}

//borrar usuario
export const deleteClienteHandler = (req,res) => {
    const { id } = req.params; //tomar la data
    deleteClientById(id, (err, result) => {
        if(err){
            res.status(500).json({error:err.message});//500 = error de conexion
        }else if(result.changes === 0){
            res.status(404).json({error: "Cliente no encontrado"});//404 = error de no encontrar el id 
        }else{
            res.status(201).json(result);
        }
    });
}
