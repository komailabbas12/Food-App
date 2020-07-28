import React, { Component } from 'react';
import {StyleSheet , View , Text,TouchableOpacity} from 'react-native';

class pastorderc extends Component{
    render(){
        return( 
            <View style={styles.body}>
                            <View style={{flexDirection:'row' ,justifyContent:'space-between'}}>
                                <Text style={{fontSize:18, fontWeight:'bold'}}>{this.props.dealnumber}</Text>
                                <Text>{this.props.price}</Text>
                            </View>
                            <View style={{flexDirection:'row' ,justifyContent:'space-between'}}>
                                <View style={{width:'70%'}}>
                                    <Text>{this.props.dealdetails}</Text>
                                </View>
                                <TouchableOpacity
                                    style={{backgroundColor:'#FB1F1F',width:100,height:32, borderRadius:10,justifyContent:"center"}}
                                >
                                    <Text style={{color:'#FFFF',textAlign:"center"}}>REORDER</Text>
                                </TouchableOpacity>
                            </View>
                     </View>
        )}
    
    }
    const styles = StyleSheet.create({
        
        body:{
            borderWidth:1,
            
            marginTop:30,
            padding:15,
            
              borderRadius: 10,
              // To round image corners
             // overflow: 'hidden',
              borderColor: '#999',
              borderWidth: 0.5,
             
              backgroundColor: '#FFF',
              // Android shadow
              elevation: 15,      
        }
    })

    export default pastorderc