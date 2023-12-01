import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const OrderItem = ({order}) => {
  return (
    <View style={styles.container}>
      <View style={styles.orderInfo}>
        <Text style={{width: '30%'}}>OrderId : {order.id}</Text>
        <Text style={{width: '40%'}}>OrderDate : {order.date}</Text>
      </View>
      <View>
        <Text>Product Name : {order.productInfo.name}</Text>
        <Text>Product Price : ₹ {order.productInfo.price}</Text>
        <Text>Product Quantity : {order.productInfo.qty}</Text>
        <Text>Total Amount : ₹ {order.totalAmount}</Text>
        <Text>payment Mode : {order.paymenttMode}</Text>
        <Text style={styles.status}>Order Status : {order.status}</Text>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },

  orderInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    paddingBottom: 5,
  },
  status:{
    borderTopWidth:1,
    fontWeight:'900',
    color:'#000000',
    marginTop:10,
    padding:5
  }
});
