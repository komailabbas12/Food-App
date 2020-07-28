import React, { Component } from 'react';
import { View ,Text} from 'react-native';

class meanudealcomponent extends Component {
    render(){
        return(
            <View style={{marginTop:10 ,borderBottomColor:'#B5B2B0',borderBottomWidth:1,marginLeft:25,marginRight:25 ,paddingBottom:8 }}>
            <View style={{flexDirection:'row' , justifyContent:'space-between'}}>
               
                    <Text style={{fontWeight:'bold', color:'black' , fontSize:20 }}>{this.props.dealnumber}</Text>
                    <Text style={{color:'#B5B2B0'}}>{this.props.dealprice}</Text>
               
            </View>
        <Text>{this.props.dealdetails}</Text>
            <View>
                
            </View>
        </View>

        )
    }
}
export default meanudealcomponent