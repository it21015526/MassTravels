import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';

const Home = () => {

  const [data,setDate] = useState();
  const [from ,setFrom] = useState("");
  const [to,setTo] = useState("");
  
  const [busTrips,setBusTrips] = useState([]);
  

  const navigation = useNavigation();



  useEffect(() => {

    axios.get("http://10.0.2.2:8080/BusTrip").then(res =>{
      setBusTrips(res.data.Routes)
    }).catch(er =>{
      console.log(er)
    })

  }, [])

  const BuyTicket = (elem) =>{
    // navigation.navigate("BuyTicket",{busname : elem.busno})
    navigation.navigate("BuyTicket",{details : elem})

  }
  

  return (
    <>
    <View style = {styles.container}>
      {/* <Text>hello this is the home app</Text> */}
      <View style = {{alignItems:'center'}}>
        <Text style ={styles.txtForm}>Departure Date : </Text>
        <TextInput style = {{backgroundColor : 'white',padding : 10,borderRadius:18,marginVertical:10,width : 350}} onChange = {(e) => setDate(e.target.value)}></TextInput>
        <Text style ={styles.txtForm}>From : </Text>
        <TextInput style = {{backgroundColor : 'white',padding : 10,borderRadius:18,marginVertical:10,width : 350}} onChange = {(e) => setFrom(e.target.value)}></TextInput>
        <Text style ={styles.txtForm}>To : </Text>
        <TextInput style = {{backgroundColor : 'white',padding : 10,borderRadius:18,marginVertical:10,width : 350}} onChange = {(e) => setTo(e.target.value)}></TextInput>
        <TouchableOpacity style = {styles.searchBtn}>
          <Text style = {{textAlign:'center',color : 'white',fontWeight : 'bold',fontSize : 18}}>Search Bus</Text>
        </TouchableOpacity>
      </View>
      <View >
        <Text style={{fontWeight : 'bold',fontSize : 18}}>   Bus No                 Route No                 Time</Text> 
        <Text style={{fontWeight : 'bold',fontSize : 18}}></Text> 
        <ScrollView showsHorizontalScrollIndicator>

        {busTrips.map((elem,i)=>(
          <>
          <TouchableOpacity key = {i} style ={{marginVertical : 10,borderColor : 'black',borderWidth : 2,padding : 10,alignItems : 'center',borderRadius : 18}} onPress = {() => {BuyTicket(elem)}}>
            <Text style={{fontWeight : 'bold',fontSize : 18}} >{elem.busno}            {elem.routeno}            {elem.time}</Text> 
          </TouchableOpacity>
          </>
        ))}
        </ScrollView>
      </View>
    </View>
        </>
  )
}

export default Home

const styles = StyleSheet.create({
    container : {
        margin : 20
    },
    searchBtn : {
      margin :10,
      padding:10,
      width : 300,
      backgroundColor : '#F05757',
      borderRadius : 18
    },
    txtForm : {
      fontSize : 18,
      fontWeight : 'bold'
    }
})