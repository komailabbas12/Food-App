import React, { Component, useState } from 'react';
import {StyleSheet , View , Text, TextInput , TouchableOpacity, ImageBackground} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Passwordicon from 'react-native-vector-icons/Foundation';
import Facebookicon from 'react-native-vector-icons/EvilIcons';
import Emailicon from 'react-native-vector-icons/Entypo';


export default function signin({navigation}){
        const [username, setusername] = useState('')
        const [password, setpassword] = useState('')

        const postdata =() =>{
            navigation.navigate('homescreen')
            fetch('https://quellxcode-test.herokuapp.com/api/user/login' , {
                method:'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email:username,
                    password:password
                })
            })
            .then(response => response.json())
             .then(resp =>{
                 if(resp.message =='login successfull'){
                    navigation.navigate('homescreen')
                 }
                 console.log(resp)
             })
        }
     
         return(                                          
            <View style={styles.container}>
               
                <View style={styles.title}>
                     
                        
                        <TouchableOpacity style={styles.title1}
                            onPress={() => navigation.navigate('signup')}
                        >
                            <Text style={{color:'#ffff',fontSize:20}}>SIGN UP
                            </Text>  
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.title2}
                            onPress={() => this.props.navigation.navigate('signin')}
                        >
                            <Text style={{color:'#ffff',fontWeight:"bold" , fontSize:20}}>SIGN IN
                            </Text>
                        </TouchableOpacity>
                        
                </View>
                
                <View style={styles.userfield}>
                    <AntDesign name="user" size={25} color={'#ffff'} />
                    <TextInput style={styles.textInput}
                        placeholder='Enter Email Addrees'
                        placeholderTextColor="#ffff"
                        onChangeText={(username) => setusername(username)}
                        
                    ></TextInput>
                </View>
                <View style={styles.userfield2}>
                    <Passwordicon name="key" size={25} color={'#ffff'} />
                    <TextInput style={styles.textInput}
                        secureTextEntry={true}
                        placeholder='Enter your password'
                        placeholderTextColor="#ffff"
                        onChangeText={(pass) => setpassword(pass)}
                    ></TextInput>
                </View>
                <View style={{marginLeft:"50%", marginTop:10}}>
                    <Text style={{color:'#ffff'}}>Forget password?</Text>
                </View>
                <View style={{width:'77%'}} >
                    <TouchableOpacity  style={styles.btn}
                     onPress={() => postdata()}>
                        <Text style={{color:'#ffff' ,fontWeight:"bold" , fontSize:20}}>Sign In</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{color:'#ffff' , marginTop:25,fontWeight:"bold" , fontSize:18}}>Or Sign in with</Text>
                </View>
                <View style={{flexDirection:"row"}}>
                    <View style={{ width:53, height:53,paddingTop:3,borderRadius:100,borderWidth:2,borderColor:'#ffff',marginTop:25,alignItems:"center"}}>
                        <Facebookicon  name='sc-facebook' color={'#ffff'} size={52} />   
                    </View>
                    <View style={{ marginLeft:25,width:53, height:53,paddingTop:5,borderRadius:100,borderWidth:2,borderColor:'#ffff',marginTop:25,alignItems:"center"}}>
                        <Emailicon  name='mail' color={'#ffff'} size={34} />   
                    </View>
                </View>
                <View style={{marginTop:50}}>
                <Text style={{color:'#ffff'}}>Need Help?</Text>
                </View>
                
           
                
               
                
            </View> 
         );
     }
 
 const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'center',
        backgroundColor:'red',
    },
    title:{
        flexDirection:'row',
        
    },
    title1:{
        marginRight:100,
        
    },
    
    userfield:{
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ffff',
        
        width:'77%',
        marginTop:70,
        
       
    },
    textInput: {
        
        marginTop:  -10,
        paddingLeft: 10,
        color:'#ffff',
        
        
    },
    userfield2:{
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ffff',
        
        width:'77%',
        marginTop:20,
    },
    btn:{
        borderWidth:2,
        borderColor:'#ffff',
        padding:10,
        borderRadius:10,
        alignItems: "center",
        marginTop:20,
       
    },
    icon:{
        flexDirection:"row",
        marginTop:15,
    }
   
});
