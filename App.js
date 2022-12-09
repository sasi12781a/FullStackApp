import React,{useState,useEffect} from 'react';
import {
  Text,
  View,
  Image,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from 'react-native';    


const App=()=>{
  const [mode,setMode] = useState(false);
  function Mode(){
    setMode(!mode)
  }
  return(
    <View style={{display:'flex',height:'100%',backgroundColor:mode?"#000":'#fff',justifyContent:'center',alignItems:'center'}}> 
      <View style={{flex:1,justifyContent:'flex-start',alignSelf:"flex-end"}}>
        <TouchableOpacity  onPress={Mode}>
          <Text style={{color:mode?"#fff":'#000',margin:10}}>DarkMode</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex:1}}>
        <Text style={{color:mode?"#fff":'#000',justifyContent:'center'}}>
          Hi sasi
        </Text>
      </View>
    </View>
  )
}

export default App;