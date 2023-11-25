import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {cartData} from '../data/CartData';
import PriceTable from '../components/cart/PriceTable';
import Layout from '../components/layout/Layout';
import CartItems from '../components/cart/CartItem';

const Cart = ({navigation}) => {
  const [cartItems, setCartItems] = useState(cartData);
  return (
    <Layout>
      <Text style={styles.heading}>
        {cartItems.length > 0
          ? `You Have ${cartItems?.length} Items Left In your Cart`
          : 'OOPS Your Cart Is Empty !'}
      </Text>
      {cartItems.length > 0 && (
        <>
          <ScrollView>
            {cartItems.map(item => (
              <CartItems item={item} key={item.id} />
            ))}
          </ScrollView>
          <View>
            <PriceTable title={'Price'} price={'999'} />
            <PriceTable title={'Tax'} price={'1'} />
            <PriceTable title={'Shipping'} price={'1'} />
            <View style={styles.grandTotal}>
              <PriceTable title={'Grand Total'} price={'1001'} />
            </View>
            <TouchableOpacity
              style={styles.btnCheckout}
              onPress={() => navigation.navigate('CheckOut')}>
              <Text style={styles.btnCheckoutText}>CHECKOUT</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </Layout>
  );
};

export default Cart;

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    color: 'green',
    marginTop: 20,
  },
  grandTotal: {
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: '#ffffff',
    padding: 5,
    margin: 5,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnCheckout: {
    backgroundColor: '#000',
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: '90%',
    marginTop: 20,
    borderRadius: 10,
  },
  btnCheckoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
