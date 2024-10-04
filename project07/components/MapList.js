import {Text, View, StyleSheet, ScrollView} from 'react-native';

const MapList = () =>{
  const users =[
    {id:1,
      name:"nikhat"
    },
    {id:2,
      name:"naureen"
    },
    {id:3,
      name:"naaz"
    },
    {id:4,
      name:"naheed"
    },
    { id: 7, name: 'Hermione' },
    { id: 8, name: 'Iron Man' },
    { id: 9, name: 'Hulk' },
    { id: 10, name: 'Spider Man' },
    { id: 11, name: 'Captain America' },
    { id: 12, name: 'Super Man' },
    { id: 13, name: 'Bat Man' },
    { id: 14, name: 'Tony' },
    { id: 15, name: 'x' },
    { id: 16, name: 'y' },
    { id: 17, name: 'z' },
    { id: 18, name: 'a' },
    { id: 19, name: 'b' },
    { id: 20, name: 'c' },
  ]
  return(
    <View>
      <Text style={{fontSize:31}}>List With Map Function</Text>
      <ScrollView style={{marginBottom:50}}>
      {
        users.map((item)=><Text style = {styles.item}>{item.name}</Text>)
      }
      </ScrollView>
    </View>

  )
}

const styles = StyleSheet.create({
  item : {
    fontSize: 20,
    padding: 5,
    color: 'white',
    backgroundColor: 'blue',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 20,
  },
});

export default MapList;