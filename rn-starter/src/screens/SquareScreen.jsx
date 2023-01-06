import React, { useState } from "react";
import {StyleSheet, View, Button, FlatList } from 'react-native';
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const color = `rgb(${red}, ${green}, ${blue})`;
  return (
    <View style={styles.viewStyle}>
      <ColorCounter
        color="Red"
        setColor={setRed}
        increaseBy={10}
      />
      <ColorCounter
        color="Green"
        setColor={setGreen}
        increaseBy={10}
      />
      <ColorCounter
        color="Blue"
        setColor={setBlue}
        increaseBy={10}
      />
      <View style={{...styles.box, backgroundColor: color}}/>
      
    </View>
  )
}
const getRandomColor = () => {
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const opacity = Math.floor(Math.random());
    return `rgb(${red}, ${green}, ${blue})`;
}
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    paddingBottom: 40
  },
  viewStyle: {
    padding: 12
  },
  box: {
    width: 100,
    height: 100,
    margin: 10,
  }
});

export default SquareScreen;