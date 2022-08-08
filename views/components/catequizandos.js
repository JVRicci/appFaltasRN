import React, {useEffect, useState} from 'react';
import {Image, View, TouchableOpacity, Text, TextInput, FlatList} from "react-native" 
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import config from "../../config/config.json"
import axios from "axios"
import styles from "../../assets/style/styles"

export default function Catequizandos({navigation}){

    const [nome, setNome] = useState(null) 
    return(
        <View>
            <Text>nome</Text>
        </View>
    )
}