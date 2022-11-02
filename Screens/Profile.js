import {StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useUserName } from '../context/UserProvider'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Profile = () => {

  

  const getName = async() =>{
      await AsyncStorage.getItem('userName').then(res=>{
        console.log(res)

        axios.post("http://10.0.2.2:8080/User/getMe")


      })
  }

  useEffect(() => {

    getName()

  }, [])
  
  return (
    <View style = {{margin:20}}>
      <Text style = {{fontSize : 35,fontWeight : 'bold',marginBottom:20}}>Profile</Text>
      <View>
        <Text style={styles.txtForm}>Name </Text>
        <Text style={styles.txtForm}>NIC  </Text>
        <Text style={styles.txtForm}>Date of birth</Text>
        <Text style={styles.txtForm}>Address</Text>
        <Text style={styles.txtForm}>City</Text>
        <Text style={styles.txtForm}>Postal Code</Text>
        <Text style={styles.txtForm}>Contact</Text>
        <Text style={styles.txtForm}>Password</Text>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  txtForm :{
    fontSize : 20,
    fontWeight : '800',
    margin:10
  }
})