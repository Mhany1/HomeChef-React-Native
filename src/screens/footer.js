import * as React from 'react';
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native-web';

const Footer = () =>{
    
    return (
        <ScrollView>
            <View style={styles.all}>
                <Image
                    source={{ uri: 'https://homechef.imgix.net/https%3A%2F%2Fwww.homechef.com%2Fassets%2Fmarketing%2Fhow-it-works%2Forder-online-17e2140ff396ec11cf70ace0fce437f8d8aa234f994b1714aac1142ba901a09b.png?ixlib=rails-1.1.0&s=4ae214858a24091a0a4b6b4aa3f464f3' }}
                    style={styles.imgStyl}
                />
                <Text style={styles.footerPara}>Get special offers and exciting product updates straight in your inbox. Unsubscribe anytime!</Text>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    imgStyl: {
        width: '30%',
        margin: 'auto',
        height: '10vh',
        marginTop:20
        
    },
    footerPara:{
        fontSize: 18,
        textAlign: 'center',
        color: 'gray',
        margin:20
    },
    all:{
        position:'relative',
        buttom:'0%',
        backgroundColor:'#bfe1bf7e',
        marginTop: '50vh'
    }
})

export default Footer;