const mysql = require('mysql');


const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "Sony1234",
    database: "NextLevel"
})

module.exports = db;