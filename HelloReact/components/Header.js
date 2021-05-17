import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const Header = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

Header.defaultProps = {
    title: 'My Books List'
}
  
const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: 'darkgreen'
    },
    text: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center'
    }
})

export default Header;