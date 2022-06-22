import React, {useState} from "react";
import { View, Text, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";


const slides = [
  {
    key:1,
    title: 'Verão',
    text: 'TOP 10 Verão',
    image: require('../assets/img/verao.png')
  },
  {
    key:2,
    title: 'Inverno',
    text: 'TOP 10 Inverno',
    image: require('../assets/img/inverno.png')
  },
  {
    key:3,
    title: 'Outono',
    text: 'TOP 10 Outono',
    image: require('../assets/img/outono.png')
  },
  {
    key:4,
    title: 'Primavera',
    text: 'TOP 10 Primavera',
    image: require('../assets/img/primavera.png')
  },
];

export default function Cadastro({navigation}){

  const sair = () => {
    navigation.navigate("Login")
  }

  function renderSlides({ item }){
    return(
      <View style={{flex:1}}>
        <Image
          source={item.image}
          style={{
            resizeMode: 'cover',
            height: '73%',
            width: '100%',
          }}
        />
        <Text 
        style={{
          paddingTop:25,
          paddingBottom:10,
          fontSize:23,
          fontWeight:'bold',
          color:'#009CFF',
          alignSelf:'center'
        }}>
          {item.title}
        </Text>

        <Text 
        style={{
          textAlign:'center',
          color:'#b5b5b5',
          paddingHorizontal:25,
          fontSize:15
        }}>
          {item.text}
        </Text>
      </View>
    )
  }

  return(
    <AppIntroSlider
      renderItem={renderSlides}
      data={slides}
      activeDotStyle={{
        backgroundColor: '#009CFF',
        width: 30 
      }}
      renderNextButton={ () => <Text style={{
        fontSize:18,
        color:'#009CFF'}}>Próximo</Text> }
      renderDoneButton={ () => <Text style={{
        fontSize:18,
        color:'#009CFF'}}>Sair!</Text> }
      onDone={() => sair() }
    />
  );
}

