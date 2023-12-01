import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Layout from '../../components/layout/Layout';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DashBoard = () => {
  return (
    <Layout>
      <View style={styles.main}>
        <Text style={styles.heading}>DashBoard</Text>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn}>
            <AntDesign style={styles.icon} name="edit" />
            <Text style={styles.btnText}>Manage Products</Text>
          </TouchableOpacity>
        </View>
         <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn}>
            <AntDesign style={styles.icon} name="edit" />
            <Text style={styles.btnText}>Manage Categories</Text>
          </TouchableOpacity>
        </View>
         <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn}>
            <AntDesign style={styles.icon} name="user" />
            <Text style={styles.btnText}>Manage Users</Text>
          </TouchableOpacity>
        </View>
         <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn}>
            <AntDesign style={styles.icon} name="bars" />
            <Text style={styles.btnText}>Manage Orders</Text>
          </TouchableOpacity>
        </View>
         <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn}>
            <AntDesign style={styles.icon} name="info" />
            <Text style={styles.btnText}>About App</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
  main: {
    // marginTop:10,
    backgroundColor: 'lightgrey',
    height: '96.6%',
  },
  heading: {
    backgroundColor: '#000',
    color: '#fff',
    textAlign: 'center',
    padding: 12,
    fontSize: 16,
    margin: 10,
    borderRadius: 5,
    fontWeight: 'bold',
  },
  btnContainer: {
    // marginVertical: 20,
    // marginHorizontal: 10,
    margin:10 
  },
  btn: {
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor:'#fff',
    padding:15,
    borderRadius:10,
    elevation:10
  },
  icon:{
    fontSize:25,
    marginRight:20,
    color:'#000',
    marginLeft:8,
    padding:5
  },
  btnText:{
    width:'100%',
    fontSize:18,
    color:'#000'
  }
});
