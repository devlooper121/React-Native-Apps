import React, { useReducer } from "react";
import { StyleSheet, View, Button, FlatList } from 'react-native';
import ColorCounter from "../components/ColorCounter";
//util
const between = (num, start, end) => {
  return num > start && num < end;
}
// reducer function
const reducer = (state, action) => {
  // state == {red: number, green:number, blue: number, changeRate: number}
  // action == { name: 'red | 'green' | 'blue' , change: 1 | -1, changeRate: number }

  switch (action.name) {
    case 'RED':
      if (!between(state.red + action.change * state.changeRate, 0, 255))
        return state;
      return { ...state, red: state.red + action.change * state.changeRate };
    case 'GREEN':
      if (!between(state.green + action.change * state.changeRate, 0, 255))
        return state;
      return { ...state, green: state.green + action.change * state.changeRate };
    case 'BLUE':
      if (!between(state.blue + action.change * state.changeRate, 0, 255))
        return state;
      return { ...state, blue: state.blue + action.change * state.changeRate };
    case 'INC':
      return { ...state, changeRate: action.changeRate };
    default:
      return state;
  }
}

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0, changeRate: 10 });
  const color = `rgb(${state.red}, ${state.green}, ${state.blue})`;
  return (
    <View style={styles.viewStyle}>
      <ColorCounter
        title="Red"
        value="RED"
        dispatchFunction={dispatch}
      />
      <ColorCounter
        title="Green"
        value="GREEN"
        dispatchFunction={dispatch}
      />
      <ColorCounter
        title="Blue"
        value="BLUE"
        dispatchFunction={dispatch}
      />
      <View style={{ ...styles.box, backgroundColor: color }} />

    </View>
  )
}
const getRandomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
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