import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity
} from 'react-native';
import React, {useState} from 'react';
import Layout from '../../components/layout/Layout';
import {userData} from '../../data/UserData';
import InputBox from '../../components/form/InputBox';

const Profile = ({ navigation }) => {
  // state

  const [email, setEmail] = useState(userData.email);
  const [profilePic, setProfilePic] = useState(userData.profilePic);
  const [password, setPassword] = useState(userData.password);
  const [name, setName] = useState(userData.name);
  const [address, setAddress] = useState(userData.address);
  const [city, setCity] = useState(userData.city);
  const [contact, setContact] = useState(userData.contact);

  const handleUpdate = () =>{
    if (!email || !password || !name || !address || !city || !contact) {
        return alert('Please Provides All Fields');
      }
      alert('Profile Updated Successfully');
      navigation.navigate('account');
  }
  return (
    <Layout>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: profilePic}} />
            <Pressable onPress={() => alert('profile dialogbox')}>
              <Text style={{width: 350, textAlign: 'center', color: 'red'}}>
                update your profile pic
              </Text>
            </Pressable>
          </View>
       <View style={{alignSelf:'center',width:'90%',alignItems:'center'}}>
       <InputBox
          value={name}
          setValue={setName}
          placeholder={'Enter Your Name'}
          autoComplete={"name"}
        />
          <InputBox
          value={email}
          setValue={setEmail}
          placeholder={'Enter Your Email'}
          autoComplete={"email"}
        />
        <InputBox
          value={password}
          setValue={setPassword}
          placeholder={'Enter Your Password'}
          autoComplete={"passowrd"}
        />
        <InputBox
          value={address}
          setValue={setAddress}
          placeholder={'Enter Your Address'}
          autoComplete={"address-line1"}
        />
         <InputBox
          value={city}
          setValue={setCity}
          placeholder={'Enter Your City'}
          autoComplete={"country"}
        />
         <InputBox
          value={contact}
          setValue={setContact}
          placeholder={'Enter Your Mobile Number'}
          autoComplete={"tel"}
        />

       </View>
       <TouchableOpacity style={styles.btnUpdate} onPress={()=>{handleUpdate()}}>
        <Text style={styles.btnUpdateText}>Update Profile</Text>
       </TouchableOpacity>
        </ScrollView>
      </View>
    </Layout>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnUpdate:{
    backgroundColor:'#000000',
    height:40,
    width:'73%',
    alignSelf:'center',
    borderRadius:10
  },
  btnUpdateText:{
    color:'#ffffff',
    textAlign:'center',
    marginTop:10,
    fontSize:16,
    fontWeight:'800'
  }
});
