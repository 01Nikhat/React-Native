/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  
  const user = [
    {id:1,
     name: "nikhat"
    },
    {id:2,
      name: "naheed"
     },
     {id:3,
      name: "naaz"
     },
     {id:4,
      name: "naureen"
     }
  ]

  return (
    <View>
      <Text style={{fontSize:31}}>List With Flat List</Text>
    </View>
 
  );
}


export default App;
