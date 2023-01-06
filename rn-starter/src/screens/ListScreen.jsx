import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";


const ListScreen = () => {
  const movies = [
    {
      rating: 8.6,
      name: "Spider man 1"
    },
    {
      rating: 8.9,
      name: "Spider man 2"
    },
    {
      rating: 8.8,
      name: "Spider man 3"
    },
    {
      rating: 8.1,
      name: "Amazing spider man 1"
    },
    {
      rating: 9.1,
      name: "Amazing spider man 2"
    },
    {
      rating: 8.8,
      name: "Avengers 1"
    },
    {
      rating: 8.9,
      name: "Avengers 2"
    },
    {
      rating: 9.2,
      name: "Avengers 3"
    },
    {
      rating: 8,
      name: "Avengers 4"
    },
  ]
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={(movie) => movie.name}
        data={movies}
        renderItem={({item}) => {
          return (
            <>
              <Text style={styles.listItemStyle} >{item.name}</Text>
              <Text style={styles.imdbStyle}>IMDB rating - {item.rating} </Text>
            </>
          )
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    padding: 12
  },
  listItemStyle: {
    marginTop:40,
    marginRight: 40,
    fontSize: 20
  },
  imdbStyle: {
    backgroundColor: '#88f',
    fontSize: 14,
    color: '#fff',
    padding: 5,
    marginTop: 5,
    width: 120 
  }
});

export default ListScreen;