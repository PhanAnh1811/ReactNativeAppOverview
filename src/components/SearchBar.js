import React from 'react'
import { View, TextInput,StyleSheet } from 'react-native'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome'

export default function SearchBar({term,onTermChange,onTermSubmit}) {
    return (
        <View style={{alignItems:'center'}}>
                <AwesomeIcon
                onPress={onTermSubmit}
                 style={{right:120,top:36,zIndex:99}} name="search" size={30} color="#fff" />
                <TextInput
                 placeholder="Search" style={Style.searchButton} 
                 value={term}
                 onChangeText={onTermChange}
                 onEndEditing={onTermSubmit}
                 />
            </View>
    )
}

const Style = StyleSheet.create({
    searchButton:{
        width:300,
        height:40,
        borderWidth:1,
        backgroundColor:'gray',
        paddingLeft:100,
        borderRadius:8,
        borderColor:'white'
    }
})