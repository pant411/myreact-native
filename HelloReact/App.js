import React, { useState } from "react";
import { View, Image, Text, StyleSheet, FlatList, Alert } from "react-native";
import Header from './components/Header'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'
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

  const addItem = (text) => {
    if(!text){
      Alert.alert('Error','กรุณาใส่ข้อมูล', {text: 'OK'});
    }
    else{
      setItems(prevItems => {
        return [{id: uuid(), text}, ...prevItems];
      })
    }      
  }

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} /> 
      <FlatList data={items} 
            renderItem={({item}) => (<ListItem item={item} deleteItem={deleteItem}/>)} />
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