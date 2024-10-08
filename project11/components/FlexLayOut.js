import {View, StyleSheet } from "react-native";

/**
 * 1) Responsive Layout with Flex
*/

{/* <Text style={{fontSize: 30, color: 'green'}}>Responsive UI with Flex</Text> */}

/*
    ///say ek View pe flex:1, 50% screen ye wala body lelega
    ///dusra View pe flex:1, 50% screen ye wala body lelega
    eg1)
    <View>
      <View>say flex:1 </View> --> Takes 1/3th of the screen (33.33%)
      <View>say flex:1 </View> --> Takes 1/3th of the screen (33.33%)
      <View>say flex:1 </View> --> Takes 1/3th of the screen (33.33%)
    </View>

    eg2)
    <View>
      <View>say flex:1 </View> --> ye pura body lelega bas utna space chor dega jitna niche wala text ko chaiye for fontSize:100
      <View>say Text with fontSize:100 </View>
    </View>

    eg3)
    <View>
      <View>say flex:2 </View> --> Takes 2/3th of the screen (66.66%)
      <View>say flex:1 </View> --> Takes 1/3th of the screen (33.33%)
    </View>

    eg4)
    <View>
      <View>say flex:3 </View> --> Takes 3/4th of the screen (75%)
      <View>say flex:1 </View> --> Takes 1/4th of the screen (25%)
    </View>

    Note: seeing above, ratio wise divide kar deta ha
*/

const FlexLayOut = () =>{
  return(
    <View style={styles.main}>
      <View style = {styles.box1}>
          <View style = {styles.innerbox1}></View>
          <View style = {styles.innerbox2}></View>
          <View style = {styles.innerbox3}></View>
          <View style = {{backgroundColor:'red'}}></View>
      </View>
      <View style = {styles.box2}></View>
      <View style = {styles.box3}></View>
    </View>
  )
}

const styles = StyleSheet.create({
main:{
  flex:1,

},
box1:{
  flex:2,
  backgroundColor:'red'
},
box2:{
  flex:1,
  backgroundColor:'green',
  flesDirection:'row'
},
box3:{
  flex:1,
  backgroundColor:'yellow'
},
innerbox1:{
  flex:1,
  backgroundColor:'purple'
},
innerbox2:{
  flex:1,
  backgroundColor:'skyblue'
},
innerbox3:{
  flex:1,
  backgroundColor:'blue'
}
})
export default FlexLayOut;