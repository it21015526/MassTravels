import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './Navigation/MyTabs';
import NavigationStack from './NavigationStack';

export default function App() {
  return (
      <NavigationContainer>
        {/* <MyTabs/> */}
        <NavigationStack/>
      </NavigationContainer>
  );
  
}

