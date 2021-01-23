const express = require("express");
const app = express();
const path = require('path')

const PORT = process.env.PORT || 3000;


app.get('', (req, res) => {
    res.sendFile(path.join(__dirname + '/app/index.html'));
})

app.use(express.static(__dirname + '/app/static'));
app.use(express.static(__dirname + '/node_modules'));


app.listen(PORT);