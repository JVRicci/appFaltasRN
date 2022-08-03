;
const express = require('express');
const router = express.Router();
const db = require("../config/config.json");
const { query, application } = require('express');

var registrarTurma = router.post('/registrarTurma',async(req,res)=>{
    console.log(req.body.idCatequista )
})

module.exports = {registrarTurma}
