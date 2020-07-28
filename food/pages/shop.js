import React, { Component } from 'react';
import {StyleSheet , View , Text, Button} from 'react-native';

import Arrowicon from 'react-native-vector-icons/AntDesign';
import Pastdeal from './component/pastorderc';


 class shop extends Component{
     render(){
         return(                                          
            <View style={styles.container}>
                <View style={{marginRight:25,marginLeft:25}}>
                    <View style={styles.header}>
                        <Arrowicon name='arrowleft' color='#3F424E' size={24} />
                        <Text style={{fontWeight:"bold" ,fontSize:20}}>Past Order</Text>
                        <Arrowicon name='search1' color='#3F424E' size={24} />
                    </View>
                     <View>
                         <Pastdeal
                            dealnumber='Deal 1'
                            price='Rs 2000'
                            dealdetails='Lorem Ipsum is simply dummy text of the printing 
                            and typesetting industry. Lorem Ipsum has been the industry'
                         />
                         <Pastdeal
                            dealnumber='Deal 2'
                            price='Rs 200'
                            dealdetails='Lorem Ipsum is simply dummy text of the printing 
                            and typesetting industry. Lorem Ipsum has been the industry'
                         />
                         <Pastdeal
                            dealnumber='Deal 3'
                            price='Rs 5000'
                            dealdetails='Lorem Ipsum is simply dummy text of the printing 
                            and typesetting industry. Lorem Ipsum has been the industry'
                         />
                     </View>
                        
                </View>
                
            </View> 
         );
     }
 }
 const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ffff",
        
        
    },
    header:{
        flexDirection:"row",
        justifyContent:'space-between',
        marginTop:30,
    },
    
});
export default shop