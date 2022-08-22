import React, { useEffect, useState, useContext } from "react";
import Footer from './footer';
import {
  Text,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Button
} from "react-native";
// import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getProduct } from "../services/ProductsService.js";
import { CartContext } from "../../CartContext.js";

export function ProductDetails({ route,navigation }) {
  const { productId } = route.params;
  const [product, setProduct] = useState({});

  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    setProduct(getProduct(productId));
  });
  
  

  return (
    <SafeAreaView>
      <ScrollView>
      <Button style={{width:'100%'}} title='Logout' color='#008600' onPress={()=>navigation.reset({
                  index: 0,
                  routes: [{ name: 'StartScreen' }],
             })}/>

        <Image style={styles.image} source={product.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>$ {product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
           <Button color='#008600' onPress={()=>addItemToCart(product.id)} title="Add to cart" />
        </View>
        <Footer></Footer>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: "black",
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  image: {
    height: 300,
    width: "100%",
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    // color:'#4C5C74'
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    color: "#787878",
    marginBottom: 16,
  },
});
