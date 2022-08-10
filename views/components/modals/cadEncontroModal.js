import React, {useEffect, useState} from 'react';
import { CheckBox, Alert, Modal, Pressable, View, TouchableOpacity, Text, TextInput, FlatList} from "react-native" 
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import config from "../../../config/config.json"
import axios from "axios"
import styles from "../../../assets/style/styles"
import modalStyles from "../../../assets/style/modalStyle"



export default function CadEncontroModal(){

  
    const [modalVisible, setModalVisible] = useState(false);
    const [descricao, setDescricao] = useState(null);
    const [catequizandos, setcatequizandos] = useState(null);
    const [isSelected, setSelection] = useState([]);
        
    var catequizList

    async function registrarEncontro(){
        let reqs = config.urlRootNode+'cad-encontro'
        try{
            axios.post(reqs, {
                idTurma: 2,
                descricao:descricao,
            })
        }
        catch(error){
            console.log('Erro:'+error)
        }
    }

    async function consCatequizandos(){
        let reqs = config.urlRootNode+'cons-catequizandos'
        try{
            axios.get(reqs).then((response)=>{
                catequizList = response.data
                setcatequizandos(catequizList)
            })
        }
        catch(error){
            console.log('Erro'+error)
        }
    }


    return(
            <View style={modalStyles.centeredView} 
            onLayout={consCatequizandos}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal Fechou");
                    setModalVisible(!modalVisible);
                    }}
                >
                    <View style={modalStyles.centeredView}>
                    <View style={modalStyles.modalView}>

                        <Text>Registrar Encontro</Text>
                        <TextInput 
                        placeholder="Descrição do Encontro" 
                        onChangeText={setDescricao}/>

                        <FlatList
                        data={catequizandos}
                        keyExtractor ={(item)=>item.id}
                        renderItem={({item})=>
                        <View>
                            <Pressable>
                                <Text><CheckBox
                                value={isSelected}
                                onValueChange={setSelection}
                                />
                                {item.nome}</Text>
                            </Pressable>
                        </View>
                        }
                        />



                        <TouchableOpacity style={styles.button}
                        onPress={registrarEncontro}>
                            <Text 
                            style={modalStyles.textStyle}>
                                Registrar Encontro
                            </Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                        style={[styles.button]}
                        onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={modalStyles.textStyle}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                </Modal>

                <TouchableOpacity
                    style={[styles.button]}
                    onPress={() =>setModalVisible(true)}
                >
                    <Text style={styles.text}>Registrar Encontro</Text>
                </TouchableOpacity>
            
            </View>
        )
}

