import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button , TouchableOpacity} from 'react-native';


import * as labels from './labels';

export default function App() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [usuarios, setUsuarios] = useState([]); // Para a futura lista

  const cadastrarUsuario = () => {
    if (nome && telefone) {
      const novoUsuario = { nome, telefone };
      setUsuarios([...usuarios, novoUsuario]);
      setNome('');
      setTelefone('');
      alert(`Usuário ${nome} cadastrado! `);
    } else {
      alert('Por favor, preencha nome e telefone.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{labels.cadastroUsuario}</Text>

      
        <View style={styles.inputRow}>
          <Text style={styles.label}>{labels.nome}</Text>
          <TextInput
            style={styles.input}
            value={nome}
            onChangeText={setNome}
            
          />
        </View>

        <View style={styles.inputRow}>
          <Text style={styles.label}>{labels.telefone}</Text>
          <TextInput
            style={styles.input}
            value={telefone}
            onChangeText={setTelefone}
            
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.buttonContainer}>
  <TouchableOpacity style={styles.button} onPress={cadastrarUsuario}>
    <Text style={styles.buttonText}>{labels.cadastrar.toUpperCase()}</Text>
  </TouchableOpacity>
</View>
      

      <View style={styles.separator} />

      <View style={styles.listHeader}>
        <Text style={[styles.listItemText, { fontWeight: 'bold' }]}>{labels.nome}</Text>
        <Text style={[styles.listItemText, { fontWeight: 'bold' }]}>{labels.telefone}</Text>
      </View>

      {usuarios.map((usuario, index) => (
        <View key={index} style={styles.listItem}>
          <Text style={styles.listItemText}>{usuario.nome}</Text>
          <Text style={styles.listItemText}>{usuario.telefone}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'stretch',
    backgroundColor: '#f8f8f8',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
        color: '#333',

    marginBottom: 30,
    textAlign: 'center',
  },
  
  buttonContainer: {
    width: 200, 
    alignSelf: 'center',
    marginTop: 20, 
  },
  button: {
    backgroundColor: '#e0f2f7', 
    borderWidth: 1,
    borderColor: '#90caf9', 
    borderRadius: 5,       
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold', 
  },

  inputRow: {
    flexDirection: 'row', 
    alignItems: 'center',  
    marginBottom: 20,
  },
  label: {
    fontSize: 19,
    marginBottom: 10,
    width: 80, 
    marginRight: 10, 
    color: '#333',
    textAlign: 'left', 
  },
  input: {
    flex: 1, 
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    fontSize: 16,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginVertical: 20,
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 3,
  },
  listItemText: {
    fontSize: 16,
  },
});