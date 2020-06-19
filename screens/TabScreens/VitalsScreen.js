import React from 'react';
import {View, Text} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';


import Header from '../../components/header'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Vitals(props){
    return(
        <View style={{flex:1}}>
        <Header>
            <Text>Vitals</Text>
        </Header>

        <View style={{flex: 1}} >
         {/* <View style={{paddingTop:30, paddingLeft:30}}>
         <FontAwesome
          name="plus"
          size={24}
          color="black"/>
         </View> */}
         <View style={{paddingTop:300, display:"flex", justifyContent:"center", alignItems:"center"}}>
           <Text style={{fontSize:12}}>You have not logged your details yet..</Text>
           <View style={{width:130, height:50, borderWidth:1, borderRadius:5, borderColor:"black", marginTop:10, display:"flex", justifyContent:"center", alignItems:"center", borderStyle:"dashed"}}>
             <Text>Log Vitals</Text>
           </View>
         </View>
         
        </View>
        <View>
          
        </View>
        <TouchableOpacity style={{backgroundColor:"black", height:40, width:100, color:"yellow"}} onPress={()=>{props.navigation.push('Symptoms')}}>
          <Text>hi</Text>
        </TouchableOpacity>

        </View>
      )
}