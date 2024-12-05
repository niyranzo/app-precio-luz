import sqlite3 from "sqlite3";
import { DATABASE_PATH } from "../config/config.js"; //con llaves pq no hemos puesto export

const db = new sqlite3.Database(DATABASE_PATH, err => {
    if(err){
        console.error("Error al abrir la base de datos: ", err.message);
    }else{
        console.log("Conexión exitosa a la base de datos");
    }

    db.serialize(()=>{
        //aqui se pone lo que quiera ejecutar, db.rum
        db.run(`
            CREATE TABLE IF NOT EXISTS user (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT NOT NULL,
                mail TEXT NOT NULL,
                password TEXT NOT NULL
            )`
        )
        db.run(`
            CREATE TABLE IF NOT EXISTS day (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            day INTEGER NOT NULL,
            price INTEGER NOT NULL,
            lastUpdate TIMESTAMP NOT NULL
            )`
        )
        db.run(`
            CREATE TABLE IF NOT EXISTS hours (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            day INTEGER NOT NULL,
            hour INTEGER NOT NULL,
            price INTEGER NOT NULL,
            lastUpdate TIMESTAMP NOT NULL
            )`
        );
    });
});
export default db;