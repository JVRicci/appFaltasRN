import React, {useEffect, useState} from 'react';
import { Alert, Modal, Pressable, View, TouchableOpacity, Text, TextInput, FlatList} from "react-native" 
import config from "../../../config/config.json"
import axios from "axios"
import styles from "../../../assets/style/styles"
import modalStyles from "../../../assets/style/modalStyle"



export default function encontrosModal(){

  
  const [modalVisible, setModalVisible] = useState(false);
  const [encontros, setEncontros] = useState(null)
  var  encList 


    async function consultaEnc(){
        setModalVisible(true)
        let reqs = config.urlRootNode+'cons-encontros'
        axios.get(reqs).then((response)=>{
            encList = response.data
            setEncontros(encList)
            
        })
    }


  return(
        <View style={modalStyles.centeredView}>
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

                        <Text>Encontros registrados para essa sala</Text>
                    
                        <FlatList data={encontros}
                            keyExtractor ={(item)=>item.id}
                            renderItem={({item})=>
                                <View>
                                    <Text>{item.descricao}</Text>
                                </View>
                            }
                        />


                        <Pressable
                        style={[styles.button]}
                        onPress={() => setModalVisible(!modalVisible)}
                        >
                        <Text style={modalStyles.textStyle}>Fechar</Text>
                        </Pressable>
                  </View>
                </View>
            </Modal>

            
            <TouchableOpacity
            style={[styles.button]}
                onPress={consultaEnc}
            >
                <Text style={styles.text}>Verificar encontros</Text>
            </TouchableOpacity>
        
        </View>
    )
}

