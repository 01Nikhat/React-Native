import {View,Text, Platform, StyleSheet } from "react-native";

const PlatFormCheck = () =>{
  return(
    <View>
      <Text style={{fontSize:30}}>Plat Form:{Platform.OS} </Text>
      { Platform.OS ?
        <View style={{backgroundColor:'green',height:100,width:100}}></View> :
        <View style={{backgroundColor:'red',height:100,width:100}}></View>
      }
      <Text style = {StyleSheet.Text}>Hello Nikki</Text>


        {/* to see Platform details */}
        <Text style={styles.check2}>{JSON.stringify(Platform)}</Text>
      {/* to check react-native version */}
      <Text style={styles.check2}>{JSON.stringify(Platform.constants.reactNativeVersion.minor)}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  Text:{
    color : Platform.OS == "android" ? "Blue" : "Black",
    fontSize:30
  },
  check2: {
    fontSize: 18, 
    borderTopWidth: 2, 
    marginBottom: 8,
  },
})
export default PlatFormCheck;