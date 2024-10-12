import { useState } from "react"
import { Button, StyleSheet, Text, TextInput ,View} from "react-native"

const FormValidation = () =>{
  const [name,setName] = useState('');
  const [age,setAge] = useState(0);
  const [email,setEmail] = useState('');

  const [nameError,setNameError] = useState(false);
  const [ageError,setAgeError] = useState(false);
  const [emailError,setEmailError] = useState(false);

  const saveApiData = async() =>{

  /*  if(!name){
      setNameError(true);
    }
    else{
      setNameError(false);
    }

    if(!age){
      setAgeError(true);
    }
    else{
      setAgeError(false);
    }

    if(!email){
      setEmailError(true);
    }
    else{
      setEmailError(false);
    }

    */
    //shorter tha if-else
    setNameError(!name ? true : false);
    setAgeError(!age ? true : false);
    setEmailError(!email ? true : false);
    
    if (!name || !age || !email) {
      return(false);
      
    }

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

        {nameError ? <Text style={styles.errorText}>Please Enter Valid Name</Text>:null}

      <TextInput style={styles.input} placeholder="Enter Age" value={age} onChangeText={(text) =>setAge(text)}/>

      {ageError ? <Text style={styles.errorText}>Please Enter Valid Age</Text>:null}

      <TextInput style={styles.input} placeholder="Enter Email" value={email} onChangeText={(text) =>setEmail(text)}/>

      {emailError ? <Text style={styles.errorText}>Please Enter Valid Email</Text>:null}

      <Button title="Save Data" onPress={saveApiData}></Button>
    </View>
  )
}
const styles = StyleSheet.create({
  input:{
    borderColor:'skyblue',
    borderWidth:1,
    margin:20,
    marginBottom:5
  },
  errorText:{
    color:'red',
    marginLeft:20
  }
})
export default FormValidation;