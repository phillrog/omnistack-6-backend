const express = require('express');

const app = express();

const port = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/api', require('./routes.js'))


app.listen(port, () => {
    console.log(`O servidor iniciou rodando na porta ${port}`);
})
