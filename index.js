const app = require('express')();
const http = require('http').Server(app);
const path = require('path');
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/', (req, res) => {
    res.send("This is the webserver to serve images for HoosSearching!");
});

app.get('/assets/:name', function (req, res, next) {
    var options = {
        root: path.join(__dirname, 'assets'),
    }

    var fileName = req.params.name
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err)
        } else {
            console.log('Sent:', fileName)
        }
    })
})

http.listen(port, () => {
    console.log(`Listening on *:${port}`);
});