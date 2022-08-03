import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native';
import {Home, Cadastro} from './views'
import styles from "./assets/style/mainStyle"

export default function App() {

  const Stack = createStackNavigator();
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator >
        <Stack.Screen name="Inicio"
        component={Home}
        
      />
        <Stack.Screen name="Cadastro" component={Cadastro} ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
