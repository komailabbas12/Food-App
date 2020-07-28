import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Passwordicon from 'react-native-vector-icons/Foundation';
import Facebookicon from 'react-native-vector-icons/EvilIcons';
import Emailicon from 'react-native-vector-icons/Entypo';
import Contacticon from 'react-native-vector-icons/MaterialIcons';




export default function signup({navigation}) {
    const [name, setname] = useState("")
    const [phone, setphone] = useState("")
    const [password, setpassword] = useState("")
    const [address, setaddress] = useState("")
    const [email, setemail] = useState("")
    const [cnic, setcnic] = useState("")

    const PostData = () => {

        fetch('https://quellxcode-test.herokuapp.com/api/user/signup', {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                phone: phone,
                address: address,
                email: email,
                password: password,
                cnic: cnic

            })
        })
            .then(response => response.json())
            .then(jason => {
                console.log(jason);
            })

            .catch(error => {
                console.log(error);
            });


    }



    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.title}>
                    <TouchableOpacity style={styles.title1}
                        onPress={() => navigation.navigate('signup')}
                    >
                        <Text style={{ color: '#ffff', fontWeight: "bold", fontSize: 20 }}>SIGN UP
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.title2}
                        onPress={() => navigation.navigate('signin')}
                    >
                        <Text style={{ color: '#ffff', fontSize: 20 }}>SIGN IN
                            </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.userfield2}>
                    <AntDesign name="user" size={25} color={'#ffff'} />
                    <TextInput style={styles.textInput}
                        placeholder='Name'
                        onChange={(name) => setname(name)}
                        placeholderTextColor="#ffff"

                    ></TextInput>
                </View>
                <View style={styles.userfield2}>
                    <AntDesign name="user" size={25} color={'#ffff'} />
                    <TextInput style={styles.textInput}
                        placeholder='phone number'
                        placeholderTextColor="#ffff"
                        onChangeText={(phone) => setphone(phone)}

                    ></TextInput>
                </View>
                <View style={styles.userfield2}>
                    <AntDesign name="user" size={25} color={'#ffff'} />
                    <TextInput style={styles.textInput}
                        placeholder='address'
                        placeholderTextColor="#ffff"
                        onChangeText={(address) => setaddress(address)}

                    ></TextInput>
                </View>
                <View style={styles.userfield2}>
                    <AntDesign name="user" size={25} color={'#ffff'} />
                    <TextInput style={styles.textInput}
                        placeholder='email'
                        placeholderTextColor="#ffff"
                        onChangeText={(email) => setemail(email)}

                    ></TextInput>
                </View>
                <View style={styles.userfield2}>
                    <Passwordicon name="key" size={25} color={'#ffff'} />
                    <TextInput style={styles.textInput}
                        secureTextEntry={true}
                        placeholder='Password'
                        placeholderTextColor="#ffff"
                        onChangeText={(password) => setpassword(password)}
                    ></TextInput>
                </View>
                <View style={styles.userfield2}>
                    <Contacticon name="call" size={25} color={'#ffff'} />
                    <TextInput style={styles.textInput}

                        placeholder='CNIC'
                        placeholderTextColor="#ffff"
                        onChangeText={(cnic) => setcnic(cnic)}
                    ></TextInput>
                </View>

                <View style={{ width: '77%', marginTop: 40, }} >
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => PostData()}
                    >
                        <Text style={{ color: '#ffff', fontWeight: "bold", fontSize: 20, }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ color: '#ffff', marginTop: 40, fontWeight: "bold", fontSize: 18 }}>Or Signup with</Text>
                </View>
                <View style={styles.icon}>
                    <View style={{ width: 53, height: 53, paddingTop: 3, borderRadius: 100, borderWidth: 2, borderColor: '#ffff', marginTop: 25, alignItems: "center" }}>
                        <Facebookicon name='sc-facebook' color={'#ffff'} size={52} />
                    </View>
                    <View style={{ marginLeft: 25, width: 53, height: 53, paddingTop: 5, borderRadius: 100, borderWidth: 2, borderColor: '#ffff', marginTop: 25, alignItems: "center" }}>
                        <Emailicon name='mail' color={'#ffff'} size={34} />
                    </View>

                </View>
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: 'red',
    },
    title: {
        flexDirection: 'row',
        marginTop: 100,
        marginBottom: 30

    },
    title1: {
        marginRight: 100,

    },

    userfield: {
        flexDirection: 'row',

        borderBottomWidth: 1,
        borderBottomColor: '#ffff',

        width: '77%',
        marginTop: 70,


    },
    textInput: {

        marginTop: -10,
        paddingLeft: 10,
        color: '#ffff',


    },
    userfield2: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ffff',

        width: '77%',
        marginTop: 20,
    },
    btn: {
        borderWidth: 2,
        borderColor: '#ffff',
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 20,

    },
    icon: {
        flexDirection: "row",
        marginTop: 15,
    }

});

