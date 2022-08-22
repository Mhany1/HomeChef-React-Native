import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './Home';
import { ProductsList } from './ProductsList';
import StartScreen from './StartScreen';

const homename = 'Home'
const productname = 'ProductsList'
const startname = 'StartScreen'

const Tab = createBottomTabNavigator();

export function Maincontainer(){
   return(
    <NavigationContainer>
       <Tab.Navigator
        initialRouteName={homename}
        screenOptions={({route})=>({
          tabBarIcon:({focused,color,size})=>{
            let iconname;
            let rn = route.name

            if(rn === homename){
            iconname=focused ? 'home' : 'home-outLine'
            } else if(rn === productname){
                iconname=focused ? 'product' : 'product-outLine'
            }else if(rn === startname){
                iconname=focused ? 'login' : 'login-outLine'
            } 

            return <Ionicons name={iconname} size={size} color={color}/>
          },
        })}
       >

        <Tab.Screen name={homename} component={Home}/>
       </Tab.Navigator> 
    </NavigationContainer>
   )
}