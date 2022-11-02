import { StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import QRCode from 'react-native-qrcode-svg'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';


const BuyTIcket = () => {
    const route = useRoute();
    const qrValue = "Bus No :" + route.params.details.busno +"; Fair :"+ route.params.details.price+ "; Route No :" + route.params.details.routeno
    const [username,setUserName] = useState();

    const getMe = async () =>{

        await AsyncStorage.getItem('userName').then(res=>{
            console.log(res)
            setUserName(res)
        })
    }

    const buyTicket =()=>{
        console.log("buy Ticket")

        const data = {
            username,
            busno : route.params.details.busno,
            routeno : route.params.details.routeno,
            time : route.params.details.time,
            from : route.params.details.from,
            to : route.params.details.to,
            price : route.params.details.price,
        }
        console.log(data)

        axios.post("http://10.0.2.2:8080/Ticket/addTicket",data).then(res =>{
            ToastAndroid.show(res.data.status,ToastAndroid.SHORT)
        }).catch(err =>{
            ToastAndroid.show(err,ToastAndroid.SHORT)

        })

    }

    useEffect(() => {

        getMe();

        // axios.post("http://10.0.2.2:8080/User/login")

    }, [])
    


  return (
    <>
    <View style = {styles.container}>

      <View style = {{marginTop : 50,display : 'flex',flexDirection : 'column',textAlign:'center',backgroundColor : 'white',padding:20,elevation:10,borderRadius:18}}>
        <Text style = {{fontSize:25,fontWeight :'bold',marginBottom:20}}>Ticket Details</Text>
        <Text style = {styles.txtTicket}>Bus No : {route.params.details.busno}</Text>
        <Text style = {styles.txtTicket}>Route No : {route.params.details.routeno}</Text>
        <Text style = {styles.txtTicket}>Time : {route.params.details.time}</Text>
        <Text style = {styles.txtTicket}>Fair : Rs. {route.params.details.price}</Text>
        </View>
        <View style = {{alignSelf:'center',marginTop:10}}>
            <TouchableOpacity style = {styles.payment}>
                <Text style = {styles.btnTxt}>Debit Card</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.payment}>
                <Text style = {styles.btnTxt}>Credit Card</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.payment}>
                <Text style = {styles.btnTxt}>Paypal</Text>
            </TouchableOpacity>
        </View>

        {/* <View style= {styles.qrSection} style = {{marginTop : 30,display : 'flex',flexDirection : 'column',textAlign:'center',backgroundColor : 'white',padding:20,elevation:10,borderRadius:18}}> */}
        <View style = {{marginTop : 10,display : 'flex',flexDirection : 'column',textAlign:'center',backgroundColor : 'white',padding:20,elevation:10,borderRadius:18,alignItems:'center',paddingBottom:40}}>
            <Text style = {{fontWeight:'bold',fontSize : 25,marginBottom:10}}>Pay</Text>
            <QRCode value = {qrValue}/>
        </View>
        <TouchableOpacity onPress={buyTicket}>
            <Text style = {{fontSize:30,textAlign:'center',backgroundColor:'#F05757',padding : 10,borderRadius : 18,marginTop:20,fontWeight : 'bold'}}>Buy Ticket</Text>
        </TouchableOpacity>

      </View>
    </>
  )
}

export default BuyTIcket

const styles = StyleSheet.create({
    container : {
        margin : 20
    },
    txtTicket : {
        textAlign :'center',
        fontSize:20,
        fontWeight : '700'
    },
    qrSection:{
        alignItems:'center',
        marginTop:20,
        backgroundColor:'white',
        padding:30,
        elevation:10,
        borderRadius:18
    },
    payment : {
        display:'flex',
        flexDirection : 'row',
        padding:10,
        width : 300,
        height:60,
        backgroundColor : 'gray',
        borderRadius : 10,
        alignItems :'center',
        justifyContent : 'center',
        marginVertical:5
    },
    btnTxt:{
        fontWeight:'bold',
        fontSize : 18,
        textAlign:'center',
        color : 'white'

      }
})