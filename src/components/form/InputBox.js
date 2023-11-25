import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const InputBox = ({
  placeholder,
  autoComplete,
  secureTextEntry,
  value,
  setValue,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        autoComplete={autoComplete}
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={text => setValue(text)}
      />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    // alignItems:'center',
    marginVertical: 10,
    width: '80%',
    // backgroundColor:'red'
  },
  input: {
    // textAlign:'left',
    backgroundColor: '#ffffff',
    height: 40,
    paddingLeft: 10,
    borderRadius: 10,
    color: '#000000',
    borderWidth: 1,
    borderColor: 'grey',
  },
});
