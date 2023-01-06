import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from 'react-native';

const CounterScreen = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle} >Counter Value : {count}</Text>
      <Button
        title="Increse"
        onPress={() => setCount(count => count+1)}
      />
      <Text/>
      <Button
        title="Decrease"
        onPress={() => setCount(count => count-1)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    paddingBottom: 40
  },
  viewStyle: {
    padding: 12
  },
  nameStyle: {
    fontSize: 20
  }
});

export default CounterScreen;