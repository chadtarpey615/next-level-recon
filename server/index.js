const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes")
// const db = require("./models")
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);


app.listen(3003, (res, req) => {
    console.log("Server is running 3003")
});
