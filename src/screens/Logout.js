import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, Button, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagedCarouselCard from "react-native-imaged-carousel-card";
import Footer from './footer';

const Logout=({navigation})=>{
   return(
    <Button title='Logout' onPress={()=>navigation.reset({
        index: 0,
        routes: [{ name: 'StartScreen' }],
   })}/>
   );
}
export default Logout;  