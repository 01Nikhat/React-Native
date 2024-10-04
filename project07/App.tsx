/* eslint-disable */

import React from 'react';

import {Text, View, StyleSheet, ScrollView} from 'react-native';

import FlatListComponent from './components/FlatListComponent';
import MapList from './components/MapList';

/**
 * 1) making flatList (component: FlatListComponent)
 * 2) making list using map function
 */

const App = () => {

  return (
    <View style={{flex: 1}}> 
    {/*Parent View with flex: 1; If the parent View or the FlatListComponent is taking up the entire screen, it can cause the ScrollView to not have enough space to scroll. */}

      <FlatListComponent/>
      <MapList/>
      
    </View>
  );
};


export default App;