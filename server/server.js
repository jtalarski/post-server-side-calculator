// requires
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

console.log('in server js');

// Uses
app.use(express.static(`server/public`));
app.use(bodyParser.urlencoded({ extended: true }));

// Globals
let calculations = [];
const port = 3000;

// routes
app.post('/equation', (req, res) => {
        console.log(req.body);
        inventory.push(req.body);
        res.sendStatus(201);
    }) // end /inventory POST


app.listen(port, function() {
    console.log("listening at 3000");
});