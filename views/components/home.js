import React, {useEffect} from 'react';
import {Image, View, TouchableOpacity, Text} from "react-native"
import styles from "../../assets/style/styles"

export default function Home({navigation}){

    return (
        <View style={styles.form}>
            <TouchableOpacity 
            onPress={()=>navigation.navigate('Salas')}
            style={styles.button}>
                    <Text style={styles.text}>Salas</Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={()=>navigation.navigate('Catequizandos')}
                style={styles.button}>
                    <Text style={styles.text}>Catequizandos</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.button}>
                    <Text style={styles.text}>Catequistas</Text>
                </TouchableOpacity>
        </View>
    );
}