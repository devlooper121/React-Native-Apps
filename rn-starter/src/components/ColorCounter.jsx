import React from "react";
import { Text, StyleSheet, View, Button } from 'react-native';

const ColorCounter = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle} >{props.title}</Text>
      <Button
        title={`More ${props.title}`}
        onPress={() => props.dispatchFunction({name: props.value, change: 1}) }
      />
      <Button
        title={`Less ${props.title}`}
        onPress={() => props.dispatchFunction({name: props.value, change: -1}) }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
  viewStyle: {
    padding: 12
  },
  nameStyle: {
    fontSize: 20
  }
});

export default ColorCounter;