import React, { useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const Van = () => {
  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://pbs.twimg.com/profile_images/954662123958947840/vq0XYxxq_400x400.jpg'}} 
             style={styles.image}
      />
      <Text style={styles.text}>Hello World.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'green',
    fontSize: 30
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2
  }
});

export default Van;