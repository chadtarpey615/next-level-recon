const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
const db = require('../config/index');

app.post("/", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const number = req.body.number;

    db.query("INSERT INTO customers (name, email, number) VALUES (?, ?, ?)",
        [name, email, number], (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("customer added")
            }
        }
    )

})