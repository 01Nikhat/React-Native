/* eslint-disable */

import { View, ScrollView, Button } from 'react-native';


import Header from './Header';
import Product from './Product';


function ProductWrapper() { //navigation is passed by container only
  // Test with this simple image link
  const imageLink = 'https://static.vecteezy.com/system/resources/previews/011/047/526/original/smartphone-and-mobile-phone-free-png.png'; 

  const products = [
    { id: 1, name: 'Samsung Mobile', color: 'White', price: 60000, image: imageLink }, 
    { id: 2, name: 'Apple Mobile', color: 'Black', price: 150000, image: imageLink }, 
    { id: 3, name: 'Nokia Mobile', color: 'Blue', price: 30000, image: imageLink }, 
    { id: 4, name: 'Motorola Mobile', color: 'Cherry', price: 50000, image: imageLink }, 
    { id: 5, name: 'OnePlus Mobile', color: 'Gray', price: 35000, image: imageLink }, 
    { id: 6, name: 'Sony Mobile', color: 'Silver', price: 45000, image: imageLink }, 
    { id: 7, name: 'Google Pixel', color: 'Just Black', price: 70000, image: imageLink }, 
    { id: 8, name: 'Xiaomi Mobile', color: 'Red', price: 25000, image: imageLink }, 
    { id: 9, name: 'Oppo Mobile', color: 'Green', price: 40000, image: imageLink },
    { id: 10, name: 'Huawei Mobile', color: 'Purple', price: 55000, image: imageLink },
  ];

  return (
    <View style={{ flex: 1}}>
      <Header />
      <ScrollView>
       {products.map((item)=><Product key={item.id} item = {item}/>)}
      </ScrollView>
    </View>
  );
}

export default ProductWrapper;