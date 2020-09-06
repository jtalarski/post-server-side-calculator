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
let calcSolution;

//routes
app.get('/calculator', (req, res) => {
        console.log('/calculator app.GET hit on server');
        res.send(calculations);
    }) // end  GET



app.post('/calculator', (req, res) => {
    console.log('I got a request in app.post', req.body);
    let newCalculation = req.body;
    console.log('Here is newCalculation', newCalculation);


    newCalcMethod(newCalculation);

    function newCalcMethod(newCalculation) {
        if (newCalculation.operator === '+') {
            calcSolution = Number(newCalculation.firstNum) + Number(newCalculation.secondNum);
        } else if (newCalculation.operator === '-') {
            calcSolution = Number(newCalculation.firstNum) - Number(newCalculation.secondNum);
        } else if (newCalculation.operator === 'x') {
            calcSolution = Number(newCalculation.firstNum) * Number(newCalculation.secondNum);
        } else if (newCalculation.operator === '/') {
            calcSolution = Number(newCalculation.firstNum) / Number(newCalculation.secondNum);
        } else {
            console.log('no bueno, senor');
        }
        return calcSolution;
    }

    newCalculation.solution = calcSolution
    calculations.unshift(newCalculation);
    res.sendStatus(200);
});


app.listen(port, () => {
        console.log('server is up:', port);
    }) // end server up