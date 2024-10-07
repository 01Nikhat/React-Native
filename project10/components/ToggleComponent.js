import {useState} from 'react';

import {StyleSheet, Text, View, Button} from 'react-native';


const ToggleComponent = () => {

  const [show, setShow] = useState(true);
  
  return(
    <View>

      <Text style={styles.textStyle}>Show/Hide Component:</Text>
      <Button title='Toggle Component' onPress={()=>setShow(!show)} />
        {
          show ? <user /> : null //can write null, undefined also instead of ''
          
        }
      
    </View>
  );
};

const User = () =>{ //for component used above
  return(
    <View>
      <Text style={{fontSize: 22, color: 'orange'}}>User Component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 22, 
    marginTop: 10, 
    borderTopWidth: 2,
    color: 'green',
  },
});

export default ToggleComponent;