/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View,} from 'react-native';
import Buttons from './components/Buttons';
import Loader from './components/Loader';
import DynamicRadioButton from './components/DynamicRadioButton';
import ModalComponent from './components/ModalComponent';



function App(): React.JSX.Element {

  return (
    <View >
      {/* <Buttons /> */}
     {/* <Loader /> */}
      { /* <DynamicRadioButton /> */}
      {/* <Loader /> */}
      <ModalComponent />
    </View>
  );
}



export default App;
