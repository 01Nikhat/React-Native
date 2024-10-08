
import React from 'react';

import {StyleSheet, Text, View, Pressable} from 'react-native';


/**
                            Pressable property:
   * onPress: Function called when the Pressable component is pressed.
   * style: Function or object to apply styling, optionally based on the pressed state.
   * onPressIn: Function called when the press gesture starts.
   * onPressOut: Function called when the press gesture ends.
   * onLongPress: Function called when the Pressable component is pressed and held for a longer duration (default value is 500ms i.e. 0.5 seconds)
   * disabled: Boolean to disable the Pressable component, preventing interaction.
*/

const PressableComponent = () => {
  
  return (
    <View style={styles.main}>
      
      <Pressable onPress={() => console.warn('Normal Press')}>
        <Text style={[styles.pressableBtn, { backgroundColor: 'blue'}]}>Pressable (Normal Press)</Text>
      </Pressable>

      <Pressable onLongPress={() => console.warn('Long Press')}>
        <Text style={[styles.pressableBtn, { backgroundColor: 'gold'}]}>Pressable (Long Press)</Text>
      </Pressable>

      <Pressable onPressIn={() => console.warn('Press In')}>
        <Text style={[styles.pressableBtn, { backgroundColor: 'green'}]}>Pressable (Press In)</Text>
      </Pressable>

      <Pressable onPressOut={() => console.warn('Press In')} >
        <Text style={[styles.pressableBtn, { backgroundColor: 'orange'}]}>Pressable (Press In)</Text>
      </Pressable>

    </View>
  );
};


const styles = StyleSheet.create({

  main:{
    flex: 1,
    justifyContent: 'center', 
  },

  pressableBtn: {
    color: '#fff', //white and #000 is balck
    padding: 10,
    margin: 10,
    borderRadius: 10,
    fontSize: 20,
    textAlign: 'center',

    shadowColor: 'red',
    elevation: 15,
  },
});

export default PressableComponent;