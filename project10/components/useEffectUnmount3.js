import { useEffect, useState } from "react"
import { View } from "react-native"

const useEffectUnmount3 = () =>{
  const [show,setShow] = useState(true)
  return(<View>
    <Text style={styles.textStyle}>UseEffect for unmount component</Text>
    <Button title='Toggle Component' onPress={()=>setShow(!show)} />
      {
        show ?  <Student /> : null
      }
     
  </View>)
}
const Student = ()=>{
  
  useEffect(()=>{
    console.warn('useEffect called in Student Component !!!!!');
  }); // Runs on every render, 

  /*
  useEffect(()=>{
    return () => {console.warn('useEffect called in Student Component !!!!!')};
  }); // will run only once after the initial render and the cleanup function will run when the component unmounts. Useful when you need to set up something once and clean it up when the component is removed, such as setting up subscriptions or timers.
  */

  let timerID = setInterval(()=>console.error('Timer Called'), 2000);
  useEffect(()=>{
    return () => clearInterval(timerID); //same concept as above useEffect; here if you donot toggle <Student/> component, error(Timer Called) will show after every 2s, once you toggle <Student/> i.e unmount it, it will not show error
  });

  return(
    <view>
      <Text style={{fontSize: 22, color: 'orange'}}>Student</Text>
    </view>
  )
}
export default useEffectUnmount3;