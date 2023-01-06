import React from "react";
import { Text, StyleSheet, View, Button } from 'react-native';

const ColorCounter = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle} >{props.color}</Text>
      <Button
        title={`More ${props.color}`}
        onPress={() => props.setColor(value => {
          if (value + props.increaseBy < 255) {
            return value + props.increaseBy
          }
          return value;
        })}
      />
      <Button
        title={`Less ${props.color}`}
        onPress={() => props.setColor(value => {
          if (value - props.increaseBy > 0) {
            return value - props.increaseBy
          }
          return value;
        })}
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