const mysql = require("mysql");
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Sony1234",
    database: "NextLevel"
});

module.exports = db;