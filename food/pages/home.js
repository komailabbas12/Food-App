import React, { Component } from 'react';
import {StyleSheet , View , Text,ScrollView,TouchableOpacity} from 'react-native';
import Freedeliveryicon from 'react-native-vector-icons/Entypo';
import Fastdeliveryicon from 'react-native-vector-icons/MaterialCommunityIcons';
import Dessertsicon from 'react-native-vector-icons/Entypo';
import Drinkicon from 'react-native-vector-icons/Entypo';



import Categoty from './component/category.js';
import Meanu from './component/meanu.js'

 class home extends Component{
     render(){
         return(    
            <ScrollView >                                  
            <View style={styles.container}>
                {/*This is header text         */}
                <View style={styles.headertext}>
                    <Text style={{marginLeft:25, fontWeight:"bold" , fontSize:18}}>Hi Komail!</Text>
                    <Text style={{marginRight:25,}}>Whats's New</Text>
                </View>
                 {/*This is icons        */}
                 <View style={styles.iconrow}>
                    <View>
                            {/*   First icon start                      */}
                            <View style={{backgroundColor:'#F5F5F5' , padding:10, borderRadius:100}}>
                                <Freedeliveryicon name='calendar' size={30} color='#FB1F1F' />     
                            </View>
                            <Text style={{textAlign:"center" ,marginTop:2}}>Free</Text>
                            <Text style={{textAlign:"center" ,marginTop:-3}}>Delivery</Text>
                             {/*   First icon end                      */}
                    </View>
                    <View>
                            <View style={{backgroundColor:'#F5F5F5' , padding:10, borderRadius:100}}>
                                <Fastdeliveryicon name='truck-delivery' size={30} color='#FB1F1F' />
                            </View>
                            <Text style={{textAlign:"center" ,marginTop:2}}>Fast</Text>
                            <Text style={{textAlign:"center" ,marginTop:-3}}>Delivery</Text>
                    </View>

                    <View>
                            <View style={{backgroundColor:'#F5F5F5' , padding:10, borderRadius:100}}>
                                
                                <Dessertsicon name='cake' size={30} color='#FB1F1F' />
                            </View>
                            <Text style={{textAlign:"center" ,marginTop:2}}>Fresh</Text>
                            <Text style={{textAlign:"center" ,marginTop:-3}}>Desserts</Text>
                    </View>
                    <View>
                            <View style={{backgroundColor:'#F5F5F5' , padding:10, borderRadius:100}}>
                            <Drinkicon name='drink' size={30}  color='#FB1F1F'/>
                            </View>
                            <Text style={{textAlign:"center" ,marginTop:2}}>Fresh</Text>
                            <Text style={{textAlign:"center" ,marginTop:-3}}>Drinks</Text>
                    </View>
                 </View>
                 
                 {/*     horizenatal view of food                       */}
                
                    <View>
                    <Text style={{marginTop:25,fontWeight:'bold' , marginLeft:25 , fontSize:18}}>Offers For You</Text>
                    <View style={{height:130,  marginTop:25 , flexDirection:'row' }}>
                    
                     <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                     >
                            <Categoty  
                                    imageUrl={require('./images/pakfood.png')}
                                    categtext="Pakistani Food"
                            />
                            <Categoty  
                                    imageUrl={require('./images/spicyburger.jpg')}
                                    categtext="Spicy Burger"
                            />
                            <Categoty  
                                    imageUrl={require('./images/junkfood.jpg')}
                                    categtext="Spicy Burger"
                            />
                            <Categoty  
                                    imageUrl={require('./images/pizza.jpg')}
                                    categtext="Pizza"
                            />
                     </ScrollView>
                     
                 </View>   
                   {/*     horizenatal view of food  End                     */} 
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View>
                        <Text style={{marginTop:25,fontWeight:'bold' , marginLeft:25 , fontSize:18}}>Menu</Text>
                    </View>
                    <View style={{flexDirection:'row', marginTop:25, marginRight:25}}>
                        <Fastdeliveryicon name='filter-variant' size={20} color='red'/>
                        <Text style={{marginLeft:3}}>Filter</Text>
                    </View>
                </View>
                {/*         meanu                    */}
                
                <View>
                    <TouchableOpacity
                        onPress={()=> this.props.navigation.navigate('meanudeal')}
                    >
                    <Meanu 
                        imgurl={require('./images/fast_food.jpg')}
                        meanutext="Fast Food"
                        rating="4.6"
                    />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity>
                    <Meanu 
                        imgurl={require('./images/Desserts.jpg')}
                        meanutext="Desserts"
                        rating="4.4"
                    />
                    </TouchableOpacity>
                </View>
                <View style={{marginBottom:12}}>
                    <TouchableOpacity>
                    <Meanu 
                        
                        imgurl={require('./images/drinks.jpg')}
                        meanutext="Drink"
                        rating="4.9"
                    />
                    </TouchableOpacity>
                </View>
                </View>
               
            </View> 
            </ScrollView>
            
           
         );
     }
 }
 
 const styles = StyleSheet.create({
    container:{  
        backgroundColor:'#FFFF',   
    },
    headertext:{
        marginTop:25,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    iconrow:{
        marginTop:25,
        flexDirection:'row',
        justifyContent:'space-between',
        marginRight:25,
        marginLeft:25,
    },
    
    
    
});
export default home