
import db from "./database.js";

//id, day, hour, price, lastupdate

// creacion de los dias (solo se usa 1 vez)
export const createHour = (day, hour, price, lastUpdate) =>{
    // insercion en la db de un cliente
    const sql = `INSERT INTO hour (day, hour, price, lastUpdate) VALUES (?,?,?)`;
    const params = [day, hour, price, lastUpdate];
    db.run(sql, params, function(error){ //sin function no va el this 
        callback(error, {id:this.lastID});
    });
}

//obtener todos los dias
export const getAllHours = (callback) => {
    const sql = `SELECT  * FROM hour`;
    db.all(sql, [], function(error, rows){
        callback(error, rows);
    });
}

//actualzar los dias 
export const updateHour = (id, day, price, lastUpdate) => {
    const sql = `UPDATE day SET day = ? , hour = ?, price = ?, lastUpdate = ? WHERE id = ?`;
    const params = [day, price, lastUpdate, id];
    db.run(sql, params, function(error){
        callback(error, {changes:this.changes});
    })
}

//obtener hora por id
export const getHourById = (id, callback) => {
    const sql = `SELECT * FROM hour WHERE id = ?`;
    db.get(sql, [id], function(error, rows){
        callback(error, rows);
    });
}

