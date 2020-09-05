const express = require('express');
const bodyParser = require('body-parser');

console.log('in server js');

const app = express();
app.use(express.static(`server/public`));
app.use(bodyParser.urlencoded({ extended: true }));





const port = 3000;
app.listen(port, function() {
    console.log("listening at 3000");
});