/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { FlatList, Text, View } from 'react-native';
import ApiCalls from './components/ApiCalls';
import ListApiCalls from './components/ListApiCalls';
import FlatListApi from './components/FlatListApi';



function App(): React.JSX.Element {
  
  
  return (
   //<ApiCalls />
  // <ListApiCalls />
  <FlatListApi />
   
  );
}


export default App;
