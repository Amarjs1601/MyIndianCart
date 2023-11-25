import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Layout from '../components/layout/Layout';

const CheckOut = ({navigation}) => {
    const handleCOD = () =>{
       alert('Your Order Has Been Placed Successfuly')
    }

    const handleOnline = () =>{
        alert('Your Redirecting to Payment Gateway')
       navigation.navigate("Payment")
    }
  return (
    <Layout>
    <View style={styles.container}>
      <Text style={styles.heading}>Payment Options</Text>
      <Text style={styles.totalAmount}>Total Amount : ₹1000</Text>

      <View style={styles.paymentCard}>
        <Text style={styles.paymentMode}>Select you Payment Mode</Text>

        <TouchableOpacity style={styles.paymentBtn} onPress={handleCOD}>
          <Text style={styles.cashOnDELIVERY}>Cash On Delivery</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.paymentBtn} onPress={handleOnline}>
          <Text style={styles.onlineCard}>
            Online (CREDIT CARD | DEBIT CARD)
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    </Layout>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    //  width:'100%',
    justifyContent: 'center',
    height: '90%',
    // backgroundColor:'red'
  },
  heading: {
    fontSize: 30,
    textAlign: 'center',
    width: '100%',
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 25,
  },
  totalAmount: {
    width: '100%',
    textAlign: 'center',
    color: 'grey',
    marginBottom: 20,
    fontSize: 20,
  },
  paymentMode: {
    width: 300,
    // textAlign: 'center',
    color: 'grey',
    marginBottom: 10,
  },
  cashOnDELIVERY: {
    width: 300,
    textAlign: 'center',
    color: '#FFF',
    // alignItems:'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  onlineCard: {
    width: 300,
    textAlign: 'center',
    color: '#FFF',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  paymentCard: {
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 10,
    padding: 30,
  },
  paymentBtn: {
    backgroundColor: '#000',
    height: 40,
    borderRadius: 10,
    marginVertical: 10,
  },
});
