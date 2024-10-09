import {Text, View} from 'react-native';

import {WebView} from 'react-native-webview';
const InstallPackage = () =>{

//S1) npm install react-native-webview in terminal first [This package allows you to display web content in your React Native application]
  //S2) import {WebView} from 'react-native-webview';
  //S3) npx react-native run-android for ANDROID or npx react-native run-ios for IOS


  return (
    <View style={{flex: 1}}>
      
      {/* <PlatformCheck/> */}

      <Text style={{fontSize: 22, color: 'green'}}>Install Package in React-Native for Web-View:</Text>

      {/* use uri and not url */}
      <WebView source={{uri: 'https://reactnative.dev/docs/libraries'}} style={{flex: 1}}/>
      {/* flex: 1 makes the WebView take up all available space in its parent container. This is particularly useful if you want the WebView to expand and fit within the layout dynamically. */}

    </View>
  );
}

export default InstallPackage;