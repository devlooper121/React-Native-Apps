import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.viewStyle}>
      <TextInput
        style={styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={newText => setName(newText)}
      />
      <Text style={styles.nameStyle}>Your name is: {name}</Text>
      <TextInput
        style={styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={newText => setPassword(newText)}
      />
      {password.length < 8 && <Text style={styles.errorStyle}>Password should be 8 char long</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  inputStyle: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    fontSize: 20
  },
  viewStyle: {
    padding: 12
  },
  nameStyle: {
    fontSize: 20
  },
  errorStyle: {
    fontSize: 12,
    color: 'red'
  }
});

export default TextScreen;