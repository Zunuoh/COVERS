import React from 'react';
import {View, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Faq =()=>{
    return(
        <View style={{flex:1}}>
            <View style={{padding:30}}>
            <View style={{paddingTop:30}}>
               <Text style={{fontSize:30, fontWeight:"bold"}}>FAQ</Text>
           </View>
           <ScrollView>
           <View style={{paddingTop:45}}>
               <Text style={{fontWeight:"bold", fontSize:16}}>What is coronavirus?</Text>
           </View>
           <View style={{paddingTop:40}}>
               <Text style={{fontWeight:"bold", fontSize:16}}> What are the Symptoms of COVID-19?</Text>
           </View>
           <View style={{paddingTop:40}}>
               <Text style={{fontWeight:"bold", fontSize:16}}>How does COVID-19 spread?</Text>
           </View>
           <View style={{paddingTop:40}}>
               <Text style={{fontWeight:"bold", fontSize:16}}>What can I do to protect myself and prevent</Text>
               <Text style={{fontWeight:"bold", fontSize:16}}>the spread of the disease</Text>
           </View>
           <View style={{paddingTop:40}}>
               <Text style={{fontWeight:"bold", fontSize:16}}>How likely am I to catch COVID-19?</Text>
           </View>
           <View style={{paddingTop:40}}>
               <Text style={{fontWeight:"bold", fontSize:16}}>Should I worry about COVID-19?</Text>
           </View>
           <View style={{paddingTop:40}}>
               <Text style={{fontWeight:"bold", fontSize:16}}>Who is at risk of developing severe illness?</Text>
           </View>
           <View style={{paddingTop:40}}>
               <Text style={{fontWeight:"bold", fontSize:16}}>Are antibiotics effective for preventing or</Text>
               <Text style={{fontWeight:"bold", fontSize:16}}>treating the COVID-19?</Text>
           </View>
           <View style={{paddingTop:40}}>
               <Text style={{fontWeight:"bold", fontSize:16}}>Are there any medicines or therapy that can</Text>
               <Text style={{fontWeight:"bold", fontSize:16}}>prevent or cure COVID-19</Text>
           </View>
           <View style={{paddingTop:40}}>
               <Text style={{fontWeight:"bold", fontSize:16}}>Is COBID-19 the same as SARS?</Text>
           </View>
           <View style={{paddingTop:40}}>
               <Text style={{fontWeight:"bold", fontSize:16}}>Should I wear a mask to protect myself</Text>
           </View>
           <View style={{paddingTop:40}}>
               <Text style={{fontWeight:"bold", fontSize:16}}>How do I put on, use, take off and dispose of a mask?</Text>
           </View>
           


           </ScrollView>


            </View>
          
        </View>
        );
}
export default Faq;