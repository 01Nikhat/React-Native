import { useEffect, useState } from "react";
import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native"

const ListApi = () =>{
  const [data,setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser,setSelectedUser] = useState(undefined);

  //here we are fetching data from API 
  //Afetr fetching data it's showing on the UI

  const getAPIData = async() =>{

    const url = 'http://10.0.2.2:3000/users';
    const result = await fetch(url);
    const dataObjFetched = await result.json();
   // console.warn(dataObjFetched);
    
    if (dataObjFetched) {
        setData(dataObjFetched)
       // console.warn("Fetched data length:", dataObjFetched.length);
    }
  }

// first we have to fetch user id so that we know which user want to delete the data 
//after fetching userid we will call the delete method from API
//jaise delete hoga waise getAPIData function call hoga jisse data API ke saath UI par bhi deleted deekhega 
  const deleteUser = async (id) =>{
    const url = 'http://10.0.2.2:3000/users';
   let result = await fetch(`${url}/${id}`,{ method:"DELETE",});
   result = await result.json();
   if (result) {
    console.warn("User Deleted");
    getAPIData();
   }

  }

  

  useEffect(()=>{
    getAPIData();
  },[]);

  //Modal updation Operation

  const updateModalUser = (data) =>{
    setShowModal(true);
    setSelectedUser(data);
  
  }
// Front UI design part
  return(
    <View style={styles.container}>

<View style={styles.dataWrapper}>

<View style={{flex:1}}><Text >Name</Text></View>
<View style={{flex:2}}><Text >Age</Text></View>
<View style={{flex:2}}><Text >Operation</Text></View>


</View >

      { data.length ? data.map((item)=><View key = {item.id} style={styles.dataWrapper}>

          <View style={{flex:1}}><Text >{item.name}</Text></View>
          <View style={{flex:1}}><Text >{item.age}</Text></View>
          <View style={{flex:1}}><Button title="Update" onPress={()=>updateModalUser(item)}></Button></View>
          <View style={{flex:1}}><Button title="Delete" onPress={()=>deleteUser(item.id)}></Button></View>
          

      </View>):null}
      <Button onPress={getAPIData} title="Click" />

      <Modal visible={showModal} transparen={true}>
        <UpdateModal setShowModal = {setShowModal} selectedUser={selectedUser}
        getAPIData={getAPIData} />
       
      </Modal>
    </View>
  )
}



// in this operation we are making 3 input and initially jo user update par click karega uska data initial 
// input value mai show karega then waha upadate kar sakte hai

const UpdateModal = (props) =>{
  //console.warn(props.selectedUser);

    
  const [name,setName] = useState('');
  const [age,setAge] = useState('');
  const [email,setEmail] = useState('');

  useEffect(()=>{
    if (props.selectedUser) {
      setName(props.selectedUser.name);
      setAge(props.selectedUser.age.toString());
      setEmail(props.selectedUser.email);
      
    }
  },[props.selectedUser]);

  const updateUser = async() =>{

    const url = 'http://10.0.2.2:3000/users';
    const id = props.selectedUser.id
    let result = await fetch(`${url}/${id}`,{ 
      method:"Put",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({name,age,email})
    });
    result = await result.json();
    if (result) {
      console.warn("Data Saved");
      props.getAPIData(); // Fetch updated data after saving
      props.setShowModal(false); // Close the modal after save
    }

    console.warn(name,email,age);
  
  }
  
  
 return( <View style={styles.centeredView}>
      <View style={styles.modalView}>

        <TextInput style={styles.input} placeholder="Enter Name" 
          value={name} onChangeText={(text)=>setName(text)}/>
        <TextInput style={styles.input} 
         placeholder="Enter Email" value={age} onChangeText={(text)=>setAge(text)}/>
        <TextInput style={styles.input} 
         placeholder="Enter Age"  value={email} onChangeText={(text)=>setEmail(text)}/>
        <View style={{marginBottom:15}}><Button title="Save" onPress={updateUser}/></View>
        <Button title="Close" onPress={()=>props.setShowModal(false)}/>
      </View>
  </View>)

}

//Css part 

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  dataWrapper:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    backgroundColor:'orange',
    margin:5,
    padding:3
  },
  centeredView :{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  modalView :{
    backgroundColor:'#fff',
    borderRadius:10,
    padding:60,
    shadowColor:'#000',
    shadowOpacity:0.70,
    elevation:5,
    margin:5

  },
  input:{
    borderWidth:1,
    borderColor:'skyblue',
    width:300,
    marginBottom:15,
    fontSize:20
  }
})
export default ListApi;