import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#383838',
        marginTop:10,
        borderRadius:5,
        padding:10,
    },
    buttonHome:{
        backgroundColor:'#383838',
        marginTop:50,
        borderRadius:5,
        padding:10,
    },
    catequizandoCell:{
        margin:10,
        padding:5,
        borderRadius:5,
        backgroundColor:'#6b6b6b',
        alignItems: 'center',
    },
    consCatequizando:{
        backgroundColor:'#383838',
        height:'80',
        padding:20,
        alignItems:'center',
        borderRadius:15,
        width: '80%',
        height: '60%',
        marginLeft: 'auto',
        marginRight:'auto',
        overflow: 'scroll'
    },
    form:{
        marginTop:"25%",
        alignItems: 'center',
        padding:15,
        height:"85%",
        backgroundColor: '#6b6b6b',
        borderRadius:10
    },
    text:{
        color: '#FFFFFF',
    },


    textHeader:{
        padding:10,
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginLeft: 'auto',
        marginRight:'auto'
    },
    salasContainer:{
        backgroundColor:'#6b6b6b',
        height: '100%',
    }

    
})

export default styles