import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button } from 'react-native';
// reducer function
const reducer = (state, action) => {
  // state = {count:number}
  // action = {type:change_count, payload: value}
  switch (action.type){
    case "CHANGE_COUNT":
      return { ...state, count: state.count + action.payload};
    default:
      return state;
  }
}

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {count:0});
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle} >Counter Value : {state.count}</Text>
      <Button
        title="Increse"
        onPress={() => dispatch({type: "CHANGE_COUNT", payload: 1})}
      />
      <Text/>
      <Button
        title="Decrease"
        onPress={() => dispatch({type: "CHANGE_COUNT", payload: -1})}
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