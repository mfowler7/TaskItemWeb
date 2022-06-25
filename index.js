const express = require('express');
const request = require('request');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    request('https://xv3232pi63.execute-api.us-east-1.amazonaws.com/Prod/', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            console.log(body);
            res.set('Content-Type', 'text/html');
            res.status(200).send(JSON.stringify(body));
        } else {
            res.status(400).send();
        }
    });
});

app.listen(PORT, (err) => {
    if (!err) {
        console.log(`Server is running, app listening on port ${PORT}`);
    } else {
        console.log(`Failed to start server: ${err}`);
    }
});