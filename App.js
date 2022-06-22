import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './assets/css/Css';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import Cadastro from './views/Cadastro';



const Stack = createNativeStackNavigator();

function Mystack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
    
  );
}

export default function App(){
  return(
    <NavigationContainer>
      <Mystack/>
    </NavigationContainer>
  );
}

