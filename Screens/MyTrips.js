import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const MyTrips = () => {

  const [myTickets,setMyTickets] = useState([]);

  const getMe = async () =>{

    await AsyncStorage.getItem('userName').then(res=>{
        console.log(res)

        const data ={
          name : res
        }

        axios.post("http://10.0.2.2:8080/Ticket/getMe",data).then(res =>{
          setMyTickets(res.data.Tickets)
        })
    })
}


  useEffect(() => {
    getMe();


  }, [])
  
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator>
      {myTickets.map((e,i) =>(
        <View key={i} style = {{margin:20,padding:10,backgroundColor:'white',borderRadius:18,elevation:10}}>
          <Text>Bus Number : {e.busno}</Text>
          <Text>Route Number : {e.routeno}</Text>
          <Text>Time : {e.time}</Text>
          <Text>From: {e.from}</Text>
          <Text>TO :{e.to}</Text>
          <Text>Price : {e.price}</Text>
        </View>
      ))}
      </ScrollView>
    </View>
  )
}

export default MyTrips

const styles = StyleSheet.create({})