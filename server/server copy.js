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
        console.log('made it to the server');
        calculations.push(req);
        res.sendStatus(201);
    }) // end /inventory POST

app.get('/equation', (req, res) => {
    console.log('in /equation GET');
    res.send(calculations);
})

app.listen(port, function() {
    console.log("listening at 3000");
});