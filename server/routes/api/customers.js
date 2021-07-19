const express = require("express");
const router = express.Router();
const db = require("../../config/db")


// router.get("/create", (req, res) => {
//     res.send("hello")
// })

router.post("/create", (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const number = req.body.number;
    const message = req.body.message;

    db.query("INSERT INTO customers (name, email, number) VALUES (?, ?, ?, ?)",
        [name, email, number, message], (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("customer added")
            }
        }
    )

})

module.exports = router;