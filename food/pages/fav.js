import React, { Component } from 'react';
import {StyleSheet , View , Text, Button} from 'react-native';


 class fav extends Component{
     render(){
         return(                                          
            <View style={styles.container}>
                <Text>This is fav  Screen</Text>
                
            </View> 
         );
     }
 }
 const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'center',
    }
});
export default fav