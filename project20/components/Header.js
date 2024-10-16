import { useEffect, useState } from "react";
import { StyleSheet, View,Text } from "react-native"
import { useSelector } from "react-redux"

const Header = () =>{
  const cartData = useSelector((state)=>state.reducer);
  //console.warn(cartData);
  const [cartItem,setCartItem] = useState(0);

  useEffect(()=>{
    setCartItem(cartData.length)
  },[cartData])
  
  return(
    <View >
      <Text style = {{fontSize:30, textAlign:'right',padding:10,backgroundColor:'orange'}}>
        <View style={{backgroundColor:'yellow',borderRadius:20,height:40,width:40}}>
          <Text style={{fontSize:30}}> {cartItem}</Text>
        </View>
       </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1
  }
})
export default Header;