import {StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useUserName } from '../context/UserProvider'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {

  const [data,setData] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  
  const navigation = useNavigation();

  const getName = async() =>{
      await AsyncStorage.getItem('userName').then(res=>{
        console.log(res)

        const name = {
          name :res
        };

        axios.post("http://10.0.2.2:8080/User/getMe",name).then(res =>{
          console.log(res.data.User)
          setData(res.data.User)
          setIsLoading(false)
        }).catch(err =>{
          ToastAndroid.show("err" +err, ToastAndroid.SHORT);
        })


      })
  }

  useEffect(() => {

    getName()

  }, [])

  const Logout = () =>{
    AsyncStorage.removeItem('userName')
    navigation.navigate("Main")
    

  }
  
  return (
    <>
    <View style = {{margin:20}}>
      <Text style = {{fontSize : 35,fontWeight : 'bold',marginBottom:20}}>Profile</Text>
      {isLoading ? (
        <View><Text>Loading ...</Text></View>
        ):<>
      <View style = {{margin : 10,backgroundColor : 'white',padding:10,borderRadius:18,elevation:10}}>
        <Text style={styles.txtForm}>Name :  {data[0].name}</Text>
        <Text style={styles.txtForm}>NIC  :  {data[0].nic}</Text>
        <Text style={styles.txtForm}>Date of birth  :  {data[0].dob}</Text>
        <Text style={styles.txtForm}>Address  :  {data[0].address}</Text>
        <Text style={styles.txtForm}>City  :  {data[0].city}</Text>
        <Text style={styles.txtForm}>Postal Code  :  {data[0].postalcode}</Text>
        <Text style={styles.txtForm}>Contact  :  {data[0].contact}</Text>
        <Text style={styles.txtForm}>Password  :  {data[0].password}</Text>
      </View>
      </>}
    </View>
      <TouchableOpacity style = {styles.Logout} onPress = {Logout}>
          <Text style = {{fontSize : 20,fontWeight : 'bold',color : 'white'}} >Log Out</Text>
      </TouchableOpacity>
        </>
  )
}

export default Profile

const styles = StyleSheet.create({
  txtForm :{
    fontSize : 20,
    fontWeight : '800',
    margin:10
  },
  Logout:{
    borderRadius : 26,
    backgroundColor : 'red',
    elevation : 10,
    alignItems : 'center',
    marginTop : 10,
    width : 300,
    padding : 10,
    marginHorizontal : 50

}
})