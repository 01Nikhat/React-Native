import { useEffect, useState } from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native"

const ListApi = () =>{
  const [data,setData] = useState([]);

  const getAPIData = async() =>{

    const url = 'http://10.0.2.2:3000/users';
    const result = await fetch(url);
    const dataObjFetched = await result.json();
    console.warn(dataObjFetched);
    
    if (dataObjFetched) {
        setData(dataObjFetched)
      
    }
  }

  const deleteUser = async (id) =>{
    const url = 'http://10.0.2.2:3000/users';
   let result = await fetch(`${url}/${id}`,{ method:"DELETE",});
   result = await result.json();
   if (result) {
    console.warn("User Deleted");
    getAPIData();
   }

  }

  useEffect(()=>{
    getAPIData();
  },[]);

  return(
    <View style={styles.container}>

<View style={styles.dataWrapper}>

<View style={{flex:1}}><Text >Name</Text></View>
<View style={{flex:2}}><Text >Age</Text></View>
<View style={{flex:2}}><Text >Operation</Text></View>


</View >

      { data.length ? data.map((item)=><View key = {item.id} style={styles.dataWrapper}>

          <View style={{flex:1}}><Text >{item.name}</Text></View>
          <View style={{flex:1}}><Text >{item.age}</Text></View>
          <View style={{flex:1}}><Button title="Update"></Button></View>
          <View style={{flex:1}}><Button title="Delete" onPress={()=>deleteUser(item.id)}></Button></View>
          

      </View>):null}
      <Button onPress={getAPIData} title="Click" />

      <Modal>
        <View>
          <View>
            <Text>Dummy Text</Text>
          </View>
        </View>
      </Modal>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  dataWrapper:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    backgroundColor:'orange',
    margin:5,
    padding:3
  }
})
export default ListApi;