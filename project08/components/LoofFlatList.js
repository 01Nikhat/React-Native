import { FlatList } from "react-native";

const LoopFlatList = () =>{
  const users = [
    { id: 1, name: 'Nikhat', email: 'abc@test.com' },
    { id: 2, name: 'Peter', email: 'xyz@test.com'  },
    { id: 3, name: 'Bruce', email: 'pqr@test.com'  },
    { id: 4, name: 'Bill', email: 'uvw@test.com'  },
  ];
  
 
  return(
    <View>
      <Text style={{fontSize:27}}>Component in Loop with FlatList</Text>
      <FlatList
      data={users}
      renderItem={({item})=><UserData item= {item}/>}
      
      />
    </View>
  )
}
const UserData = (props)=>{
  const item = props.item;
  return(
    <View style={StyleSheet.box}>
        <Text style={StyleSheet.item}>{item.name}</Text>
        <Text style={StyleSheet.item}>{item.email}</Text>
      </View>
  )
}
export default LoopFlatList;