import React, { Component } from 'react';
import {StyleSheet , View , Text, Image} from 'react-native';
import Staricon from 'react-native-vector-icons/FontAwesome';
import Favicon from 'react-native-vector-icons/MaterialIcons';
import Dessertsicon from 'react-native-vector-icons/Entypo';

class meanu extends Component{
    render(){
        return( 
            <View style={styles.meanurow}>
            <View style={{marginLeft:25}}>
                <Image 
                    style={{width:90 , height:100,borderRadius:10}}
                    source={this.props.imgurl}
                />
            </View>
            <View style={styles.meanutext}>
                <Text style={{marginBottom:18 , fontSize:18}}>{this.props.meanutext}</Text>
                <View style={{flexDirection:"row"}}>
                    <Staricon name='star' size={10} color={'#F9C817'} style={{marginRight:6}} />
                    <Text style={{color:'#A9A5A3', marginRight:5 , marginTop:-5}}>{this.props.rating}</Text>
                    <Text style={{color:'#A9A5A3',marginTop:-5}}>Ratings</Text>
                    <Dessertsicon name='dot-single' size={25} style={{marginTop:-8}} />
                    <Favicon name='favorite' size={24} color={'#FB1F1F'}  style={{marginTop:-8}}/>
                </View>
            </View>
            

        </View>

    )}
   }

   const styles = StyleSheet.create({
    meanurow:{
        height:100,
        flexDirection:"row",
        marginTop:25,
    },
    meanutext:{
        justifyContent:"center",
        marginLeft:25,
        borderBottomWidth:1,
        width:'60%',
        borderColor:'#A9A5A3',
    }

   })
   export default meanu