const inputText = () =>{
  return(
    <View>
    <Text style={{fontSize:30}}>Hnadle Text Input </Text>
    <Text style={{fontSize:30}}>Your Name is :{name} </Text>
    <TextInput 
    style={Styles.textInput}
    placeholder='Enter Your Name'
    value={name}
    onChangeText={(text) =>setName(text)}/>
    <Button title='Clear input Value' onPress={()=>setName("")}></Button>
  </View>
  
  )
}

const Styles = StyleSheet.create({
  textInput:{
    fontSize:18,
    color:"blue",
    borderWidth:2,
    borderColor:"blue",
    margin:10
  }
})

export default inputText;