import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet,ImageBackground } from 'react-native';
import { CartContext } from '../../CartContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import Footer from './footer';


const image = { uri: "https://reactjs.org/logo-og.png" };

export function Cart ({navigation}) {
const {items, getItemsCount, getTotalPrice,increaseItem,decreaseItem,deleteItem} = useContext(CartContext);

  function Totals({}) {
    let [total, setTotal] = useState(0);
    useEffect(() => { 
      setTotal(getTotalPrice());
    });
    return (
      <>
        <View>
          <View style={styles.cartLineTotal}>
            <Text style={[styles.lineTotal]}>Total</Text>
            <Text style={styles.lineRight2}>$ {total}</Text>
         </View>
         <Button style={{marginButtom:'60vh'}} color='#008600'onPress={()=>{navigation.navigate('Checkout')}} title='Check Out'/>
      </View>

      <Footer ></Footer>
      </>
    );
  }
function renderItem({item}) {
    return (
       <View style={styles.cartLine}>
          <Text style={styles.lineLeft}>{item.product.name}  </Text>
            <View style={{marginLeft:40,flexDirection:'row'}}>
              <Icon onPress={()=>{increaseItem(item.id)}} style={styles.icons} name='plus' color={'red'} size={15}/> 
              <Text  style={styles.qyt}>{item.qty}</Text>
              <Icon onPress={decreaseItem.bind(this,item.id)} style={styles.icons} name='minus' color={'blue'} size={15}/> 
            </View>
          <Text style={styles.lineRight}>$ {item.totalPrice}</Text>
          <Icon onPress={deleteItem.bind(this,item.id)} style={styles.delete} name='trash' color={'blue'} size={14}/> 
       </View>
    )
  }

  

  return (
    <FlatList
      style={styles.itemsList}
      contentContainerStyle={styles.itemsListContainer}
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.product.id.toString()}
      ListFooterComponent={Totals}
    />
  );
}
const styles = StyleSheet.create({
  cartLine: { 
    flexDirection: 'row',
  },
  cartLineTotal: { 
    flexDirection: 'row',
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    backgroundColor:'#bfe1bf69',
    
  },
  lineTotal: {
    fontWeight: 'bold',
    fontSize: 18, 
    lineHeight: 40, 
    textAlign:'center', 
    paddingLeft:16
  },
  lineLeft: {
    fontSize: 17, 
    lineHeight: 40, 
    color:'gray' 
  },
  lineRight: { 
    flex: 1,
    fontSize: 18, 
    fontWeight: 'bold',
    lineHeight: 40, 
    color:'#333333', 
    textAlign:'right',
    marginRight:10
  },
  lineRight2:{
    flex: 1,
    fontSize: 18, 
    fontWeight: 'bold',
    lineHeight: 40, 
    color:'#333333', 
    textAlign:'right',
    marginRight:20
  },
  itemsList: {
    backgroundColor: '#eeeeee',
  },
  itemsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  icons:{
    fontSize: 18, 
    lineHeight: 40, 
    color:'green'
  },
  qyt:{
    marginHorizontal:6,
    fontSize: 20, 
    lineHeight: 38,
  },
  delete:{
    fontSize: 18, 
    lineHeight: 38, 
    color:'red'
  }
});