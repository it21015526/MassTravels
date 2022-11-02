import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import QRCode from 'react-native-qrcode-svg'

const Topup = () => {
  return (
    <View style = {styles.container}>


      <View style = {{alignSelf:'center',marginTop:10}}>
        <TextInput placeholder='Amount' style = {{padding:10,backgroundColor:'white',marginBottom:20,borderRadius:18}} keyboardType='numeric'></TextInput>
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
          <QRCode value = "My Account"/>
      </View>
      <TouchableOpacity>
          <Text style = {{fontSize:30,textAlign:'center',backgroundColor:'#F05757',padding : 10,borderRadius : 18,marginTop:20,fontWeight : 'bold'}}>TopUp Account</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Topup

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