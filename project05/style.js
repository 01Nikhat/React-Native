
import {StyleSheet} from 'react-native';

const Exstyles = StyleSheet.create({ //create ek object leta ha
  textBox1:{
    color: 'blue',
    fontSize: 25,
    backgroundColor: 'yellow',
    marginBottom: 5,
    padding: 15,
    borderRadius: 10,
    height: 140,
    textAlignVertical: 'center', //vertically center karega
    textAlign: 'center', //horizontally center karega

    borderWidth: 3,
  },

  textBox2:{
    color: 'blue',
    fontSize: 25,
    backgroundColor: 'coral',
    marginBottom: 5,
    padding: 25,
    borderRadius: 30,
    height: 200,

    borderWidth: 8,
    borderColor: 'red',
  },
  textCenter:{
    textAlignVertical: 'center', //vertically center karega
    textAlign: 'center', //horizontally center karega
  },
});

export default Exstyles;
