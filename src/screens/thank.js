import * as React from 'react';
import { View, ScrollView, Text, StyleSheet, ImageBackground, Button } from 'react-native-web';
import Footer from './footer';

const image = { uri: "https://www7.0zz0.com/2022/08/19/16/833193435.jpg" };

const Thank = ({navigation}) =>{
    return (
        <ScrollView>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>Thanks..</Text>
                <Text style={styles.textOrder}>Your Order Equip Now</Text>
                <View style={[{ width: "43%", margin: 'auto', borderRadius: 30, marginBottom: 10,padding:10,borderRadius:7 }]}>
                    <Button onPress={()=>navigation.navigate('Home')} title="New Order" color="#008600"  />
                </View>
            </ImageBackground>
            <Footer></Footer>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        height: '100vh',
        textAlign: 'center',
        width: '100%',
        margin:'auto'
    },
    text:{
        color:'#fff',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop:'33vh',
        lineHeight:'1.5'
    },
    textOrder:{
        color:'#fff',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
       
    }
})

export default Thank;