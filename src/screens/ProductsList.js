import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet,Button } from 'react-native';
import { getProducts } from '../services/ProductsService.js';
import  {Product} from '../components/Product.js';
import Footer from './footer';

export function ProductsList ({navigation}) {
  
function renderProduct({item: product}) {
    return (
      <Product {...product} 
      onPress={() => {
        navigation.navigate('ProductDetails', {
          productId: product.id,
        });
      }}
            />
    );
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  });

  return (
    <>
    <View >
        <Button style={{width:'100%'}} title='Logout' color='#008600' onPress={()=>navigation.reset({
                  index: 0,
                  routes: [{ name: 'StartScreen' }],
             })}/>

    </View>
<FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={products}
      renderItem={renderProduct}
    />
    
    <Footer></Footer>
    </>
   
    
  );
}
const styles = StyleSheet.create({
  productsList: {
    backgroundColor: '#eeeeee',
  },
  productsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  });