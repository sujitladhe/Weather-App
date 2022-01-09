import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';

export const SearchInput = ({ placeholder }) => {
    return (
        <View style={styles.container}>
      <TextInput 
      style={styles.textInput}
      placeholder={placeholder}
      placeholderTextColor={'white'}
      />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
        height: 40,
        width: 300,
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        borderRadius: 4
    },
    textInput: {
        color: 'white',
        flex: 1
    }
    ,
  
  });