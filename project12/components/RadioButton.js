import { StyleSheet, TouchableHighlight } from "react-native";

const RadioButton = () =>{
  return(
    <View style = {styles.main}>
      //khudke radio button nahi externally use kar sakte hai
      <TouchableHighlight>
        <View style = {styles.wrapper}>
          <View style = {styles.radio}>
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
  }
})
export default RadioButton;