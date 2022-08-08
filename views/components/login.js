import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

export default function login() {

  const [nome, setNome] = useState(null)
  const [senha, setSenha] = useState(null)


  return (
    <View>
      <Text>Login</Text>
      <TextInput
      onChangeText={setNome}
      />
      <Text>Senha</Text>
      <TextInput
      onChangeText={setSenha}
      />

      <TouchableOpacity>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}