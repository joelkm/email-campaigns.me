const express = require("express");

const app = express();

/*app.use(cors({
    origin: 'http://localhost:3000'
}));*/
app.use(express.json());

app.get("*", (req, res) => {
    console.log("Hola");
    res.status(200).json({
        bien: "gucci"
    })
})

module.exports = app;