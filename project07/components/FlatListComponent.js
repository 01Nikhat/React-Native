const FlatListComponent = () =>{
  const users = [
    {id:1,
     name: "nikhat"
    },
    {id:2,
      name: "naheed"
     },
     {id:3,
      name: "naaz"
     },
     {id:4,
      name: "naureen"
     }
  ]

  return(
    <View>
    <Text style={{fontSize:31}}>List With Flat List</Text>
    <FlatList
      data = {users} //"data" takes an "array" of items to be rendered
      renderItem = {({item}) => <Text style={styles.item}>{item.name}</Text>} //renderItem: A function that takes an item form from the data array and returns a React element to render.
    //  keyExtractor={item => item.id} //keyExtractor: A function that returns a unique key for each item in the list. This is required to ensure that each item is properly identified for efficient updates.
    />
  </View>

  )
}

const styles = StyleSheet.create({
  item:{
    fontSize:24,
    padding:10,
    color:"#fff",
    backgroundColor:'black',
    borderColor:'blue',
    borderWidth:1,
    margin:10
  }
})

export default FlatListComponent;