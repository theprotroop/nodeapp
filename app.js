const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("<h2>My full cicd </h2>");
});

app.listen(3000,() => {
    console.log("app is running on port 3000...");
});
