import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export function Product({name, price, image, onPress,title}) {
  return (
 
      <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        style={styles.thumb}
        source={image}
      />
      <View style={styles.infoContainer}>
        <View style={styles.viewname}>
           <Text style={styles.name}>{name}</Text>
        </View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.row}>
          {/* <Text style={styles.space}>|</Text> */}
          <Icon name='heart' size={15} color='red'/>
          <Text style={styles.space}>|</Text>
          <Icon name='yelp' size={15} color='orange'/>
          <Text style={styles.space}>|</Text>
          <Text style={{color:'gray'}}>milk-egg-wheat</Text>
          <Text style={styles.price}>$ {price} </Text>
        </View>
      </View>
    </TouchableOpacity>
    

    
  );
}


const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.5,
    shadowRadius: 6,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 13,
    marginHorizontal:5,
    height:280
  },
  thumb: {
    height: '50%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: '100%',
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 20,
    fontWeight:500,
    backgroundColor:'#008600',
    padding:4,
    borderRadius:6,
    color:'white',
    textAlign:'center'
  },
  price: {
    fontSize: 15,
    fontWeight: '500',
    // marginBottom: 6,
    padding:3,
    backgroundColor:'#bfe1bf69',
    marginLeft:23,
    borderRadius:'20%'
  },
  viewname:{
    width:200
  },
  title:{
    color:'#4C5C74',
    fontSize:14,
    marginTop:8,
    fontWeight: '700',
  },
  row:{
    flexDirection:'row',
    paddingTop:8
  },
  space:{
    paddingHorizontal:5
  }
});