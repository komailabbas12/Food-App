import React, { Component } from 'react';
import {StyleSheet , View , Text, Button,Image,ImageBackground , ScrollView} from 'react-native';

import Plusicon from 'react-native-vector-icons/Entypo';

import EditIcon from 'react-native-vector-icons/EvilIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Recommend from './component/category';

class meanudealdetails extends Component {
    render(){
        return(
        <ScrollView>
            <View style={{backgroundColor:'#ffff' , flex:1}}>
                <View style={styles.container}>
                    <View style={{width:'100%' }}>
                        <ImageBackground 
                            style={{ height:200,resizeMode: "cover",                         
                            justifyContent: "center" }}
                            imageStyle={{ borderRadius: 10 }}
                            source={require('./images/spicyburger.jpg')}
                        />
                    </View>
                    <View style={styles.titletext}>
                            <Text style={{fontWeight:'bold' , fontSize:18}}>Hot Chicken Burger</Text>
                            <View style={styles.addbtn}>
                                <Text>Add</Text>
                            </View>
                            
                    </View>
                    <View style={{flexDirection:'row' , marginTop:16}}>
                                <Text style={{fontSize:16}}>Quantity</Text>
                                <View style={{marginLeft:20, marginTop:4}}>
                                    <Plusicon name='plus' color='#FB1F1F' size={16} />
                                </View>
                                <View style={{marginLeft:5, marginTop:4, marginRight:5,width:20,height:20,backgroundColor:'#F5F5F5' , borderRadius:100}}>
                                        <Text style={{paddingLeft:'28%'}}>2</Text>
                                </View>
                                <View style={{ marginTop:4}}>
                                <Plusicon name='minus' color='#FB1F1F' size={16} />
                                </View>

                    </View>
                    <View style={{flexDirection:'row' , marginTop:16 , marginLeft:-6}}>
                        <Plusicon name='location-pin' color='#FB1F1F' size={35}  />
                        <Text style={{marginTop:6, marginLeft:6}}>Delivery in 25 mins</Text>
                    </View>
                    <View style={{flexDirection:'row' , marginTop:16}}>
                        <Text style={{marginTop:6 ,marginLeft:6 ,fontWeight:'100'}}>Address</Text>
                        <EditIcon name='pencil' color='#FB1F1F' size={25}  style={{marginLeft:6 , marginTop:6}}/>
                    </View>
                    <View style={styles.ordernowbtn}>
                        <TouchableOpacity>
                            <Text style={{textAlign:"center" ,fontSize:16 ,color:'#ffff'}}>Order Now</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{borderBottomWidth:3 , borderColor:'#F5F5F5' , marginTop:25}}>

                    </View>
                    <View>
                        <Text style={{fontWeight:'bold' , fontSize:18 , marginTop:10}}>Recommend</Text>
                    </View>
                    <View style={{flexDirection:'row' , marginTop:15 , marginLeft:-25}}>
                        <Recommend
                            imageUrl={require('./images/pakfood.png')}
                            categtext='Pakistani Food'
                        />
                        <Recommend
                            imageUrl={require('./images/fast_food.jpg')}
                            categtext='Fast Food'
                        />
                    </View>

                </View>
            </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
  container:{
     
      marginRight:25,
      marginLeft:25,
      marginTop:15,
      
  },
  titletext:{
      flexDirection:'row',
      justifyContent:'space-between',
     marginTop:15,
  },
  addbtn:{
      
      paddingLeft:8,
      paddingRight:8,
      borderWidth:2, 
      borderRadius:15,
      borderColor:'#FB1F1F',  
  },
  ordernowbtn:{
      justifyContent:"center",
      padding:10,
      backgroundColor:'#FB1F1F',
      marginTop:25,
      borderRadius:20,
  }
})

export default meanudealdetails;