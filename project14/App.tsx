/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import StackNavigation from './components/StackNavigation';
import StackNavStyle from './components/SatckNavStyle';
import PassDataStackNav from './components/PassDataStackNav';


function App(): React.JSX.Element {


  return (
   //<StackNavigation />
    //<StackNavStyle />
    <PassDataStackNav />
    
  
  );
}

const styles = StyleSheet.create({
 
});

export default App;
