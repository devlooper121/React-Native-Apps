import React from "react";
import { Text, StyleSheet, View, Image } from 'react-native';

const ImageDetail = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Image style={{width: 100, aspectRatio: 1, height: 100}} source={props.imageSource} />
      <Text style={styles.textStyle} >{props.title}</Text>
      <Text style={styles.textStyle} >Image Score - {props.score}</Text>
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

export default ImageDetail;