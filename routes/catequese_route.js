const express = require('express');
const router = express.Router();
const db = require("../config/config.json");
const { query, application } = require('express');
const models = require('../models');
//const { where } = require('sequelize/types');

var registrarTurma = router.post('/registrarTurma',async(req,res)=>{

    let cadastrar = await models.turmas.create({
        idCatequista : req.body.idC,
        diaencontro : req.body.dia,
        formacao : req.body.forma
    })

})

var cadEncontro = router.post('/cad-encontro',async(req,res)=>{ 

    let cadastrar= await models.encontros.create({
        idTurma : req.body.idTurma,
        descricao : req.body.descricao
    })


} )


//Consultas


var consTurma = router.get('/cons-turma', async(req,res)=>{
    let query = await models.turmas.findAll({
        raw: true,
        attributes:['id', 'idCatequista', 'diaencontro', 'formacao'],
        where:{
            'idCatequista':1
        }
    })
    res.send(query)
})


var consEncontros = router.get('/cons-encontros',async(req,res)=>{
    var query = await models.encontros.findAll({
        raw:true,
        attributes:['id', 'idTurma', 'descricao'],
       /* where:{
            'idTurma':1
        }*/
    })

    res.send(query)
})

var consCatequizandos = router.get('/cons-catequizandos',async(req,res)=>{
    var query = await models.catequizandos.findAll({
        raw:true,
        attributes:['id','idTurma','nome','nascimento','faltas','ativo','turma','faltaEncontro','faltaMissa']
    })
    res.send(query)
})


//login

var login = router.get('/login',async(req,res)=>{
    let query = await models.catequistas.findOne({
        raw:true,
        atttributes:['id', 'nome', 'nascimento', 'ativo']
    })
    res.send(query)
})

module.exports = {registrarTurma, consTurma, cadEncontro, login, consEncontros, consCatequizandos}
