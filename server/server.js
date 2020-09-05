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
    }) // end  GET



app.post('/calculator', function(req, res) {
    console.log('I got', req.body);
    let newCalculation = req.body

    calculations.unshift(newCalculation);
    res.sendStatus(200);
});


app.listen(port, () => {
        console.log('server is up:', port);
    }) // end server up

function newFunction() {
    console.log('in newFunction');
}