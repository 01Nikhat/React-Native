import { Text } from "react-native"

const PostApiInputField = () =>{

  const saveApiData = async() =>{
    const url = 'http://10.0.2.2:3000/users';
    const result = await fetch(url);
    //just to see what is stored in result and saveApi Data
    const dataObjFetched = await result.json();
    console.warn(dataObjFetched);
  }
  return(
    <View>
      <Text>Post API with Input Field</Text>
    </View>
  )
}
export default PostApiInputField