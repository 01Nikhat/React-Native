import { useState } from "react";
import { ActivityIndicator } from "react-native";

const Loader = () =>{
  const [show,setShow]  = useState(false)

  const displayLoader = () =>{
    setShow(true);
    setTimeout(()=>{setShow(false)},5000)
  }
  return(
    <View>
      <ActivityIndicator size={100} color= "green" animating = {show} />
      <Button title = 'show Loader' onPress = {displayLoader}></Button>

    </View>
  )
}
export default Loader;