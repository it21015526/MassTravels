import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style = {styles.header}>
        <Image
        style={styles.tinyLogo}
        source = {require('../Images/logo.png')}
        width = {50}
        height = {50}
      />
        <Text style = {styles.headerTxt}>Mass Travels</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header : {
        marginVertical : 15,
        alignItems : 'center',
        display :'flex',
        flexDirection : 'row',
        marginTop : 40,
        alignSelf : 'center',
        
    },
    headerTxt:{
        fontSize : 30,
        fontWeight : 'bold',
        alignContent : 'center',
        marginLeft: 20

    },
    tinyLogo:{
        alignItems : 'center',
    }
})