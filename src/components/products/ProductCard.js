import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const ProductCard = ({p}) => {
  console.log('------------->', p);
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{uri: p?.imageUrl}} />
      <Text style={styles.productname}>{p?.name}</Text>
      <Text style={styles.productdescription}>
        {p?.description.toString(0, 20)} ...
      </Text>
      {/* <Text style={styles.productdescription}>{p?.category}</Text> */}
      <Text style={styles.productdescription}>{p?.price}</Text>
      <TouchableOpacity>
        <Text>Details</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>ADD TO CART</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: 'lightgray',
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10,
    width: '45%',
    borderRadius: 10,
  },
  image: {
    width: 120,
    height: 100,
  },
  productname: {
    fontSize: 8,
    fontWeight: '700',
    color: '#000',
  },
  productdescription: {
    fontSize: 10,
    fontWeight: '200',
    color: '#000',
  },
});
