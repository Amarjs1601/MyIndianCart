import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import InputBox from '../../components/form/InputBox';

const loginImage = 'https://fishcopfed.coop/images/login.png';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  // Login Function

  const handleLogin = () =>{
    if(!email || !password){
      return alert('Please Add Email And Password')
    }
    alert("Login Successfully")
    navigation.navigate('Home')
  }
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
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnTouchableLogin} onPress={()=>handleLogin()}>
          <Text style={styles.loginBtn}>Login</Text>
        </TouchableOpacity>
      <View style={{flexDirection:'row',alignSelf:'center',marginTop:10}}>
      <Text>Not  a User Yet ? Please  {" "}</Text>
      <Text onPress={()=>navigation.navigate('register')} style={styles.link}>register !</Text>
      </View>
      </View>
    </View>
  );
};

export default Login;

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
  link:{
    color:'red',
    width:'20%',
    textAlign:'center',
   
  }
});
