import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native'

import Header from '../../components/header'
import { useLinkProps } from '@react-navigation/native';

export default function Report(props){
    return(
        <View>
        <Header>
            <Text>Case Reports</Text>
        </Header>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <Text>report</Text>
        </View>

        <TouchableOpacity style={{height:45, width:330, alignItems:"center", justifyContent:"center", marginTop:80, backgroundColor:"#000"}} 
          onPress={()=>{props.navigation.push('MakeReport')}}>
            <Text style={{color:"white"}}>Lets get started.....</Text>
          </TouchableOpacity>
        </View>
      )
}