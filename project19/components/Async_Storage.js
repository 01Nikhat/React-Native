/* eslint-disable */

import {
  View,
  StyleSheet,
  Text,
  Button,
} from 'react-native';
//asyncStorage store karna jaruri hai 
import AsyncStorage from '@react-native-async-storage/async-storage'; //importing AsyncStorage
import { useState } from 'react';

const Async_Storage = () => {

  const [name, setName] = useState(''); //just to display purpose

  const setData = async () => { //using async
    await AsyncStorage.setItem('name', 'Nikhat Parvin'); //key-value pair
  }

  const getData = async () => {
    const name = await AsyncStorage.getItem('name');
    setName(name);
  }

  const removeData = async () => {
    await AsyncStorage.removeItem('name');
    setName('Storage Khali ha Bhai');
  }
  
  return (
    <View style={styles.conatainer}>
      
      <Text style={{fontSize: 25, textAlign: 'center', color: 'green'}}>AsyncStorage with React-Native</Text>

      <Text style={{fontSize: 25, textAlign: 'center', marginTop: 80}}>Name: {name}</Text>

      {/* Below code for button styling */}
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button title='Set Data' onPress={setData} />
        <View style={{margin: 10}}>
          <Button title='Get Data' onPress={getData} />
        </View>
        <View>
          <Button title='Remove Data' onPress={removeData} />
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    color: 'green',
  },
  input: {
    borderWidth: 1,
    borderColor: 'skyblue',
    margin: 10,
  },
});

export default Async_Storage;