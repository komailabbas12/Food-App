import React, { Component } from 'react';
import {StyleSheet , View , Text, TouchableOpacity} from 'react-native';
import Meanudealdesign from './component/meanudealcomponent';


class meanudeal extends Component {
    render(){
        return(
            <View>
                <TouchableOpacity
                    onPress={()=> this.props.navigation.navigate('meanudealdetailscreen')}
                >
                <Meanudealdesign 
                    dealnumber='Deal 1'
                    dealprice='Rs 100'
                    dealdetails='Although a vast variety of food can be "cooked fast", "fast food" is
                    a commercial term'
                />
                 </TouchableOpacity>
                <Meanudealdesign 
                    dealnumber='Deal 2'
                    dealprice='Rs 500'
                    dealdetails='Although a vast variety of food can be "cooked fast", "fast food" is
                    a commercial term'
                />
                 <Meanudealdesign 
                    dealnumber='Deal 3'
                    dealprice='Rs 400'
                    dealdetails='Although a vast variety of food can be "cooked fast", "fast food" is
                    a commercial term'
                />
                
           </View> 
          
        )
    }
}


export default meanudeal