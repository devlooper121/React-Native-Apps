import React from "react";
import { View, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return (
        <View style={styles.container}>
            <ImageDetail
                score={9} 
                title={"Forest"} 
                imageSource={require('../../assets/image/forest.jpg')}
            />
            <ImageDetail 
                title={"Beach"}
                score={7} 
                imageSource={require('../../assets/image/beach.jpg')}/>
            <ImageDetail 
                title={"Mountain"}
                score={10}
                imageSource={require('../../assets/image/mountain.jpg')}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: '#ffa',
        height: 800
    }
})

export default ImageScreen;

