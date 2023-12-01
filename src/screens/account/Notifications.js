import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Layout from '../../components/layout/Layout';

const Notifications = () => {
  return (
    <Layout>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}>
        <Text
          style={{
            width: '100%',
            textAlign: 'center',
            fontWeight: '700',
            fontSize: 15,
            color:'#000'
          }}>
          Oops ! You dont have any notifications yet
        </Text>
      </View>
    </Layout>
  );
};

export default Notifications;

const styles = StyleSheet.create({});
