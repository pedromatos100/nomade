import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../assets/css/Css'

export default function Login({navigation}){

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const entrar = () =>{
    navigation.reset({
      index:0,
      routes: [{name: "Dashboard"}]
    })
  }

  return (
    <View style={styles.container}>
      <Text h3>Nômade</Text>
      <Input
      placeholder="E-mail"
      leftIcon={{ type: 'font-awesome', name: 'envelope' }}
      onChangeText={value => setEmail(value) }
      keyboardType="email-address"
      />
      <Input
      placeholder="Senha"
      leftIcon={{ type: 'font-awesome', name: 'lock' }}
      onChangeText={value => setPassword(value) }
      secureTextEntry={true}
      />
     <Button 
        icon={
          <Icon
          name="check"
          size={15}
          color="white"
          />
        }
        title=" Entrar"
        buttonStyle={specificStyle.button}
        onPress={() => entrar()}
        />
        <Button 
        icon={
          <Icon
          name="user"
          size={15}
          color="white"
          />
        }
        title=" Cadastrar"
        buttonStyle={specificStyle.button}
        onPress={() => entrar()}
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
  }
})



