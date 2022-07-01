import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Clipboard, ScrollView, Alert } from 'react-native';
import Head from './src/components/head/head';
import Show_url from './src/components/show_link/show_link';
import Form from './src/components/form/form';
export default function App() {
  const [link, setLink] = useState('')
  const [input, setInput] = useState('')

  const axios = require('axios')

  async function save() {

    try {
      const { data } = await axios.post('https://curtolink.herokuapp.com/savelink', ({ link: input }))
      setLink('https://curtolink.herokuapp.com/' + data.link);
      console.log(data.link)
      setInput('')
    } catch{
      alert('servidor indisponivel')
    }
  }

  function verificar_link() {
    var posicao_do_ponto = input.lastIndexOf('.')
    var str_dps_ponto = input.slice(posicao_do_ponto + 1)

    if (posicao_do_ponto !== -1 && input !== "" && str_dps_ponto.length >= 1) {
      save()
    } 
    
    else if(input == ''){
      Alert.alert(
        "Nenhum link",
        "Para encurtar, você precisa adicionar um link primeiro",
        
      )
    }
     else {
      Alert.alert(
        "Link inválido",
        "O link " + link + " não é válido.",
      )
      setInput('')
    }
  }

  const copy = () => {
    Clipboard.setString(link);
    Alert.alert(
      "link copiado",
      "Seu link foi copiado com sucesso"
    )
    
  }

  return (

    <View style={styles.container}>
      <Head />
      <ScrollView>
        <Form onClick={verificar_link} Input={setInput} value={input} />
        <Show_url value={link} onClick={copy} />
      </ScrollView>
      <StatusBar style="light" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#182625',
  },
});
