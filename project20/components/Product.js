import { StyleSheet, View,Text,Image,Button } from "react-native"

import { addToCart } from "./redux/action";
import { useDispatch, useDispatch } from "react-redux";

const Product = (props) =>{
  
  const dispatch = useDispatch();
  const handleAddToCart = (item) =>{
    dispatch(addToCart(item))

  }

  const item = props.item;
  return(
    <View style={{alignItems:'center' , borderBottomColor:'orange',borderBottomWidth:2,padding:10}}>
        <Image style={{ width: 150, height: 150 }} source={{ uri: item.image }} />
          <Text style={{fontSize:24}}>{item.name}</Text>
          <Text style={{fontSize:24}}>{item.price}</Text>
          <Text style={{fontSize:24}}>{item.color}</Text>
          <Button title="Add To Cart" onPress={()=>handleAddToCart(item)}></Button>
       </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1
  }
})
export default Product;