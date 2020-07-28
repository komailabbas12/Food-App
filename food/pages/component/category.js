import React, { Component } from 'react';
import {StyleSheet , View , Text, ImageBackground} from 'react-native';

class category extends Component{
    render(){
        return( 

            <View style={{height:130 , width:130 , marginLeft:20 , borderRadius:100}}>
                         <ImageBackground
                            style={styles.img}
                            imageStyle={{ borderRadius: 10}}
                            source={this.props.imageUrl}
                         >
                        <Text style={styles.textcateg}>{this.props.categtext}</Text>
                         </ImageBackground>
                        
            </View>
        )}
    
    }
    const styles = StyleSheet.create({
        img:{
            flex: 1,
            resizeMode: "cover",
            justifyContent:'flex-end',
            
           
            
        },
        textcateg:{
            color:'#ffff',
             fontWeight:'bold', 
             justifyContent:'flex-end',
             textAlign:"center",
             marginBottom:15,
        }

    })

    export default category