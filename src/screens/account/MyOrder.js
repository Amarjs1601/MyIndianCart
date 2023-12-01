import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import Layout from '../../components/layout/Layout'
import OrderItem from '../../components/OrderItem'
import {orderData} from "../../data/OrderData"



const MyOrder = () => {
  return (
   <Layout>
     <View style={styles.container}>
      <Text style={styles.heading}>MyOrder</Text>
      <ScrollView>
       {
        orderData.map(order => (
           <OrderItem key={orderData.id} order={order}/>
        ))
       }
      </ScrollView>
    </View>
   </Layout>
  )
}

export default MyOrder

const styles = StyleSheet.create({
    container:{
        marginTop:20
    },
    heading:{
         textAlign:'center',
         fontSize:18,
         fontWeight:'700',
         color:'#000'
    }
})