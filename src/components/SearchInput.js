import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';

export const SearchInput = ({ placeholder, onSubmitText }) => {

    const [newlocation, setNewlocation] = useState("");
    const updateLocation = (l) => {
        l? setNewlocation(l) : setNewlocation("Wardha")
    }
    return (
        <View style={styles.container}>
      <TextInput 
      style={styles.textInput}
      placeholder={placeholder}
      placeholderTextColor={'white'}
      onChangeText={(l)=>{updateLocation(l)}}
      onEndEditing={()=>{onSubmitText(newlocation)}}
      />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
        height: 40,
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