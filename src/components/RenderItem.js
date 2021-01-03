import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import ResultDetail from '../components/ResultsDetail';

export default function RenderItem({ DATA, title, navigation }) {
    return (
        <View style={Style.container}>
            <Text style={Style.headerText}>{title}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={DATA}
                keyExtractor={e => e.id}
                renderItem={({ item }) => { 
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Detail', { product: item })}>
                                <ResultDetail result={item}/>
                        </TouchableOpacity>

                    )
                }}
            />
        </View>
    )
};

const Style = StyleSheet.create({
    container:{
        marginBottom:30,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 20
    },
})
