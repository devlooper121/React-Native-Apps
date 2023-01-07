import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button } from 'react-native';

const BoxModelScreen = () => {
  return (
    <>
    <View style={styles.viewStyle} >
        <Text style={styles.textStyle1}>deg 1</Text>
        <Text style={styles.textStyle2}>deg 2</Text>
        <Text style={styles.textStyle3}>deg 3</Text>
        <Text style={styles.textStyle4}>X</Text>
    </View>
    <View style={styles.viewStyle2} >
        <Text style={styles.textStyle5}>deg 5</Text>
        <Text style={styles.textStyle6}>deg 6</Text>
        <Text style={styles.textStyle7}>deg 7</Text>
        <View style={styles.textStyle8}></View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    padding: 12,
    borderWidth: 1,
    flexDirection: 'column',
    height: 200,
  },
  textStyle1: {
    borderWidth: 1,
    borderColor: 'red',
    fontSize: 20,
    flex: 1
  },
  textStyle2: {
    borderWidth: 1,
    borderColor: 'red',
    fontSize: 20,
    flex: 2,
    alignSelf: 'center'
  },
  textStyle3: {
    borderWidth: 1,
    borderColor: 'red',
    fontSize: 20,
    flex: 1,
    left: 11
  },
  textStyle4: {
    borderWidth: 1,
    borderColor: 'red',
    fontSize: 20,
    flex: 1,
    position: 'absolute',
    padding: 10,
    backgroundColor: '#f0f',
    ...StyleSheet.absoluteFill,
  },
  viewStyle2: {
    padding: 12,
    borderWidth: 1,
    flexDirection: 'row',
    height: 200,
    justifyContent: "space-between"
  },
  textStyle5: {
    borderWidth: 1,
    borderColor: 'red',
    fontSize: 20,
    backgroundColor: '#f0a',
    width: 50,
    height:50
  },
  textStyle6: {
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 20,
    backgroundColor: '#aaf',
    width: 50,
    height:50
  },
  textStyle7: {
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 20,
    backgroundColor: '#afa',
    width: 50,
    height:50,
    top: 50
  },
  textStyle8: {
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 20,
    backgroundColor: '#faa',
    width: 50,
    height:50
  }
});

export default BoxModelScreen;