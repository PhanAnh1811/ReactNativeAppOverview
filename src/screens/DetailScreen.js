import React from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';

const DATA = [
    {
        id: 1,
        image: require('../asserts/food.jpg'),
    },
    {
        id: 2,
        image: require('../asserts/food_1.jpg'),
    },
    {
        id: 3,
        image: require('../asserts/food_2.jpg'),
    },
];

export default function DetailScreen() {
    return (
        <View>
            <FlatList
                data={DATA}
                keyExtractor={e => e.id}
                renderItem={({ item }) => {
                    return (
                        <Image source={item.image} style={Style.imageView} />
                    )
                }}
            />
        </View>
    )
};

const Style = StyleSheet.create({
    imageView: {
        margin:20
    },
});
