
import {useEffect, useState} from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';



const ApiIntegrate = () => {

  const [data, setData] = useState([]);

  /*
      Android emulators use a special alias 10.0.2.2 to refer to the host machine. So, if your server is running on http://192.168.1.12:3000/users, you should use http://10.0.2.2:3000 as the URL in your fetch request.
  */
  const PostApi = async () =>{
    const url = 'http://10.0.2.2:3000/users';
    const result = await fetch(url);
    const dataObjFetched = await result.json();
    // console.error(dataObjFetched); //just to check
    setData(dataObjFetched);
  }


  useEffect(()=>{
    getApidata();
  },[]);

  
  return (
    <ScrollView>
      <Text style={{fontSize:25, color: 'green', textAlign: 'center', marginBottom: 30}}>JSON server API integration</Text>

      { //give key to each <View>
        data.length !==0 ?
          data.map((item) => (
           <View key={item.id} style={styles.view}>
            <Text style={styles.text} >Name: {item.name}</Text>
            <Text style={styles.text} >Age: {item.age}</Text>
            <Text style={styles.text} >Email: {item.email}</Text>
           </View>))
        : ''
      }

    </ScrollView>
  );
};

const styles = StyleSheet.create({

  text: {
    fontSize:20, 
    marginBottom: 15,
    color: '#000'
  },
  view: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default PostApi;