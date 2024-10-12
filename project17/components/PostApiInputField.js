import { useState } from "react"
import { Button, StyleSheet, Text, TextInput ,View} from "react-native"

const PostApiInputField = () =>{
  const [name,setName] = useState('');
  const [age,setAge] = useState(0);
  const [email,setEmail] = useState('');

  const saveApiData = async() =>{
    //console.warn(name,age,email);
    const url = 'http://10.0.2.2:3000/users';
    const result = await fetch(url,{
      method: 'POST',
      headers: {
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({name,age,email})
    });
    //just to see what is stored in result and saveApi Data
    const dataObjFetched = await result.json();
    if(dataObjFetched){
      console.warn(dataObjFetched); 
    }
    else{
      console.warn("error");
      
    }
    
  }
  return(
    <View>
      <Text style={{fontSize:30}}> Post API with Input Field</Text>

      <TextInput style={styles.input} placeholder="Enter Name" value={name} onChangeText={(text) =>setName(text)}/>

      <TextInput style={styles.input} placeholder="Enter Age" value={age} onChangeText={(text) =>setAge(text)}/>

      <TextInput style={styles.input} placeholder="Enter Email" value={email} onChangeText={(text) =>setEmail(text)}/>

      <Button title="Save Data" onPress={saveApiData}></Button>
    </View>
  )
}
const styles = StyleSheet.create({
  input:{
    borderColor:'skyblue',
    borderWidth:1,
    margin:20
  }
})
export default PostApiInputField