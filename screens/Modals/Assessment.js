import React from 'react';
import {View, Text} from 'react-native';
import Hr from '../../components/Hr'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Assessment = (props)=>{
    return(
        <View style={{flex:1, padding:20}}>
           <View style={{paddingTop:50}}>
               <Text style={{fontSize:35, fontWeight:"bold"}}>Self Assessment</Text>
               <Hr/>

               <View>
                   <Text style={{fontSize:20, fontWeight:"bold", paddingTop:30}}>Getting Started!</Text>
                   <Text style={{fontSize:12, paddingTop:5}}>This tool is intended to help you understand what to do next about</Text>
                   <Text style={{fontSize:12, paddingTop:3}}>COVID-19. You'll answer a few questions about your symptoms,</Text>
                   <Text style={{fontSize:12, paddingTop:3}}>travel, and contact you've had with others</Text>
               </View>

               <View style={{paddingTop:20}}>
                   <Text style={{fontWeight:"bold", fontSize:20}}>Note</Text>
                   <Text style={{fontSize:12, paddingTop:5}}>Recommendations provided by this tool do not constitute medical</Text>
                   <Text style={{fontSize:12, paddingTop:5}}>advice and should not be used to diagnose or treat medical</Text>
                   <Text style={{fontSize:12, paddingTop:5}}>conditions</Text>
                   <Text style={{fontSize:12, paddingTop:5}}>Let's all look out for each other by knowing our status, trying not to</Text>
                   <Text style={{fontSize:12, paddingTop:5}}>infect, others, and reserving care for those in need.</Text>
               </View>


               <TouchableOpacity style={{height:45, width:330, alignItems:"center", justifyContent:"center",backgroundColor:"#000", marginTop:400}} 
          onPress={()=>{navigation.navigate('Main')}}>
            <Text style={{color:"white"}}>Start Assessment...</Text>
          </TouchableOpacity>
           </View>
        </View>
    );
}
export default Assessment;