const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");



const corsOptions = {
    origin: "*",
    credentials: true,
  };

const app = express();


app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors(corsOptions));

app.use("/user", require("../user"));
app.use("/adressee", require("../adressee"));
app.use("/campaign", require("../campaign"));


app.use((err, req, res, next) => {
    handleError(err, req, res);
});

module.exports = app;