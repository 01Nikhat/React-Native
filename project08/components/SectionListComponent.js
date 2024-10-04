import { SectionList } from "react-native";

const SectionListComponent = () =>{
  const users =[
    {
      id:1,
      name:"nikhat",
      data:["php","Angular","React js"]//if you are taking nested array inside an array, then keyword data hi rakhna hoga
    },
    {id: 2, name: 'Bill', data: ['Python', 'C', 'HTML'],},
  {id: 3, name: 'Peter', data: ['Ruby', 'Angular', 'CSS'],},
  {id: 4, name: 'Bruce', data: ['PHP', 'Tailwind', 'React'],},
  ]
  return(
    <View>
      <Text style={{fontSize:30}}>Section List in React-Native</Text>
      <SectionList 
        sections = {users} // Array of sections with data array
        keyExtractor={(item, index) => item + index} // Unique key for each item; keyExtractor function receives two arguments: 1) item: The current item from the list 2)index: The index of the current item in the list.
        renderItem = {({item}) => <Text style={styles.item}>{item}</Text>} // Render each item in nested array i.e. data
        renderSectionHeader = {({section:{name}}) => <Text style={styles.header}>{name}</Text>} // Render the section header; here I am using "name"
      />

    </View>
  )
}
export default SectionListComponent;