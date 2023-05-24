import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function Form(){

  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleSubmit = () => {
    // Faça o que desejar com os dados (por exemplo, enviar para um servidor)

    // Limpar o formulário
    setEmail('');
    setNome('');
    setTelefone('');
  };

  return (
    <View>
      <Text>Email:</Text>
      <TextInput value={email}   onChangeText={setEmail} placeholder="Digite seu email"/>
      <Text>Nome:</Text>
      <TextInput  value={nome}  onChangeText={setNome}  placeholder="Digite seu nome"  />
      <Text>Telefone:</Text>
      <TextInput   value={telefone}     onChangeText={setTelefone}    placeholder="Digite seu telefone"   />
      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
};

