import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const ReportScreen =(props)=>{
    return(
        <View style={{flex:1, padding:20}}>
            <View style={{paddingTop:30}}>
               <Text style={{fontSize:40, fontWeight:"bold"}}>Make report</Text>
               <Text style={{paddingTop:20, fontWeight:"bold"}}>Who are you reporting?</Text>
            </View>
            <View style={{flexDirection:"row", paddingTop:20}}>
                <Text>Self</Text>
                <Text style={{paddingLeft:30}}>Other Individual</Text>
            </View>

            <View>
                <Text style={{fontWeight:"bold", fontSize:15, paddingTop:15}}>Location or Digital Address</Text>
            </View>
            
            <View style={{marginTop:30}}>
                <TextInput style={{width:340, height:50, borderColor:"#ccc", borderWidth:1, padding:10}}
                placeholder="eg. GA-492-74"
                />
            </View>

            <View style={{flexDirection:"row", marginTop:30}}>
                <View style={{flex:6}}>
                    <Text style={{fontWeight:"bold"}}>Nearest Landmark</Text>
                    <TextInput style={{width:180, height:50, borderColor:"#ccc", borderWidth:1, padding:10, marginTop:5}}
                placeholder="eg. Goil Fuel Station"
                />
                </View>
                <View style={{flex:4}}>
                    <Text style={{fontWeight:"bold"}}>Alternate Contact</Text>
                    <TextInput style={{width:130, height:50, borderColor:"#ccc", borderWidth:1, padding:10, marginTop:5}}
                placeholder="eg. Contact Number"/>
                </View>
            </View>
            <View style={{paddingTop:20}}>
                    <Text style={{fontWeight:"bold"}}>Description</Text>
                    <TextInput style={{width:340, height:100, borderColor:"#ccc", borderWidth:1, padding:10, marginTop:5}}
                placeholder="Type something"/>
            </View>

            <View>
            <TouchableOpacity style={{height:45, width:330, alignItems:"center", justifyContent:"center", marginTop:80, backgroundColor:"#000"}}>
            <Text style={{color:"white"}}>Report Case</Text>
          </TouchableOpacity>
            </View>
            
        </View>
    );
}

export default ReportScreen;