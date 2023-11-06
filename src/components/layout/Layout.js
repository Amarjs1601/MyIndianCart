import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <>
    
      <View>
        {children}
        
      </View>
      <View style={styles.footer}>
      <Footer />
      </View>
    </>
  );
};

export default Layout;

const styles = StyleSheet.create({
  footer:{
    flex:1,
    justifyContent:'flex-end',
    borderTopWidth:1,
    borderColor:'lightgrey',
    zIndex:100,
    position:'absolute',
    bottom:0,
    width:'100%',
    padding:5
  }
});
