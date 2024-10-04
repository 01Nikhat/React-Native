/* eslint-disable */

import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  SectionList,
} from 'react-native';


/**
 * 1) Making dynamic Grid (component: Grid) --> <Grid/> is commented, to see it's use uncomment it and comment <LoopFlatList/>
 * 2) Component in Loop with FlatList (component: <LoopFlatList/>)
 * 3) Section List (component: <SectionListComponent/>)
*/
import Grid from './components/Grid';
import LoopFlatList from './components/LoofFlatList';
import SectionListComponent from './components/SectionListComponent';


const App = () => {
  
  return (
    /**If the parent View is meant to fill the whole screen, consider adding 
      flex: 1 to the outermost View. This ensures that the entire layout takes up the available space, and the grid will be scrollable if needed. */
    <View style={{flex: 1}}>

      <Grid/> 
      {/* <LoopFlatList/> */}
      {/* <SectionListComponent/> */}

    </View>
  );
};

export default App;