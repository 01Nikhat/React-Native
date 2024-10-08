/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Pressable, View,} from 'react-native';
import Buttons from './components/Buttons';
import Loader from './components/Loader';
import DynamicRadioButton from './components/DynamicRadioButton';
import ModalComponent from './components/ModalComponent';
import PressableComponent from './components/PressableComponent';
import StatusBarComponent from './components/StatusBarComponent';



function App(): React.JSX.Element {

  return (
    <View >
      {/* <Buttons /> */}
     {/* <Loader /> */}
      { /* <DynamicRadioButton /> */}
      {/* <Loader /> */}
      {/*<ModalComponent /> */}
      {/* <PressableComponent /> */}
      <StatusBarComponent />
    </View>
  );
}



export default App;
