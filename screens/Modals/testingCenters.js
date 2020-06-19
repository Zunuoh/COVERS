import React from 'react';
import {View, Text} from 'react-native';

const TestingCenters =()=>{
    return(
        <View style={{flex:1, padding:20}}>
      
               <View style={{paddingTop:40}}>
                   <Text style={{fontSize:35, fontWeight:"bold"}}>Testing Centers</Text>
               </View>

               <View style={{flexDirection:"row", paddingTop:60, borderBottomWidth:1, borderBottomColor:"#ccc", paddingBottom:30}}>
                   <View style={{flex:8}}>
                       <Text style={{fontWeight:"bold"}}>anti-fori medical institute</Text>
                       <Text style={{paddingTop:25}}>Accra, Ghana</Text>
                   </View>
                   <View style={{flex:4}}>
                   <Text>Tue Apr 14 2020</Text>
                    <Text style={{paddingTop:25}}>Get Directions</Text>
                   </View>
               </View>

               <View style={{flexDirection:"row", paddingTop:50, borderBottomWidth:1, borderBottomColor:"#ccc", paddingBottom:30}}>
                   <View style={{flex:8}}>
                       <Text style={{fontWeight:"bold"}}>Here we go</Text>
                       <Text style={{paddingTop:25}}>Accra, Ghana</Text>
                   </View>
                   <View style={{flex:4}}>
                   <Text>Sun Apr 12 2020</Text>
                    <Text style={{paddingTop:25}}>Get Directions</Text>
                   </View>
               </View>

               <View style={{flexDirection:"row", paddingTop:50, borderBottomWidth:1, borderBottomColor:"#ccc", paddingBottom:30}}>
                   <View style={{flex:8}}>
                       <Text style={{fontWeight:"bold"}}>Adenta Municipality</Text>
                       <Text style={{paddingTop:25}}></Text>
                   </View>
                   <View style={{flex:4}}>
                   <Text>Sun Apr 12 2020</Text>
                    <Text style={{paddingTop:25}}>Get Directions</Text>
                   </View>
               </View>

               <View style={{flexDirection:"row", paddingTop:50, borderBottomWidth:1, borderBottomColor:"#ccc", paddingBottom:30}}>
                   <View style={{flex:8}}>
                       <Text style={{fontWeight:"bold"}}>Here</Text>
                       <Text style={{paddingTop:25}}></Text>
                   </View>
                   <View style={{flex:4}}>
                   <Text>Sun Apr 12 2020</Text>
                    <Text style={{paddingTop:25}}>Get Directions</Text>
                   </View>
               </View>

               <View style={{flexDirection:"row", paddingTop:50, borderBottomWidth:1, borderBottomColor:"#ccc", paddingBottom:30}}>
                   <View style={{flex:8}}>
                       <Text style={{fontWeight:"bold"}}>Simple Testing Site</Text>
                       <Text style={{paddingTop:25}}></Text>
                   </View>
                   <View style={{flex:4}}>
                   <Text>Sun Apr 12 2020</Text>
                    <Text style={{paddingTop:25}}>Get Directions</Text>
                   </View>
               </View>
               
  
        </View>
        );
}
export default TestingCenters;