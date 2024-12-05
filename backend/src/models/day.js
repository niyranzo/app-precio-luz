
import db from "./database.js";

// creacion de los dias (solo se usa 1 vez)
export const createDay = (day, price, lastUpdate) =>{
    // insercion en la db de un cliente
    const sql = `INSERT INTO day (day, price, lastUpdate) VALUES (?,?,?)`;
    const params = [day, price, lastUpdate];
    db.run(sql, params, function(error){ //sin function no va el this 
        callback(error, {id:this.lastID});
    });
}

//obtener todos los dias
export const getAllDays = (callback) => {
    const sql = `SELECT  * FROM day`;
    db.all(sql, [], function(error, rows){
        callback(error, rows);
    });
}

//actualzar los dias 
export const updateDay = (id, day, price, lastUpdate) => {
    const sql = `UPDATE day SET day = ? , price = ?, lastUpdate = ? WHERE id = ?`;
    const params = [day, price, lastUpdate, id];
    db.run(sql, params, function(error){
        callback(error, {changes:this.changes});
    })
}

//obtener dia por id
export const getDayById = (id, callback) => {
    const sql = `SELECT * FROM day WHERE id = ?`;
    db.get(sql, [id], function(error, rows){
        callback(error, rows);
    });
}

