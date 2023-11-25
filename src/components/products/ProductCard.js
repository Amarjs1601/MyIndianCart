import {StyleSheet, Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({p}) => {
  // console.log('------------->', p);

  const navigation = useNavigation()

  //////// More Details Btn /////////////////
  const handleMoreBtn = (id) =>{
    navigation.navigate('ProductDetails',{id:id})
    // console.log("vvvvvvvvvvvv",id)
    
  }

  /////// ADD TO CART ////////

  const handleAddToCart = () =>{
    alert('Item Added')
  }
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{uri: p?.imageUrl}} />
      <Text style={styles.productname}>{p?.name}</Text>
      <Text numberOfLines={2} style={styles.productdescription}>
        {p?.description.toString(0, 30)} ...
      </Text>
      {/* <Text style={styles.productdescription}>{p?.category}</Text> */}
      <Text style={styles.productdescription}>{p?.price}</Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={()=>{handleMoreBtn(p.id)}}>
          <Text style={styles.btnText}>Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCard} onPress={handleAddToCart}>
          <Text style={styles.btnText}> ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: 'lightgray',
    marginVertical: 0,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 8,
    width: '45%',
    borderRadius: 10,
   

  
  },
  image: {
    width: '100%',
    height: 100,
    marginBottom: 10,
  },
  productname: {
    fontSize: 8,
    fontWeight: '900',
    color: '#000',
    marginBottom: 8,
  },
  productdescription: {
    fontSize: 8,
    padding:2,
    fontWeight: '200',
    color: '#000',
  },
  btnContainer:{
    flexDirection:'row',
    alignItems:'center',
   justifyContent:'space-evenly',
   marginTop:5 
  },
  btn:{
    backgroundColor:'#000',
    justifyContent:'center',
    width:73,
    height:20,
    borderRadius:5
  },
  btnCard:{
    backgroundColor:'orange',
    justifyContent:'center',
    width:73,
    height:20,
    borderRadius:5
  },
  btnText:{
    color:'#fff',
    textAlign:'center',
    fontSize:9,
    fontWeight:'900'
  }
});
