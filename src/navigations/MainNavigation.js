import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from '../screens/DetailScreen';
import MainSrceen from '../screens/MainSrceen';

const Stack = createStackNavigator();

function MyStack() {
    return(
    <Stack.Navigator>
        <Stack.Screen options={{title:'Bussiness Search'}} name="Main" component={MainSrceen} />
        <Stack.Screen   options={{title:'Fish City'}} name="Detail" component={DetailScreen} />
    </Stack.Navigator>
    );
};

export default () => {
    return (
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
};