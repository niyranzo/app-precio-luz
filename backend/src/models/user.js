
import db from "./database.js";

// creacion de un cliente
export const createUser = (username, mail, password, callback) =>{
    // insercion en la db de un cliente
    const sql = `INSERT INTO user (username, mail, password) VALUES (?,?,?)`;
    const params = [username, mail, password];
    db.run(sql, params, function(error){ //sin function no va el this 
        callback(error, {id:this.lastID});
    });
}

//inicio de la sesion
export const login = (username, password, callback) => {
    const sql = "SELECT * FROM user WHERE username = ? AND password = ?";
    const params = [username, password];
    db.get(sql, params, function(error, row) { 
        if (error) {
            callback(error, null); // Si hay un error en la consulta
        } else if (!row) {
            callback(null, false); // Si no se encontró un registro, devolvemos `false`
        } else {
            callback(null, row); // Si se encontró un registro, lo devolvemos
        }
    });
}

//obtener todos los usuarios
export const getAllUsers = (callback) => {
    const sql = `SELECT  * FROM user`;
    db.all(sql, [], function (error, rows) {
        if (error) {
            callback(error, null); // En caso de error, lo manejamos aquí
        } else if (!rows || rows.length === 0) {
            callback(null, false); // Si no hay registros, devolvemos `false`
        } else {
            callback(null, rows); // Si hay registros, los devolvemos
        }
    });
}

//obtener user por id
export const getUserById = (id, callback) => {
    const sql = `SELECT * FROM user WHERE id = ?`;
    db.get(sql, [id], function(error, row){
        if (error) {
            callback(error, null); // Si hay un error en la consulta
        } else if (!row) {
            callback(null, false); // Si no se encontró un registro, devolvemos `false`
        } else {
            callback(null, row); // Si se encontró un registro, lo devolvemos
        }
    });
}
