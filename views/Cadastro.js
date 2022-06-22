import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../assets/css/Css'

export default function Cadastro({navigation}){

  const [email, setEmail] = useState(null)
  const [nome, setNome] = useState(null)
  const [cpf, setCpf] = useState(null)
  const [telefone, setTelefone] = useState(null)

  const salvar = () => {
      console.log("Salvou")
  }
  
  return (
    <View style={[styles.container, specificStyle.specificContainer]}>
      <Text h3>Cadastre-se</Text>
      <Input
      placeholder="E-mail"
      onChangeText={value => setEmail(value) }
      keyboardType="email-address"
      />

<Input
      placeholder="Nome"
      onChangeText={value => setNome(value) }
      />

<Input
      placeholder="CPF"
      onChangeText={value => setCpf(value) }
      keyboardType="number-pad"
      returnKeyType="done"
      />

<Input
      placeholder="Telefone"
      onChangeText={value => setTelefone(value) }
      keyboardType="phone-pad"
      returnKeyType="done"
      />

        <Button 
        icon={
          <Icon
          name="check"
          size={15}
          color="white"
          />
        }
        title=" Salvar"
        buttonStyle={specificStyle.button}
        onPress={() => salvar()}
        />            
      </View>
  );
}

const specificStyle = StyleSheet.create({
  specificContainer: {
    backgroundColor: "#fff"
  },
  button: {
    width:"100%",
    marginTop:10
  },
})