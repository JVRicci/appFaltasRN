import React, {useEffect, useState} from 'react';
import {Image, View, TouchableOpacity, Text, TextInput, FlatList} from "react-native" 
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import config from "../../config/config.json"
import axios from "axios"
import styles from "../../assets/style/styles"


export default function Cadastro({navigation}){

    const [idCatequista, setIdCatequisa] = useState(null)
    const [diaencontro, setDiaencontro] = useState(null)
    const [formacao, setformacao] = useState(null)
    
    const [consTurma, setConsTurma] = useState(null)
    var resultados


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
        let rotaCons = config.urlRootNode+'cons-turma'
        axios({
            method: 'get',
            url:rotaCons,
        }).then((response)=>{
            resultados =response.data

            setConsTurma(resultados)
            
        })
        console.log(consTurma)
    }

    return (
        
        <View>
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


            {consTurma!=null?
            <View style={styles.consCatequizando}>
                <FlatList data={consTurma} 
                //horizontal
                keyExtractor ={(item)=>item.id}
                renderItem={({item})=>
                <View>
                    <Text>ID: {item.idCatequista}</Text>
                    <Text>Dia de encontro: {item.diaencontro}</Text>
                    <Text>Formação: {item.formacao}</Text>
                </View>

                }
                />  
            </View>
            :
                        
            <View>
            <Text>
                Nenhum resultado
            </Text>
            </View>
            }
            

        </View>
    );
}
