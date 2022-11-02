import { StackActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import UserDetailsProvider from './context/UserProvider';
import MyTabs from './Navigation/MyTabs';
import BuyTIcket from './Screens/BuyTIcket';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Register from './Screens/Register';

const NavigationStack = () => {
    const Stack = createNativeStackNavigator();
    return (
      <UserDetailsProvider>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name = "Main" component={Login} options = {{headerShown : false}}/>
        <Stack.Screen name = "HomeMain" component={MyTabs}  options = {{headerShown : false}}/>
        <Stack.Screen name = "BuyTicket" component={BuyTIcket}  options = {{headerShown : false}}/>
        <Stack.Screen name = "Register" component={Register} options = {{headerShown : false}}/>
        {/* <Stack.Screen name = "Cards" component={SecondScreen} options = {{headerShown : false}}/> */}
      </Stack.Navigator>
    </UserDetailsProvider>
    )
}

export default NavigationStack
