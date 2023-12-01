import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import InputBox from '../../components/form/InputBox';
const loginImage =
  'https://www.91mobiles.com/tech-tribe/wp-content/uploads/2021/06/Login-Register.png';
const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  //   const [country, setCountry] = useState('');
  const [mobNo, setMobNo] = useState('');

  // Register Function

  const handleRegister = () => {
    if (!email || !password || !name || !address || !city || !mobNo) {
      return alert('Please Add Email And Password And Name And Address And City or Mobile Number');
    }
    alert('Register Successfully');
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <Image source={{uri: loginImage}} style={styles.loginImageStyle} />
      <InputBox
        placeholder={'Enter Your Email'}
        autoComplete={'email'}
        value={email}
        setValue={setEmail}
      />
      <InputBox
        placeholder={'Enter Your Password'}
        secureTextEntry={true}
        value={password}
        setValue={setPassword}
      />
      <InputBox
        placeholder={'Enter Your Name'}
        value={name}
        setValue={setName}
      />
      <InputBox
        placeholder={'Enter Your Address'}
        value={address}
        setValue={setAddress}
        autoComplete={'address-line1'}
      />
      <InputBox
        placeholder={'Enter Your City'}
        value={city}
        setValue={setCity}
        autoComplete={'country'}
      />
      <InputBox
        placeholder={'Enter Your Mobile No'}
        value={mobNo}
        setValue={setMobNo}
        autoComplete={'tel'}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btnTouchableLogin}
          onPress={() => handleRegister()}>
          <Text style={styles.loginBtn}>Register</Text>
        </TouchableOpacity>
        <View
          style={{flexDirection: 'row', alignSelf: 'center', marginTop: 10}}>
          <Text>Already a User Please ? </Text>
          <Text
            onPress={() => navigation.navigate('Login')}
            style={styles.link}>
            login !
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  loginImageStyle: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  btnContainer: {
    width: '80%',
  },
  loginBtn: {
    color: '#ffffff',
    width: 300,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '900',
  },
  btnTouchableLogin: {
    height: 40,
    justifyContent: 'center',
    backgroundColor: '#000000',
    borderRadius: 10,
  },
  link: {
    color: 'red',
    width: '20%',
    textAlign: 'center',
  },
});
