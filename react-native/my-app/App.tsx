import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './views/Home';
import About from './views/About';
import Movies from './views/Movies';
import Actors from './views/Actors';
import { RootStackParamList } from './misc/types';

export default function App() {
  
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={ Home } />
        <Stack.Screen name="About" component={ About } />
        <Stack.Screen name="Movies" component={ Movies } />
        <Stack.Screen name="Actors" component={ Actors } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}