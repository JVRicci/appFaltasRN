const express = require('express');
const router = express.Router();
const db = require("../config/config.json");
const { query, application } = require('express');
const models = require('../models')

var registrarTurma = router.post('/registrarTurma',async(req,res)=>{

    let cadastrar = await models.turmas.create({
        idCatequista : req.body.idC,
        diaencontro : req.body.dia,
        formacao : req.body.forma
    })

})

var consTurma = router.get('/cons-turma', async(req,res)=>{
    let query = await models.turmas.findAll({
        raw: true,
        attributes:['idCatequista', 'diaencontro', 'formacao']
    })
    res.send(query)
})


module.exports = {registrarTurma, consTurma}
