import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import Hr from '../../components/Hr'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const symps=[{"id":"0", "number":"0", "text":"Dry cough"}, {"id":"1", "number":"1", "text":"Tiredness"}, {"id":"2", "number":"2", "text":"Sore throat"}, 
{"id":"3", "number":"3", "text":"Fever"}, {"id":"4", "number":"4", "text":"Aches and Pains"}, {"id":"5", "number":"5", "text":"Shortness of breath"}]

const Symptoms =(props)=>{
    const[logs, setLogs]=useState(symps);
    return(
        <ScrollView>
     <View style={{flex:1}}>
       <View style={{padding:20, paddingTop:60}}>
           <View>
           <Text style={{fontSize:40, fontWeight:"bold"}}>Log Symptoms</Text>
           </View>
           
           {logs.map(log=>{
               return(
                <View key={log.id} style={{height:130, width:"100%", borderWidth:1, borderRadius:10, marginTop:30, borderColor: "#ccc"}}>
                <Text style={{padding:10, fontWeight:"bold", fontSize:15}}>{log.text}</Text>
                <Hr/>
              
                <View style={{flexDirection:"row", padding:10}}>
                     <View style={{flex:2}}>
                         <View style={{width:40, height:40, borderRadius:30, borderWidth:1, display:"flex", alignItems:"center", justifyContent:"center"}}>
                         <Text style={{fontWeight:"bold", fontSize:20}}>0</Text>
                         </View>
                         <Text style={{padding:5}}>None</Text>
                     </View>
  
                     <View style={{flex:2}}>
                         <View style={{width:40, height:40, borderRadius:30, borderWidth:1, display:"flex", alignItems:"center", justifyContent:"center"}}>
                         <Text style={{fontWeight:"bold", fontSize:20}}>1</Text>
                         </View>
                         <Text style={{padding:5}}>Mild</Text>
                     </View>
  
                     <View style={{flex:2}}>
                         <View style={{width:40, height:40, borderRadius:30, borderWidth:1, display:"flex", alignItems:"center", justifyContent:"center"}}>
                         <Text style={{fontWeight:"bold", fontSize:20}}>2</Text>
                         </View>
                         <Text style={{padding:5}}>Mid</Text>
                     </View>
  
                     <View style={{flex:2}}>
                         <View style={{width:40, height:40, borderRadius:30, borderWidth:1, display:"flex", alignItems:"center", justifyContent:"center"}}>
                         <Text style={{fontWeight:"bold", fontSize:20}}>3</Text>
                         </View>
                         <Text style={{padding:5}}>Semi</Text>
                     </View>
  
                     <View style={{flex:2}}>
                         <View style={{width:40, height:40, borderRadius:30, borderWidth:1, display:"flex", alignItems:"center", justifyContent:"center"}}>
                         <Text style={{fontWeight:"bold", fontSize:20}}>4</Text>
                         </View>
                         <Text style={{padding:5}}>High</Text>
                     </View>
                 </View>
            </View>
               );
           })}
           <TouchableOpacity style={{height:45, width:330, alignItems:"center", justifyContent:"center", marginTop:-80, backgroundColor:"#000"}} 
          onPress={()=>{navigation.navigate('Main')}}>
            <Text style={{color:"white"}}>Lets get started.....</Text>
          </TouchableOpacity>

           
        
       </View>
     </View>
     </ScrollView>
    );
}

export default Symptoms;