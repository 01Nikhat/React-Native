
import React from 'react';

import {View} from 'react-native';

import UseEffectComponent1 from './components/UseEffectComponent1';
import UseEffectComponent2 from './components/UseEffectComponent2';
import ToggleComponent from './components/ToggleComponent';
import useEffectUnmount3 from './components/useEffectUnmount3';

/**
 * 1) Life Cycle with useEffect (component: UseEffectComponent1)
 * 2) useEffect hook as ComponentDidUpdate life cycle method (component: UseEffectComponent1)
 * 3) Show/Hide Component (component: ToggleComponent)
 * 4) useEffect for Unmount Life Cycle (component: UseEffectComponent3)
*/


const App = () => {

  return(
    <View>

      <UseEffectComponent1/>

      {/* <UseEffectComponent2/> */}

      {/* <ToggleComponent/> */}

      {/* <useEffectUnmount3 /> */}
      
    </View>
  );
};

export default App;
