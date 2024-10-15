import { useRef } from "react";
import { Button, StyleSheet, TextInput,View }  from "react-native";

const RefUse = () =>{
  const input = useRef()
  const handleInput = () =>{
    input.current.focus();

  }
  return(
    <View style={styles.container}>
      <TextInput  ref = {input} style= {styles.input} placeholder="Enter Your Name"/>
      <TextInput style= {styles.input} placeholder="Enter Your Password"/>
      <Button  title="Update Input" onPress={handleInput}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:16

  },
  input:{
    borderColor:'skyblue',
    borderWidth:2,
    margin:10
  }
})
export default RefUse;