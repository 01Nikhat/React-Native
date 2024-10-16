import { StyleSheet, View,Text,Image,Button } from "react-native"

import { addToCart ,removeFromCart } from "./redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Product = (props) =>{

  const [isAddToCart,setIsAddToCart] = useState(false);
  const cartItem = useSelector((state)=>state.reducer);
  useEffect(()=>{
    let result = cartItem.filter((element)=>{
        return element.name === item.name
    });
    if(result.length){
      setIsAddToCart(true);
    }
    else{
      setIsAddToCart(false)
    }
  },[cartItem]);

  const handleRemoveFromCart = (item) =>{
      dispatch(removeFromCart(item.name))

  }

  const dispatch = useDispatch();

  const handleAddToCart = (item) =>{
    dispatch(addToCart(item))

  }

  const item = props.item;
  return(
    <View style={{alignItems:'center' , borderBottomColor:'orange',borderBottomWidth:2,padding:10,margin:50}}>
        <Image style={{ width: 150, height: 150 }} source={{ uri: item.image }} />
          <Text style={{fontSize:24}}>{item.name}</Text>
          <Text style={{fontSize:24}}>{item.price}</Text>
          <Text style={{fontSize:24}}>{item.color}</Text>
          {
            isAddToCart? <Button title="Remove To Cart" onPress={()=>handleRemoveFromCart(item)}></Button>
            : <Button title="Add To Cart" onPress={()=>handleAddToCart(item)}></Button>
          }
          
       </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1
  }
})
export default Product;