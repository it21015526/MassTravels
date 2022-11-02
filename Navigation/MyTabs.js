import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/Home';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MyTrips from '../Screens/MyTrips';
import Header from '../components/Header';
import Profile from '../Screens/Profile';
import Topup from '../Screens/TopUp';
import UserDetailsProvider from '../context/UserProvider';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    // <NavigationContainer>
    <>
      <Header/>
      <Tab.Navigator initialRouteName='Home'
      screenOptions={({route}) =>({
        tabBarIcon : ({focused,color,size}) =>{
          let iconName;
          let rn = route.name;
          
          if(rn === 'Home'){
            iconName =  focused? 'home' : 'home-outline';
          }else if (rn === 'Topup'){
            iconName =  focused? 'cash' : 'cash-outline';
          }else if(rn == 'MyTrips'){
            iconName =  focused? 'bus' : 'bus-outline';
            
          }else if (rn== 'Profile'){
            iconName =  focused? 'person' : 'person-outline';

          }
          
          return <Ionicons name ={iconName} size = {size} color  ={color}/>
        },
        headerShown: false
      })}
      tabBarOptions = {{
        activeTintColor : '#F05757',
        inactiveTintColor : 'gray',
        labelStyle : {paddingBottom : 10,fontSize : 10}
      }}
      
     

      >
        <Tab.Screen name="Home" component={Home}  />
        <Tab.Screen name="Topup" component={Topup} />
        <Tab.Screen name="MyTrips" component={MyTrips} />
        <Tab.Screen name="Profile" component={Profile} />

      </Tab.Navigator>
        </>
    // </NavigationContainer>
  );
}

export default MyTabs;