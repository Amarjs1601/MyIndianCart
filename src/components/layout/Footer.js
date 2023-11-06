import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useRoute} from '@react-navigation/native';

const Footer = () => {
  const route = useRoute();


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuContainer} onPress={()=>alert('home screen')}>
        <AntDesign
          name="home"
          style={[styles.icon, route.name === 'Home' && styles.active]}
        />
        <Text style={[styles.footerText,route.name === 'Home' && styles.active]}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuContainer} onPress={()=>alert('Notification screen')}>
        <AntDesign
          name="bells"
          style={[styles.icon, route.name === 'bells' && styles.active]}
        />
        <Text numberOfLines={1} style={[styles.footerText,route.name === 'bells' && styles.active]}>notification</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuContainer} onPress={()=>alert('User screen')}>
        <AntDesign
          name="user"
          style={[styles.icon, route.name === 'user' && styles.active]}
        />
        <Text style={[styles.footerText,route.name === 'user' && styles.active]}>user</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuContainer} onPress={()=>alert('Cart screen')}>
        <AntDesign
          name="shoppingcart"
          style={[styles.icon, route.name === 'shoppingcart' && styles.active]}
        />
        <Text style={[styles.footerText,route.name === 'shoppingcart' && styles.active]}>Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuContainer} onPress={()=>alert('Logout screen')}>
        <AntDesign
          name="logout"
          style={[styles.icon, route.name === 'logout' && styles.active]}
        />
        <Text style={[styles.footerText,route.name === 'logout' && styles.active]}>Logout</Text>
      </TouchableOpacity>
      
      
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  menuContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    textAlign: 'center',
    width: 50,
    color: '#000000',
    fontSize: 10,
  },
  icon: {
    fontSize: 25,
    color: '#000000',
  },
  active: {
    color: 'blue',
  },
});
