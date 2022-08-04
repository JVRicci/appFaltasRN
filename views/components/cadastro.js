import React, {useEffect, useState} from 'react';
import {Image, View, TouchableOpacity, Text, TextInput} from "react-native"
import config from "../../config/config.json"
//import styles from "../../assets/style/styles"

export default function Cadastro({navigation}){

    const [idCatequista, setIdCatequisa] = useState(null)
    const [diaencontro, setDiaencontro] = useState(null)
    const [formacao, setformacao] = useState(null)
    const [consTurma, setConsTurmas] = useState(null)

    async function registrarTurma(){
        let reqs = await fetch(config.urlRootNode+'registrarTurma',{
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                idC: idCatequista,
                dia:diaencontro,
                forma:formacao
            })
            
        })
    }

    async function consulta(){
        let query = await fetch(config.urlRootNode+'cons-turma',{
            method: 'GET',
            headers:{
                'Accept': 'application/json',
                "Content-Type": "application/json",
            },
        })

        let resp = await query.json()
        setConsTurmas(resp.formacao) 
        console.log(consTurma)
    }

    return (
        <View >
            <TouchableOpacity>
                <Text>Tela de Cadastro</Text>
            </TouchableOpacity>

            <Text> {idCatequista} - {diaencontro} - {formacao}</Text>

            <TextInput 
                placeholder="Digite o ID" 
                onChangeText={setIdCatequisa}/>

            <TextInput
                placeholder="Digite o dia de encontro" 
                onChangeText={setDiaencontro}/>

            <TextInput 
                placeholder="Digite a formacao" 
                onChangeText={setformacao}/>

            <TouchableOpacity>
                <Text onPress={registrarTurma}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text onPress={consulta}>Consultar</Text>
            </TouchableOpacity>

            {consTurma &&
            <Text>{consTurma}</Text>
            }
            
            

        </View>
    );
}