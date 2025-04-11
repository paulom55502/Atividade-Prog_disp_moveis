import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import * as labels from './labels';

export default function App() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [usuarios, setUsuarios] = useState([]);

  const cadastrarUsuario = () => {
    if (nome && telefone) {
      const novoUsuario = { nome, telefone };
      setUsuarios([...usuarios, novoUsuario]);
      setNome('');
      setTelefone('');
      alert('Usuário cadastrado com sucesso!');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{labels.cadastroUsuario}</Text>

      <Text>{labels.nome}</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder={labels.digiteSeuNome}
      />

      <Text>{labels.telefone}</Text>
      <TextInput
        style={styles.input}
        value={telefone}
        onChangeText={setTelefone}
        placeholder={labels.digiteSeuTelefone}
        keyboardType="phone-pad"
      />

      <Button title={labels.cadastrar} onPress={cadastrarUsuario} />

      <Text style={styles.listaTitulo}>{labels.listaDeUsuarios}</Text>
      <ScrollView style={styles.listaContainer}>
        {usuarios.map((usuario, index) => (
          <Text key={index} style={styles.itemLista}>
            {usuario.nome} - {usuario.telefone}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  listaTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  listaContainer: {
    flexGrow: 1,
    backgroundColor: 'white',
    padding: 10,
    borderColor: 'lightgray',
    borderWidth: 1,
  },
  itemLista: {
    fontSize: 16,
    marginBottom: 5,
  },
});