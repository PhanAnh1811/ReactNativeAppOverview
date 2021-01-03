import React from 'react';
import { View, FlatList, StyleSheet,Image,Text } from 'react-native';
import ResultsDetail from '../components/ResultsDetail'


export default function DetailScreen(data) {
    const item = data.route.params.product;

    return (
        <View>
           <Image style={Style.image} source={{uri:item.image_url}}/>
           <Text>{item.rating} Stars - {item.review_count} Reviews</Text>
        </View>
    )
};

const Style = StyleSheet.create({
    image:{
        width:100,
        height:100,
        margin:30
    },
});
