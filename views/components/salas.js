import React, {useEffect, useState} from 'react';
import {Image, View, TouchableOpacity, Text, TextInput, FlatList} from "react-native" 
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import config from "../../config/config.json"
import axios from "axios"
import styles from "../../assets/style/styles"


export default function Salas({navigation}){

    const [descricao, setDescricao] = useState(null)
    
    async function registrarEncontro(){
        let reqs = config.urlRootNode+'cad-encontro'
            axios.post(reqs, {
                idTurma: 2,
                descricao:descricao,
            })
    }

  

    return (
        
        <View>
            <TouchableOpacity>
                <Text>Tela de Cadastro</Text>
            </TouchableOpacity>

            <TextInput 
                placeholder="Descrição do Encontro" 
                onChangeText={setDescricao}/>

            <TouchableOpacity>
                <Text onPress={registrarEncontro}>Cadastrar</Text>
            </TouchableOpacity>



            
            

        </View>
    );
}


/*

  async function consultaEncontro(){
        let rotaCons = config.urlRootNode+'cons-encontro'
        axios({
            method: 'get',
            url:rotaCons,
        }).then((response)=>{
            resultados =response.data

            setConsTurma(resultados)
            
        })
        console.log(consTurma)
    }








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
*/