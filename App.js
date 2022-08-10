import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native';
import {Home, Salas, Catequizandos} from './views'
import styles from "./assets/style/mainStyle"

export default function App() {

  const Stack = createStackNavigator();
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator >
        <Stack.Screen options={{ 
          title: 'Bem Vindo(a)', 
          headerStyle:{backgroundColor: '#383838', textStyle:'#ffffff' },
          headerTitleStyle: { color: 'white'}
        }} name="Inicio"
      component={Home}
      />
        <Stack.Screen name="Salas"
        options={{ 
          title: 'Salas', 
          headerStyle:{backgroundColor: '#383838',},
          headerTitleStyle: { color: 'white'}
        }}
        
        component={Salas} ></Stack.Screen> 
        <Stack.Screen name="Catequizandos"
        option={{
          title: 'Catequizandos',
          headerStyle:{backgroundColor: '#383838',},
          headerTitleStyle: { color: 'white'}
        }} 
        component={Catequizandos} ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
