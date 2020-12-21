import React from 'react';
import { Text, View, Button, FlatList, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome'

const DATA = [
    {
        id: 1,
        image: require('../asserts/food.jpg'),
        star: "4.5 stars",
        review: "3 views"
    },
    {
        id: 2,
        image: require('../asserts/food_1.jpg'),
        star: "3.5 stars",
        review: "3 views"
    },
    {
        id: 3,
        image: require('../asserts/food_2.jpg'),
        star: "3 stars",
        review: "3 views"
    },
];

export default function MainSrceen({ navigation }) {
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={{alignItems:'center'}}>
                <AwesomeIcon style={{right:120,top:36,zIndex:99}} name="search" size={30} color="#fff" />
                <TextInput placeholder="Search" style={Style.searchButton}></TextInput>
            </View>

            <View>
                <Text style={Style.styleText}>Cost Effective</Text>
                <FlatList
                    horizontal
                    data={DATA}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={e => e.id}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                                <View style={Style.iamgeView}>
                                    <Image source={item.image} />
                                    <Text>{item.star}-{item.review}</Text>
                                </View>
                            </TouchableOpacity>

                        )
                    }}
                />
            </View>


            <View>
                <Text style={Style.styleText}>Bit Pricer</Text>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={DATA}
                    keyExtractor={e => e.id}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                                <View style={Style.iamgeView}>
                                    <Image source={item.image} />
                                    <Text>{item.star}-{item.review}</Text>
                                </View>
                            </TouchableOpacity>

                        )
                    }}
                />
            </View>

            <View>
                <Text style={Style.styleText}>Big Spender!</Text>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={DATA}
                    keyExtractor={e => e.id}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                                <View style={Style.iamgeView}>
                                    <Image source={item.image} />
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>

        </ScrollView>
    )
}

const Style = StyleSheet.create({
    iamgeView: {
        marginLeft: 20
    },
    styleText: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 20
    },
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