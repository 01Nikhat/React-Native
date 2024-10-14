
import { useEffect, useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView
} from 'react-native';


const ListApi = () => {
  const [data, setData] = useState([]); //array of objects

  const getApiData = async () =>{
    const url = 'http://10.0.2.2:3000/users';
    const result = await fetch(url); //by default method: 'GET'
    const dataFetched = await result.json();
    // console.warn(dataFetched); //just to see the object

    if(dataFetched){ //or can use 'result' in condition
      setData(dataFetched);
    }
  }

  useEffect(()=>{
    getApiData(); //to call the function
  },[]);

  //NOTE: here only UI is deign, button will not work 
  return (
    <ScrollView style={{flex:1}}>

      <View style={styles.wrapper}>
        <View style={{ flex: 2}}><Text style={{fontSize: 20}}>Name</Text></View>
        <View style={{ flex: 2 }}><Text style={{fontSize: 20}}>Age</Text></View>
        <View style={{ flex: 2 }}><Text style={{fontSize: 20}}>Operations</Text></View>
      </View>

      {
        data.length !== 0 ?
        data.map((item) => (
          <View style={styles.wrapper} key={item.id}>
            <View style={{ flex: 2 }}><Text>{item.name}</Text></View>
            <View style={{ flex: 1 }}><Text>{item.age}</Text></View>
            <View style={styles.buttonContainer}>
              <Button title='delete' onPress={() => handleDelete(item.id)} />
            </View>
            <View style={styles.buttonContainer}>
              <Button title='update' onPress={() => handleUpdate(item.id)} />
            </View>
          </View>
        ))
        : null
      }

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'orange',
    margin: 5,
    padding: 10,
    alignItems: 'center'
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 5,   // Add space around each button
    paddingVertical: 5,    // Add padding above and below to increase size
  },
})

export default ListApi;