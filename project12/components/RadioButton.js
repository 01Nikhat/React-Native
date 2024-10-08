import { useState } from "react";
import { StyleSheet, TouchableHighlight } from "react-native";

const RadioButton = () =>{

  const [selectRadio, setSelectradio]  = useState(1)
  return(
    <View style = {styles.main}>
      //khudke radio button nahi externally use kar sakte hai
      <TouchableHighlight onPress={()=>{setSelectradio(1)}}>
        <View style = {styles.wrapper}>
          <View style = {styles.radio}>
            {selectRadio  === 1? <View style= {styles.radioBg}></View> : null }
            
            <Text style = {styles.radioText}>Radio 1</Text>
          </View>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={setSelectradio(2)}>
        <View style = {styles.wrapper}>
          <View style = {styles.radio}>
          {selectRadio  === 2? <View style= {styles.radioBg}></View> : null }
            <View style= {styles.radioBg}></View>
            <Text style = {styles.radioText}>Radio 1</Text>
          </View>
        </View>
      </TouchableHighlight>

    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  radioText:{
    fontSize:20
  },
  radio:{
    height:40,
    width:40,
    borderColor:'black',
    borderWidth:2,
    borderRadius:20,
    margin:10
  },
  wrapper:{
    flexDirection:'row',
    alignItems:'center'
  },
  radioBg:{
    backgroundColor:'black',
    height:28,
    width:28,
    borderRadius:20,
    margin:4
  }
})
export default RadioButton;