import React, { useState } from "react";
import { View, Image, Text, StyleSheet, FlatList } from "react-native";
import Header from './components/Header'
import ListItem from './components/ListItem'
import uuid from 'uuid-random';

/*const Van = () => {
  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://pbs.twimg.com/profile_images/954662123958947840/vq0XYxxq_400x400.jpg'}} 
             style={styles.image}
      />
      <Text style={styles.text}>Hello World.</Text>
    </View>
  )
}*/

const App = () => {

  const [items, setItems] = useState([
    {id: uuid(), text: 'HTML'},
    {id: uuid(), text: 'CSS'},
    {id: uuid(), text: 'JS'},
    {id: uuid(), text: 'PYTHON'}
  ])

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <FlatList data={items} 
            renderItem={({item}) => (<ListItem item={item} deleteItems={deleteItem}/>)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  },
  /*text: {
    color: 'green',
    fontSize: 30
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2
  } */ //for pre' van

})

export default App;