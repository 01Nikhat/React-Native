import { Text, View,} from 'react-native';
import React from 'react';

const Grid = ( ) =>{
 
  const users = [
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
      <Text style={{fontSize:31}}>Grid with Dynamic Data</Text>
      <View style={{flex:1,flexDirection:'row',flexWrap:'wrap'}}>
     { 
     users.map(
              (item) =>(
                <Text key={item.id} style={styles.item}>{item.name}</Text>
              ))
              }
      </View>
    </View>
  
  )
}

const styles = StyleSheet.create({
  item : {
    fontSize: 20,
    backgroundColor: 'blue',
    color: 'white',
    margin: 5,
    paddig: 5,
    width: 120,
    height: 120,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
export default Grid;