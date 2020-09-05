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

app.post('/equation', req, res) => {
    console.log(req.body);
    res.send('your equation here');
}



const port = 3000;
app.listen(port, function() {
    console.log("listening at 3000");
});