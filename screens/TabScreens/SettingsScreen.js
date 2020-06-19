import React from 'react';
import {View, Text} from 'react-native';
import {Ionicons, FontAwesome} from '@expo/vector-icons';

import Header from '../../components/header'

export default function Settings(props){
    return(
        <View style={{flex:1, backgroundColor:"white"}}>
        <Header>
            <Text>Settings</Text>
        </Header>
        <View style={{flexDirection:"row", borderBottomColor:"#ccc", borderBottomWidth:.3}}>
        <View style={{paddingLeft:20, paddingRight:20, paddingTop:40, paddingBottom:20, flex:9}}>
          <Text style={{fontWeight:"bold", fontSize:18}}>Self Assessment</Text>
          <Text style={{paddingTop:3}}>Ascertain your covid-19 risk using our screening tool</Text>
        </View>
        <View style={{flex:1, marginTop:40}}>
        <FontAwesome onPress={()=>{props.navigation.push('Assessment')}}
          name="angle-right"
          size={24}
          color="black"/>
        </View>
        </View>
      
        <View style={{flexDirection:"row", borderBottomColor:"#ccc", borderBottomWidth:.3}}>
        <View style={{paddingLeft:20, paddingRight:20, paddingTop:25, paddingBottom:20, flex:9}}>
          <Text style={{fontWeight:"bold", fontSize:18}}>FAQs</Text>
          <Text style={{paddingTop:3}}>Get answers to Frequently Asked Questions</Text>
        </View>
        <View style={{flex:1, marginTop:40}}>
        <FontAwesome onPress={()=>{props.navigation.push('Faqs')}}
          name="angle-right"
          size={24}
          color="black"/>
        </View>
        </View>
     
        <View style={{flexDirection:"row", borderBottomColor:"#ccc", borderBottomWidth:.3}}>
        <View style={{paddingLeft:20, paddingRight:20, paddingTop:25, paddingBottom:20, flex:9}}>
          <Text style={{fontWeight:"bold", fontSize:18}}>Testing Centers</Text>
          <Text style={{paddingTop:3}}>View testing centers near you</Text>
        </View>
        <View style={{flex:1, marginTop:40}}>
        <FontAwesome onPress={()=>{props.navigation.push('TestingCenters')}}
          name="angle-right"
          size={24}
          color="black"/>
        </View>
        </View>
       
       <View style={{flexDirection:"row", borderBottomColor:"#ccc", borderBottomWidth:.3}}>
       <View style={{paddingLeft:20, paddingRight:20, paddingTop:25, paddingBottom:20, flex:9}}>
          <Text style={{fontWeight:"bold", fontSize:18}}>Personal Details</Text>
          <Text style={{paddingTop:3}}>View and update your personal details</Text>
        </View>
        <View style={{flex:1, marginTop:40}}>
        <FontAwesome onPress={()=>{props.navigation.push('PersonalDetails')}}
          name="angle-right"
          size={24}
          color="black"/>
        </View>
       </View>
      
      <View style={{flexDirection:"row", borderBottomColor:"#ccc", borderBottomWidth:.3}}>
      <View style={{paddingLeft:20, paddingRight:20, paddingTop:25, paddingBottom:20, flex:9}}>
          <Text style={{fontWeight:"bold", fontSize:18}}>Audio</Text>
          <Text style={{paddingTop:3}}>Listen to audio</Text>
      </View>
      <View style={{flex:1, marginTop:40}}>
        <FontAwesome
          name="angle-right"
          size={24}
          color="black"/>
        </View>
      </View>
       
       <View style={{flexDirection:"row", borderBottomColor:"#ccc", borderBottomWidth:.3}}>
       <View style={{paddingLeft:20, paddingRight:20, paddingTop:25, paddingBottom:20, flex:9}}>
          <Text style={{fontWeight:"bold", fontSize:18}}>Privacy Policy</Text>
          <Text style={{paddingTop:3}}>View our privacy plicy</Text>
        </View>
        <View style={{flex:1, marginTop:40}}>
        <FontAwesome
          name="angle-right"
          size={24}
          color="black"/>
        </View>
       </View>
       
       <View style={{flexDirection:"row", borderBottomColor:"#ccc", borderBottomWidth:.3}}>
       <View style={{paddingLeft:20, paddingRight:20, paddingTop:25, paddingBottom:20, flex:9}}>
          <Text style={{fontWeight:"bold", fontSize:18}}>Share</Text>
          <Text style={{paddingTop:3}}>Share this app with friends and family</Text>
        </View>
        <View style={{flex:1, marginTop:40}}>
        <FontAwesome
          name="angle-right"
          size={24}
          color="black"/>
        </View>
       </View>
    

        
        </View>
      )
}