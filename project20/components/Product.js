import { StyleSheet, View,Text,Image,Button } from "react-native"

const Product = (props) =>{
  const item = props.item;
  return(
    <View style={{alignItems:'center' , borderBottomColor:'orange',borderBottomWidth:2,padding:10}}>
        <Image style={{ width: 150, height: 150 }} source={{ uri: item.image }} />
          <Text style={{fontSize:24}}>{item.name}</Text>
          <Text style={{fontSize:24}}>{item.price}</Text>
          <Text style={{fontSize:24}}>{item.color}</Text>
          <Button title="Add To Cart"></Button>
       </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1
  }
})
export default Product;