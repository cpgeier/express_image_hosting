const app = require('express')();
const http = require('http').Server(app);

const port = process.env.PORT || 3000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/', (req, res) => {
    res.send("WWO!");
});

app.get('/wow.jpg', (req, res) => {
    res.sendFile("/wow.jpg");
});

http.listen(port, () => {
    console.log(`Listening on *:${port}`);
});
