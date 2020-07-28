import React, { Component, useState } from 'react';
import {StyleSheet , View , Text, ScrollView , Image,} from 'react-native';
import Plusicon from 'react-native-vector-icons/Entypo';
import Percenticon from 'react-native-vector-icons/MaterialCommunityIcons';
import Arrowicon from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';


 class cart extends Component{
   
    constructor(props) {
        super(props);
        this.state = {
            selectedCheckbox: {},
          checkboxValue: [
            {
              label: 'Debit Card',
              value: 1,
            },
            {
              label: 'Net Banking',
              value: 2,
            },
            {
              label: 'By Hand',
              value: 3,
            },
            {
              label: 'others',
              value: 4,
            },
          ],
        };
      }
    CheckMe = selectedCheckbox => {
        this.setState({selectedCheckbox});
        console.log('data selected check boxses', selectedCheckbox); // update selected item
      };
     render(){
      
        const {checkboxValue, selectedCheckbox} = this.state;

         return(   
             <ScrollView> 
             <View style={{flex:1, backgroundColor:'#ffff'}}>                                     
            <View style={styles.container}>
                <View style={styles.headerArea}>
                    <View style={styles.imgArea}>
                        <Image
                            source={require('./images/pizza.jpg')}
                            style={{width:'100%' , height:'100%' , borderRadius:10}}
                        
                        ></Image>
                    </View>
                    <View style={styles.secondsection}>
                        <Text style={{fontWeight:'bold' ,fontSize:22}}>Hot Pizza</Text>
                        <Text style={{paddingTop:10}}>Fast Food</Text>
                        <View style={{flexDirection:'row' , marginTop:10}}>
                                <Text style={{fontSize:16}}>Quantity</Text>
                                <View style={{marginLeft:20, marginTop:4 ,borderWidth:1, borderRadius:5, borderColor:'#FB1F1F'}}>
                                    <TouchableOpacity
                                        onPress={this.count} 
                                    >
                                         <Plusicon name='plus' color='#FB1F1F' size={16} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{marginLeft:5, marginTop:4, marginRight:5,width:20,height:20,backgroundColor:'#F5F5F5' , borderRadius:100}}>
         <Text style={{paddingLeft:'28%'}}>2</Text>
                                </View>
                                <View style={{ marginTop:4,borderWidth:1, borderRadius:5, borderColor:'#FB1F1F'}}>
                                <Plusicon name='minus' color='#FB1F1F' size={16} />
                                </View>

                    </View>
                    <Text style={{color:'#FB1F1F' , marginTop:10}}>Hotel Details</Text>
                    </View>
                </View>
                {/*          coupon area           */}
                <View style={styles.codearea}>
                    <View style={{flexDirection:'row'}}>
                        <Percenticon name='brightness-percent' color='#FB1F1F' size={16} />
                        <View style={{flexDirection:'column', marginLeft:20 , marginTop:-3}}>
                                <Text>Apply Coupon Code</Text>
                                <View style={{borderWidth:1 ,width:'60%' ,borderRadius:7, marginTop:7 ,borderColor:'#FB1F1F'}}>
                                    <TouchableOpacity>
                                        <Text style={{textAlign:"center" ,color:'#FB1F1F'}}>Enter</Text>
                                    </TouchableOpacity>
                                </View>
                        </View>
                    </View>
                    <View style={{marginTop:5}}>
                        <Arrowicon name='arrow-right' color='#454854' size={16} />
                    </View>

                </View>
                <Text style={{fontWeight:'bold',marginTop:15}}>Amount Details</Text>
                <View style={styles.amountdetails}>
                        <Text>Food Charger</Text>
                        <Text>Rs 1000</Text>
                </View>
                <View style={styles.amountdetails}>
                        <Text>Tax</Text>    
                        <Text>Rs 100</Text>
                </View>
                <View style={styles.lastdetail}>
                        <Text>Offer</Text>
                        <Text style={{color:'red'}}>Rs 0</Text>
                </View>
                <View style={styles.lastdetail}>
                        <Text style={{fontWeight:"bold"}}>Total</Text>
                        <Text>Rs 100</Text>
                </View>
                <Text style={{fontWeight:'bold' , marginTop:10}}>Payment Method</Text>
                

               





            <View style={{flexDirection: 'column', margin: 5}}>
            {checkboxValue.map((option, indexInArray) => {
              return (
                <CircleCheckBox
                  key={option.value}
                  checked={option.value === selectedCheckbox.value} // for current element
                  onToggle={(value, index) => this.CheckMe(option)} // pass index of toggled element
                  labelPosition={LABEL_POSITION.RIGHT}
                  label={option.label}
                  styleLabel={{fontSize: 15, margin: 5}}
                />
              );
            })}
          </View>

















                <View style={{backgroundColor:'#FB1F1F', padding:8, borderRadius:10, marginTop:10,marginBottom:30}}>
                    <TouchableOpacity>
                        <Text style={{textAlign:"center" , fontSize:18, fontWeight:"bold",color:'#ffff'}}>Proceed</Text>
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
        
        
        marginLeft:25,
        marginRight:25,
        
    },
    headerArea:{
        flexDirection:'row',
        marginTop:20,
    },
    imgArea:{
        width:130,
        height:130,
    },
    secondsection:{
        marginLeft:15,
        flexDirection:'column',
        borderBottomWidth:1,
        width:'60%',
        borderColor:'#F2F2F2',
    },
    codearea:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:30,
        borderBottomWidth:1,
        paddingBottom:15,
        borderColor:'#F2F2F2',
        
    },
    amountdetails:{
        flexDirection:"row",
        justifyContent:'space-between',
        marginTop:10,
    },
    lastdetail:{
        flexDirection:"row",
        justifyContent:'space-between',
        marginTop:10,
        borderBottomWidth:1,
        borderColor:'#F2F2F2',
        paddingBottom:15,
    },
    payment:{
        flexDirection:"row",
    }
    

});
export default cart