import React from 'react';
import {Text} from 'react-native'
import MainNavigation from './src/navigations/MainNavigation';

const DATA=[
  {
    id:1,
    image:require("./src/asserts/food_1.jpg")
  },
];

const App = () => {
  return (
      <MainNavigation/>
  );
};


export default App;