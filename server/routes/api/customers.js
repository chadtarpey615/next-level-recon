const express = require("express");
const router = express.Router();
// const cors = require("cors");
// app.use(express.json());
// const db = require('../config/index');


router.get("/create", (req, res) => {
    res.send("hello")
})

router.post("/create", (req, res) => {
    res.send("<p>hello</p>")
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

module.exports = router;