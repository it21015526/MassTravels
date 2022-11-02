import { Image, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import { useUserName } from '../context/UserProvider'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {

  const navigation = useNavigation();
  const {userNameG,setUsernameG} = useUserName()

  const [userName1,setUserName] = useState();
  const [password,setPassword] = useState();

  const Login = () =>{
    const loginUser = {
      userName:userName1,
      password
    }
    axios.post("http://10.0.2.2:8080/User/login",loginUser).then(res =>{
      let userData = res.data.user;
      if(res.data.status === "User Found" && userData[0].password === password){
        navigation.navigate("HomeMain")
        console.log(userData[0].name)
        // setUsernameG(userData[0].name)
        // console.log(userNameG)
        AsyncStorage.setItem('userName',userData[0].name);
      }else{
        ToastAndroid.show("User Name or Password Incorrect", ToastAndroid.SHORT);

      }
    }).catch(err =>{
      console.log(err)
      ToastAndroid.show("User Name or Password Incorrect", ToastAndroid.SHORT);
    })
    
  }
  
  const ToRegister = () =>{
    navigation.navigate("Register")

  }
  return (

    <View style = {styles.main}>
      <View style = {{alignSelf:'center',marginTop:50}}>
      <Image
        style={styles.tinyLogo}
        source = {require('../Images/logo.png')}
        width = {200}
        height = {200}
      />
        <Text style = {{fontSize : 30,fontWeight : 'bold',textAlign:'center'}}>Mass Travel</Text>
      </View>
      <View style = {{marginTop : 100}}>
        <TextInput style = {styles.txtInput} placeholder='User name' onChangeText={newText => setUserName(newText)}/>
        <TextInput style = {styles.txtInput} placeholder='password' onChangeText={newText => setPassword(newText)}/>
      </View>
      <View>
            <TouchableOpacity style = {styles.Login} onPress = {Login}>
                <Text style = {{fontSize : 20,fontWeight : 'bold',color : 'white'}} >Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {{marginTop : 20}} onPress = {ToRegister}><Text>Don't have an Account ? Register</Text></TouchableOpacity>
        </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  main : {
    flex : 1,
    margin : 20,
    alignItems : 'center',

  },
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
    width : 200,
    padding : 10

}
})