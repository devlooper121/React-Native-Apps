import React from "react";
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {
  const name = "Dheeraj"
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle} >Greeting started with react native! </Text>
      <Text style={styles.nameStyle}>My name is {name}.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  viewStyle: {
    padding: 12
  },
  nameStyle: {
    fontSize: 20
  }
});

export default ComponentScreen;