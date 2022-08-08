import React, {useEffect, useState} from 'react';
import { Alert, Modal, Pressable, View, TouchableOpacity, Text, TextInput, FlatList} from "react-native" 
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import config from "../../config/config.json"
import axios from "axios"
import styles from "../../assets/style/styles"
import modalStyles from "../../assets/style/modalStyle"
import CadEncontroModal from './modals/cadEncontroModal';


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
       <Pressable > 
        <View onLayout={dadosTurma} >
            

            <View style={styles.consCatequizando}>
                <FlatList data={turmas}
                keyExtractor ={(item)=>item.id}
                renderItem={({item})=>
                <View>
                    <Text>Dia de Encontro: {item.diaencontro}</Text>
                    <Text>Formação: {item.formacao}</Text>
                </View>
                }
                />
            </View>
            
            <View>
            <CadEncontroModal />
            </View>
            
            
        </View>

</Pressable>
        
    );
}
