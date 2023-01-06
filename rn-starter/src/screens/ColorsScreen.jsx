import React, { useState } from "react";
import {StyleSheet, View, Button, FlatList } from 'react-native';

const c = 'rgb(0,23,100)';
const ColorsScreen = () => {
  const [colors, setColors] = useState([]);
  return (
    <View style={styles.viewStyle}>
      <Button
        title="Add Color"
        onPress={() => setColors(color => [...color, getRandomColor()])}
      />
      <FlatList
        data={colors}
        renderItem={({item}) => {
          return <View style={{...styles.box, backgroundColor: item}}/>
        }}
      />
      
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

export default ColorsScreen;