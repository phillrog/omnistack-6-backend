const express = require('express');
const mongoose = require('mongoose');

const app = express();

const port = 3000;

mongoose.connect('mongodb+srv://omnistack6:1234@cluster0-jyyah.mongodb.net/drop-box?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/api', require('./routes.js'))


app.listen(port, () => {
    console.log(`O servidor iniciou rodando na porta ${port}`);
})
