
import {
  Text,
  View,
  Button,
} from 'react-native';


const PostApi = () => {
  
  const saveApidata = async () =>{
    const postData = {
      name: 'ashik',
      age: 30,
      email: 'ashik@gmail.com',
    }
    const url = 'http://10.0.2.2:3000/users';
    const result = await fetch(url, { //while modifying, this is the second parameter as by default second parameter is not given it is 'GET
      method: 'POST',
      headers: { //meta data
        'Content-Type' : 'application/json' //tells the server that the body of the request contains JSON data.
      },
      body : JSON.stringify(postData) //jo bhi data jayega wo stringyfy hokar jayega
    });

    //just to see what is stored in result
    const dataObjFetched = await result.json();
    console.warn(dataObjFetched);
  }
  
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      
      <Text style={{fontSize:25, color: 'green', textAlign: 'center', marginBottom: 30}}>Simple Post API (Static Data)</Text>
      
      <Button title='Save Data' onPress={saveApidata}/>

    </View>
  );
};

export default PostApi;