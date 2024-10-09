import { useState } from "react";
import {View, StyleSheet, Button, Text } from "react-native";

const CustomModal = () =>{
  const [show,setShow] = useState(false);
  return(
   
    <View style = {styles.container}>
       { 
      show ?
      <View style = {styles.modal}>
        <View style = {styles.body}>
          <Text >Do You Want To Close</Text>
          <Button  title="close" onPress={()=>setShow(false)}/>
        </View>

      </View>
      : null
    }
      <Button title="Custom Modal" onPress={()=>setShow(false)} ></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'flex-end'
  },
  modal:{
    flex:1,
    backgroundColor:'rgba(50,50,50,.5)'
  },
  body{
    backgroundColor:'#fff',
    height:300,
    width:300,
    padding:20,
    justifyContent:'flex-end',
    borderRadius:10
  }

})
export default CustomModal;