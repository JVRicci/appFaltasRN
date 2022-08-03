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

app.post('/registrarTurma',async(req,res)=>{
    console.log(req.body.id )
})

//rotas.registrarTurma)


let port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log('Servidor rodando na porta: '+port);
});