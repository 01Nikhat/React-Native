import React, { Component } from 'react';
import { Button, Text,TextInput,View,} from 'react-native';

interface State {
  name: string;
}

class StateProps extends Component<{}, State>  {
  //We can't use const,let,var in class 
  fruit =()=>{
    console.warn("nikhat");

  }

  constructor(props: {}) {
    super(props);
    this.state = {
      name: "Nikhat",
    };
  }

  updateName(val : string){
    this.setState({name :val})
  }

  
  render(): React.ReactNode {
    return (
      <View>
        <Text style= {{fontSize:30, color:'red'}}> Employee Name: {this.state.name}</Text>
        <TextInput placeholder='Enter Your Name' onChangeText={(text)=>this.updateName(text)}/>
        <Button title='Press Me' onPress={this.fruit}></Button>
        
      </View>
     
    );
    
  }
 
}

export default StateProps;
