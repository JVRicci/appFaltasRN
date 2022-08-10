import React, {useEffect, useState} from 'react';
import { Alert, Modal, Pressable, View, TouchableOpacity, Text, TextInput, FlatList} from "react-native" 
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import config from "../../config/config.json"
import axios from "axios"
import styles from "../../assets/style/styles"
import CadEncontroModal from './modals/cadEncontroModal';
import EncontrosModal from './modals/encontrosModal';


export default function Salas({navigation}){

    
    const [turmas, setTurmas] = useState(null)

    var turmasList

    async function dadosTurma(){
        let reqs = config.urlRootNode+'cons-turma'
        axios.get(reqs).then((response) =>{
            turmasList = response.data
            setTurmas(turmasList)
        })
    }
  

    return (
       <Pressable style={styles.salasContainer} > 
        <View onLayout={dadosTurma} >
            

            <Text style={styles.textHeader}>Salas que você participa</Text>

            <View style={styles.consCatequizando}>
                <FlatList data={turmas}
                keyExtractor ={(item)=>item.id}
                renderItem={({item})=>
                    <TouchableOpacity style={styles.catequizandoCell} >
                        <Text style={styles.text}>Dia de Encontro: {item.diaencontro}</Text>
                        <Text style={styles.text}>Formação: {item.formacao}</Text>
                    </TouchableOpacity>
                }
                />
            </View>
            
            <View>
            <CadEncontroModal />
            </View>
            
            <View>
            <EncontrosModal />
            </View>
            
            
        </View>

</Pressable>
        
    );
}


/* 
npx sequelize-cli model:generate --name catequizandos --attributes idTurma:bigint,nome:string,nascimento:date,faltas:0,ativo:string,turma:string,faltaEncontro:int,faltaMissa:int


*/