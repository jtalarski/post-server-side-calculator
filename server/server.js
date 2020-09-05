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

//routes
app.get('/calculator', (req, res) => {
        console.log('/calculator GET hit on server');
        res.send(calculations);
    }) // end /inventory GET

app.post('/calculator', (req, res) => {
    console.log('I got', req.body);
    calculations.unshift(req.body);
    res.sendStatus(201);
})


app.listen(port, () => {
        console.log('server is up:', port);
    }) // end server up