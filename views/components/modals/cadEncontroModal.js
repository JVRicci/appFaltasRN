import React, {useEffect, useState} from 'react';
import { Alert, Modal, Pressable, View, TouchableOpacity, Text, TextInput, FlatList} from "react-native" 
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import config from "../../../config/config.json"
import axios from "axios"
import styles from "../../../assets/style/styles"
import modalStyles from "../../../assets/style/modalStyle"



export default function CadEncontroModal(){

  
  const [modalVisible, setModalVisible] = useState(false);
  const [descricao, setDescricao] = useState(null)
  async function registrarEncontro(){
    let reqs = config.urlRootNode+'cad-encontro'
        axios.post(reqs, {
            idTurma: 2,
            descricao:descricao,
        })
  }


  return(
        <View style={modalStyles.centeredView}>
            <Modal
                animationType="slide"
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

                      <TouchableOpacity style={styles.button}>
                          <Text onPress={registrarEncontro}
                          style={modalStyles.textStyle}>
                            Registrar Encontro
                            </Text>

                      </TouchableOpacity>
                      <Pressable
                      style={[styles.button]}
                      onPress={() => setModalVisible(!modalVisible)}
                      >
                      <Text style={modalStyles.textStyle}>Fechar</Text>
                      </Pressable>
                  </View>
                </View>
            </Modal>

            <Pressable
                onPress={() =>setModalVisible(true)}
            >
                <Text >Registrar Encontro</Text>
            </Pressable>
        
        </View>
    )
}

