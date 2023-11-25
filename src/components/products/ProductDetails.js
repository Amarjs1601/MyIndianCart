import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ProductsData} from '../../data/ProductsData';
import Layout from '../layout/Layout';

const ProductDetails = ({route}) => {
  const [pDetials, setPDetails] = useState({});
  const [qty, setQty] = useState(1);

  /////-------->get product details

  useEffect(() => {
    // find product details
    const getProducts = ProductsData.find(p => {
      return p?.id === params?.id;
    });
    setPDetails(getProducts);
  }, [params?.id]);

  // console.log("ROUTE-------->",route)

  // handle function for - +

  const handleAddQty = () => {
    if (qty === 20) return alert('you cant add quantity more than 20');
    setQty(prev => prev + 1);
  };
  const handleDecreaseQty = () => {
    if (qty <= 1) return;
    setQty(prev => prev - 1);
  };

  const {params} = route;

  return (
    <Layout>
      <Image source={{uri: pDetials?.imageUrl}} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{pDetials?.name}</Text>
        <Text style={styles.price}>Price : {pDetials?.price}</Text>
        <Text style={styles.desc}>{pDetials?.description}</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btnCart}
            onPress={() => {
              alert(`${qty} items added in cart`);
            }}
            disabled={pDetials?.quantity <= 0 }
            >
            <Text style={styles.btnCartText}>{
              pDetials?.quantity > 0 ? "ADD TO CART" : "OUT OF STOCK"
            }</Text>
          </TouchableOpacity>
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
      </View>
    </Layout>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: '100%',
  },
  container: {
    marginVertical: 15,
    marginHorizontal: 10,
  },
  title: {
    textAlign: 'left',
    fontSize: 18,
    fontWeight: '900',
    color: '#000',
  },
  price: {
    color: '#000',
  },
  desc: {
    fontSize: 12,
    textTransform: 'capitalize',
    textAlign: 'justify',
    marginVertical: 10,
    color: '#000',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
  },
  btnCart: {
    width: 180,
    backgroundColor: '#000000',
    borderRadius: 8,
    height: 40,
    justifyContent: 'center',
  },
  btnCartText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  btnQty: {
    width: 30,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    marginHorizontal: 10,
    padding: 5,
  },
  btnQtyText: {
    width: 30,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '900',
    color: '#000000',
  },
});
