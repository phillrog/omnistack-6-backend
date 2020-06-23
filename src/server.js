const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(cors());

const server = require('http').Server(app);
const io = require('socket.io')(server);


const port = process.env.PORT || 5001;;

io.on('connection', socket => {
    socket.on('connectRoom', box => {
        socket.join(box);
    })
});

app.use((req, res, next) => {
    req.io = io;

    return next();
});


app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));

app.use('/api', require('./routes.js'))


server.listen(port, () => {
    console.log(`O servidor iniciou rodando na porta ${port}`);
})
