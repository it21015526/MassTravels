import { StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';

const Register = () => {

  const navigation = useNavigation();

  const [name,setName] = useState();
  const [nic,setNic] = useState();
  const [dob,setDob] = useState();
  const [address,setAddress] = useState();
  const [city,setCity] = useState();
  const [postalcode,setPostalcode] = useState();
  const [contact,setContact] = useState();
  const [password,setpassword] = useState();



  const Register = () =>{
    const newUser = {
      name,
      nic,
      address,
      city,
      contact,
      dob,
      postalcode,
      password
    }
    console.log(newUser)

    axios.post("http://10.0.2.2:8080/User/createUser",newUser).then(res =>{
      ToastAndroid.show("User Registered Successfully !", ToastAndroid.SHORT);
      navigation.navigate("HomeMain")

    }).catch(err =>{
      ToastAndroid.show("Error "+err, ToastAndroid.SHORT);

    })
  }

  return (
    <View style = {{alignSelf:'center',marginTop:40}}>
      <Text style = {{fontSize : 35,textAlign: 'center',fontWeight : 'bold',marginBottom:50}}>Register</Text>
      <View>
        <TextInput style = {styles.txtInput}  onChangeText={newText => setName(newText)} defaultValue={name} placeholder='Name'/>
        <TextInput style = {styles.txtInput} onChangeText = {(e) => {setNic(e)}} placeholder='NIC'/>
        <TextInput style = {styles.txtInput} onChangeText = {(e) => {setDob(e)}} placeholder='Date of Birth'/>
        <TextInput style = {styles.txtInput} onChangeText = {(e) => {setAddress(e)}} placeholder='Address'/>
        <TextInput style = {styles.txtInput} onChangeText = {(e) => {setCity(e)}} placeholder='City'/>
        <TextInput style = {styles.txtInput} onChangeText = {(e) => {setPostalcode(e)}} placeholder='Postal Code'/>
        <TextInput style = {styles.txtInput} onChangeText = {(e) => {setpassword(e)}} placeholder='Password'/>
        <TextInput style = {styles.txtInput} onChangeText = {(e) => {setContact(e)}} placeholder='Contact'/>
        <View style = {{alignSelf:'center'}}>
            <TouchableOpacity style = {styles.Login} onPress = {Register}>
                <Text style = {{fontSize : 20,fontWeight : 'bold',color : 'white'}} >Register</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  txtInput:{
    borderColor : 'white',
    padding : 10,
    borderWidth : 2,
    borderRadius : 20,
    width : 340,
    margin : 10,
    elevation : 10,
    backgroundColor : 'white'
    
    
  },
  Login:{
    borderRadius : 26,
    backgroundColor : '#F05757',
    elevation : 10,
    alignItems : 'center',
    marginTop : 10,
    width : 250,
    padding : 10

}
})