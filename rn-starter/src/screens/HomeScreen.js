import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Component Demo"
        onPress={() => navigation.navigate('Component')}
      />
        <Text></Text>
      <Button 
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')}
      />
      <Text></Text>
      <TouchableOpacity onPress={() => navigation.navigate('Image')} >
        <Text style={styles.text}>Go to Image Demo</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity onPress={() => navigation.navigate('Counter')} >
        <Text style={styles.text}>Go to Counter Demo</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity onPress={() => navigation.navigate('Color')} >
        <Text style={styles.text}>Go to Color Demo</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity onPress={() => navigation.navigate('Square')} >
        <Text style={styles.text}>Go to Squarer Demo</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity onPress={() => navigation.navigate('Text')} >
        <Text style={styles.text}>Go to Text Demo</Text>
      </TouchableOpacity>
      <Text></Text>
      <Button 
        title="Go to Box model Demo"
        onPress={() => navigation.navigate('BoxModel')}
      />
    </View>
  )

};

const styles = StyleSheet.create({
  text: {
    marginStart: 125,
    width: 150,
    backgroundColor: '#a66',
    padding: 10,
    color: '#fff',
    fontWeight: 'bold'
  },
  container: {
    padding: 12
  }
});

export default HomeScreen;
