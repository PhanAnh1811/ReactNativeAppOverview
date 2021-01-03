import React from 'react'
import { Image, Text, View,StyleSheet } from 'react-native'

export default function ResultsDetail({result}){
        return (
            <View>
                <Image style={Style.image} source={{uri:result.image_url}}/>
                <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
            </View>
        )
}

const Style=StyleSheet.create({
    image:{
        width:150,
        height:150,
        margin:20
    }
})