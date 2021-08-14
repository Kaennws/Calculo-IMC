  import React, { useState } from 'react';
  import { View, Text, StyleSheet,TextInput, TouchableOpacity} from 'react-native';

  export default function App(){
    const [peso, setPeso] = useState ('');
    const [altura, setAltura] = useState ('');

    function handleSubmit(){
      const alt = altura / 100;
      const imc = peso / (alt*alt);

      if(imc < 18.6){
        alert('Você está abaixo do peso: ' + imc.toFixed(2));
      }
      else if(imc < 24.9){
        alert('Pesso ideal: ' + imc.toFixed(2));
      }
      else if(imc < 34.9){
        alert('Acima do Peso! ' + imc.toFixed(2));
      }
      
    }

    return(
      <View style={styles.container}>
        <Text style={styles.title}>Calcule seu IMC</Text>

        <TextInput
        style={styles.input}
        value={peso}
        anChangeText={e => setPeso(e.target.value)}
        placeholder=" Peso (kg) "
        keyboardType="numeric"
        />   
         <TextInput
        style={styles.input}
        value={altura}
        anChangeText={e => setAltura(e.target.value)}
        placeholder=" Altura (Cm) "
        keyboardType="numeric"
      />      
        <TouchableOpacity style={styles.buttom}
        onPress={handleSubmit}>
         <Text style={styles.buttomText}>Calcular</Text> 
          </TouchableOpacity>  
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#1E90FF',
   
    },
    title:{
      textAlign: 'center',
      marginTop: 30,
      fontSize: 30,
    },
      input:{
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        margin: 15,
        padding: 10,
        fontSize: 23,

      },
      buttom: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        padding: 10,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        },
        buttomText:{
          fontSize: 30,
        },
    });