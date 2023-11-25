import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PriceTable = ({title, price}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title} </Text>
      <Text style={styles.price}> ₹ {price} </Text>
    </View>
  );
};

export default PriceTable;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    alignItems: 'center',
  },

  title: {
    color: '#000',
  },
  price:{
   color:'#000',
   
  }
 
});
