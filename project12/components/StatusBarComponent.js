/* eslint-disable */

import { useState } from 'react';

import {StyleSheet, View, Button, StatusBar} from 'react-native';


const StatusBarComponent = () => {
  
  const [hide, setHide] = useState(false);
  const [barStyle, setbarStyle] = useState('default');

  return (
    <View style={styles.main}>
      
      {/* barStyle can be 'dark-content', 'light-content' or 'default' which will be default of the system */}
      <StatusBar 
        backgroundColor= 'orange' 
        barStyle= {barStyle} 
        hidden={hide} //if true, status bar will disappear
      />


      <Button title='Toggle Status Bar' onPress={()=>setHide(!hide)} />
      <Button title='Update Style to dark-content' onPress={()=>setbarStyle('dark-content')} />
      <Button title='Update Style to light-content' onPress={()=>setbarStyle('light-content')} />
      <Button title='Update Style to default' onPress={()=>setbarStyle('default')} />

    </View>
  );
};


const styles = StyleSheet.create({

  main:{
    flex: 1,
    justifyContent: 'center', 
  },
});

export default StatusBarComponent;