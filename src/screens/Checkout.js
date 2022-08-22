import React, { useEffect, useState, useContext } from "react";
import Footer from './footer';
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { CartContext } from "../../CartContext";

const image = { uri: "https://www7.0zz0.com/2022/08/19/16/833193435.jpg" };
const Checkout = ({navigation}) => {
  const { getTotalPrice } = useContext(CartContext);
  let [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(getTotalPrice());
  });
  return (
    <>
     <ImageBackground source={image} style={{height:'100vh'}}>
      <Text style={styles.check}>Check Out</Text>
    <View style={styles.all}>
      <View style={styles.row}>
        <Text style={[styles.textitem,styles.total]}>Total</Text>
        <Text style={[styles.textitem,styles.one,styles.total]}>${total}</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.textitem,styles.total]}>Delivery</Text>
        <Text style={[styles.textitem,styles.total]}>$ 26</Text>
      </View>
      <View style={[styles.row,styles.subtotal]}>
        <Text style={[styles.textitem,styles.sub]}>Subtotal</Text>
        <Text style={[styles.textitem,styles.sub]}>${total + 26}</Text>
      </View>
    </View>
        <View  style={[{ width: "85%", margin: 'auto', borderRadius: 30, marginTop:"1",padding:10,borderRadius:7 }]}>
          <Button  onPress={()=>navigation.navigate('Thank')}
                    title="Order Now"
                    color="#008600"
            />
        </View>
    </ImageBackground>
    <Footer style={{position:'relative',buttom:0}}></Footer>
    </>
  );
};
export default Checkout;

const styles = StyleSheet.create({
    all:{
        width:'80%',
        // justifyContent:"space-around",
        borderBottomColor:'gray',
        borderBottomWidth:1,
        borderTopColor:'gray',
        borderTopWidth:1,
        borderRightColor:'gray',
        borderRightWidth:1,
        borderLeftColor:'gray',
        borderLeftWidth:1,
        marginLeft:'10%',
        marginTop:'10%',
        backgroundColor:'#bfe1bf69',
        borderRadius:10,
        // marginTop:" 13vh"
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-around',
        // borderBottomColor:'black',
        // borderBottomWidth:2
    },
    textitem:{
        fontSize:18,
        padding:7
    },
    one:{
        marginLeft:15
    },
    subtotal:{
        backgroundColor:'#bfe1bf69',
    },
    total:{
        // color:'#404851',
        fontWeight:'bold'
    },
    sub:{
        fontWeight:'bold',
        color:'#008600'
    },
    check:{
      textAlign:'center',
      fontWeight:'bold',
      fontSize:30,
      marginTop:"11vh"
    },
    btn:{
      width:'80%',
     marginTop:10
    }
})
