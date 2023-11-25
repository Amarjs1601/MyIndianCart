import {StyleSheet, Text, View, Image, TouchableOpacity,ScrollView} from 'react-native';
import React, {useState} from 'react';

const CartItem = ({item}) => {
  console.log('ITEM-------->', item);

  const [qty, setQty] = useState(1);

  const handleAddQty = () => {
    if (qty === 20) return alert('you cant add quantity more than 20');
    setQty(prev => prev + 1);
  };
  const handleDecreaseQty = () => {
    if (qty <= 1) return;
    setQty(prev => prev - 1);
  };
  return (
    <View style={styles.container}>
      <Image source={{uri: item?.imageUrl}} style={styles.imageUrl} />

      <View>
        <Text style={styles.cartItemName}>{item?.name}</Text>
        <Text style={styles.cartItemPrice}>{item?.price}</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnQty} onPress={handleDecreaseQty}>
          <Text style={styles.btnQtyText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.btnQtyText}>{qty}</Text>
        <TouchableOpacity style={styles.btnQty} onPress={handleAddQty}>
          <Text style={styles.btnQtyText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: '#fff',
    width: '92%',
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
    paddingLeft: 20,
  },
  cartItemName: {
    color: '#000',
    paddingLeft:5,
    textAlign: 'center',
    fontSize: 10,
  },
  imageUrl: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    
  },
  cartItemPrice: {
    marginLeft: 20,
    color: '#000',
    fontSize: 10,
    paddingLeft:5,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginVertical: 20,
    marginHorizontal: 20,
  },
  btnCartText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  btnQty: {
    width: 20,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    marginHorizontal: 10,
    padding: 4,
  },
  btnQtyText: {
    width: 15,
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '900',
    color: '#000000',
  },
});
