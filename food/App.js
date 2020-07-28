import React,{Component} from 'react';
import {View, Text ,TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homeicon from 'react-native-vector-icons/MaterialCommunityIcons';
import Searchicon from 'react-native-vector-icons/Ionicons';
import Favicon from 'react-native-vector-icons/MaterialIcons';
import Shopicon from 'react-native-vector-icons/FontAwesome';
import Carticon from 'react-native-vector-icons/Entypo';
import Profileicon from 'react-native-vector-icons/AntDesign';
import signin from "./pages/signin";
import signup from "./pages/signup";
import home from "./pages/home";
import search from "./pages/search";
import fav from "./pages/fav";
import shop from "./pages/shop";
import profile from "./pages/profile";
import cart from "./pages/cart";
import meanuscr from "./pages/meanudeal";
import meanudealdetails from "./pages/meanudealdetails";

const stacknav = createStackNavigator();
const homescrstack = createStackNavigator();
const meanustack = createStackNavigator();
const tabnav = createBottomTabNavigator ();

const meanuclickscr = ({navigation}) =>(
        <meanustack.Navigator
        
        >
          <meanustack.Screen 
              name="fastfood"
              component={meanuscr}

              options={{
                title:'Fast Foods',
                headerTitleStyle: { 
                  textAlign:"center", 
                  
              },
                headerRight: () => (
                  <Profileicon
                    style={{marginRight: 20}}
                    name="search1"
                    size={20}
                    color="red"
                  />
                ),
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={()=>navigation.goBack()}
                  >
                  <Profileicon
                    style={{marginLeft: 20}}
                    name="arrowleft"
                    size={20}
                    color="red"
                  />
                  </TouchableOpacity>
                ),
              }}
                
          />

<meanustack.Screen 
              name="meanudealdetailscreen"
              component={meanudealdetails}

              options={{
                title:'Name of deal/food',
                headerTitleStyle: { 
                  textAlign:"center", 
                  
              },
                headerRight: () => (
                  <Profileicon
                    style={{marginRight: 20}}
                    name="search1"
                    size={20}
                    color="red"
                  />
                ),
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={()=>navigation.goBack()}
                  >
                  <Profileicon
                    style={{marginLeft: 20}}
                    name="arrowleft"
                    size={20}
                    color="red"
                  />
                  </TouchableOpacity>
                ),
              }}
                
          />

        </meanustack.Navigator>
)

const homescr =({navigation}) => (
    <homescrstack.Navigator headerMode='none'>
      <homescrstack.Screen 
          name='homemainpage'
          component={home}
         
      />
      <homescrstack.Screen 
          name='meanudeal'
          component={meanuclickscr}
         
      />
    </homescrstack.Navigator>
)

const tabscr = ({navigation}) => (
    <tabnav.Navigator
    tabBarOptions={{
      activeTintColor: '#FB1F1F',
      inactiveTintColor: '#EBE9F4',
    }}
    >
      <tabnav.Screen 
        name='home' 
        component={homescr}
        
        options={{
          activeTintColor: 'blue',
           tabBarLabel:'',
           activeTintColor: '#e91e63',
           tabBarIcon:({color,size}) => (
               <Homeicon style={{marginTop:20,}}  name='home' size={35} color={color}/>
               
           )

           
       }}
      />
      <tabnav.Screen 
        name='Search' 
        component={search}
        options={{
           tabBarLabel:'',
           tabBarIcon:({color,size}) => (
               <Searchicon style={{marginTop:20}}  name='md-search' size={35} color={color}/>
           )

           
       }}
      />
      <tabnav.Screen 
        name='fav' 
        component={fav}
        options={{
           tabBarLabel:'',
           tabBarIcon:({color,size}) => (
               <Favicon style={{marginTop:20}}  name='favorite' size={35} color={color} />
           )

           
       }}
      />
      <tabnav.Screen 
        name='cart' 
        component={cart}
        options={{
           tabBarLabel:'',
           tabBarIcon:({color,size}) => (
               <Carticon style={{marginTop:20}}  name='shopping-cart' size={35} color={color} />
           )

           
       }}
      />
      <tabnav.Screen 
        name='profile' 
        component={profile}
        options={{
           tabBarLabel:'',
           tabBarIcon:({color,size}) => (
               <Profileicon style={{marginTop:20}}  name='user' size={35} color={color} />
           )

           
       }}
      />
      <tabnav.Screen 
        name='shop' 
        component={shop}
        options={{
           tabBarLabel:'',
           tabBarIcon:({color,size}) => (
               <Shopicon style={{marginTop:20}}  name='shopping-bag' size={30} color={color} />
           )

           
       }}
      />
      
    </tabnav.Navigator>
)

function Nav({navigation}){
  return(
      <stacknav.Navigator headerMode='none'>
        <stacknav.Screen 
            name='signin'
            component={signin}
            options={{
              title:"Sign In"
            }}
        
        />
        <stacknav.Screen 
            name='signup'
            component={signup}
            options={{
              title:"Sign up"
            }}
        
        />
        <stacknav.Screen 
            name='homescreen'
            component={tabscr}
            options={{
              title:"screen"
            }}
        
        />
      </stacknav.Navigator>
  )
}


export default function App(){
  return(
    <NavigationContainer>
      <Nav />
    </NavigationContainer>
  )
}