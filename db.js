import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sua_senha_bd",
    database: "sua_data_bd",
});

