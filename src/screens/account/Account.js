import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Layout from '../../components/layout/Layout';
import {userData} from '../../data/UserData';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Account = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Image source={{uri: userData.profilePic}} style={styles.userImg} />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.name}>
            Hi
            <Text style={{color: 'green'}}> {userData.name} 👋</Text>
          </Text>
          <Text style={{textAlign: 'center'}}>email : {userData.eamil}</Text>
          <Text style={{width: '100%', textAlign: 'center'}}>
            contact : {userData.contact}
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <Text style={styles.heading}>Account Setting</Text>
          <TouchableOpacity style={styles.btn}>
            <AntDesign style={styles.btnIcon} name="edit" />
            <Text style={styles.btnText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <AntDesign style={styles.btnIcon} name="bars" />
            <Text style={styles.btnText}>My Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <AntDesign style={styles.btnIcon} name="bells" />
            <Text style={styles.btnText}>Notification</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <AntDesign style={styles.btnIcon} name="windows" />
            <Text style={styles.btnText}>Admin Panel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  userImg: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  name: {
    width: '100%',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
  btnContainer: {
    padding: 10,
    backgroundColor: '#fff',
    margin: 10,
    marginVertical: 20,
    elevation: 5,
    borderRadius: 10,
    paddingBottom: 30,
  },
  heading: {
    fontSize: 15,
    fontWeight: '800',
    color: '#000',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    paddingBottom: 10,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 5,
  },
  btnText: {
    fontSize: 13,
    marginLeft: 10,
    // backgroundColor:'red',
    width:'100%',
    // textAlign:'left'
    color:'#000'
  },
  btnIcon: {
    fontSize: 13,
    color:'#000'
  },
});
