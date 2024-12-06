
import db from "./database.js";

// creacion de los dias (solo se usa 1 vez)
export const createDay = (day, price, callback) =>{
    // insercion en la db de un cliente
    const sql = `INSERT INTO day (day, price) VALUES (?, ?)`;
    const params = [day, price];
    db.run(sql, params, function(error){ //sin function no va el this 
        callback(error, {id:this.lastID});
    });
}

//sacar los dias entre dos dias
export const getRangeDays = (startDate, endDate, callback) => {
    const sql = `SELECT  * FROM day WHERE day >= ? AND day <= ?`;
    const params = [startDate, endDate];
    db.all(sql, params, function (error, rows) {
        if (error) {
            callback(error, null); // En caso de error, lo manejamos aquí
        } else {
            callback(null, rows); // Si hay registros, los devolvemos
        }
    });
}

//obtener todos los dias
export const getAllDays = (callback) => {
    const sql = `SELECT  * FROM day`;
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

//actualzar los dias 
export const updatePriceDay = (day, price, callback) => {
    const sql = `UPDATE day SET price = ? WHERE day = ?`;
    const params = [price, day];
    db.run(sql, params, function(error){
        callback(error, {changes:this.changes});
    })
}

