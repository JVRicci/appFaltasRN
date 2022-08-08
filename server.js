//chamada do file rotas
const rotas = require('./routes/catequese_route.js')

//packs necessários

const express = require('express');
const bodyParser = require('body-parser');

const cors =  require('cors');
const { application } = require('express');

let app=express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//rotas

//inserts
app.post('/registrarTurma',rotas.registrarTurma)
app.post('/cad-encontro',rotas.cadEncontro)

//consulta
app.get('/cons-turma',rotas.consTurma)

//start do server
let port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log('Servidor rodando na porta: '+port);
});