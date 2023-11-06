import {StyleSheet, Text, View,ScrollView} from 'react-native';
import React from 'react';
import ProductCard from './ProductCard';
import {ProductsData} from '../../data/ProductsData';


export default function Products() {
    // console.log({ProductsData});
  return (
    
    <View style={styles.view}>
      {ProductsData?.map(p => {
        
       return <ProductCard key={p.id} p={p} />;
      })}
    </View>
   
  );
}

const styles = StyleSheet.create({

});
