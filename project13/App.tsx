/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {View} from 'react-native';
import InstallPackage from './components/InstallPackage';
import PlatFormCheck from './components/PlatFormCheck';




function App(): React.JSX.Element {
 

  return (
   <View >
    {/* <PlatFormCheck /> */}
   <InstallPackage />
   </View>

  );
}

export default App;
