import React,{useState,useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  ActivityIndicator,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native';    

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App=()=>{
  const [mode,setMode] = useState(false);
  const [name,setName]=useState('');
  const [age,setAge]=useState('');
  const [cls,setCls]=useState('');
  const [roll,setRoll]=useState('');

  const stateObj={
    name:'setName',
    age:'setAge',
    cls:'setCls',
    roll:'setRoll'
  }
  const keys=Object.keys(stateObj);

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
      <SafeAreaView style={{flex:4,justifyContent:'center',alignItems:'center'}}>
      {keys.map((value,key)=>(<TextInput placeholder={`Enter ${value}`} key={key} style={[styles.input,{borderColor:mode?"#fff":"#000",color:mode?'#fff':'#000',shadowColor:mode?'#fff':'#000'}]} value={eval(value)} onChangeText={eval(stateObj[value])}/>))}
        <TouchableOpacity style={{height: 40,width:windowWidth*0.3,margin: 12,borderWidth: 1,padding: 10,alignItems:'center',backgroundColor:mode?'#fff':'#000'}}>
          <Text style={{color:mode?'#000':'#fff'}}>
            Save
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  )
}
console.log()


const styles = StyleSheet.create({
  input: {
    height: 40,
    width:windowWidth*0.8,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;