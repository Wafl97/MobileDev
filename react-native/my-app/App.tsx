import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './views/About';
import Movies from './views/Movies';
import Movie from './views/Movie';
import { RootStackParamList } from './services/types';
import { secondary_color, main_color } from './styles/default';
import { app_name } from './services/env';

export default function App() {
  
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Movies"
      >
        <Stack.Group
          screenOptions={{
            headerStyle: {
              backgroundColor: main_color
            },
            headerTitleStyle: {
              color: secondary_color,
            },
            headerTitleAlign: "center",
            headerTintColor: secondary_color
          }}
        >
          <Stack.Screen 
            name="About" 
            component={ About }
          />
          <Stack.Screen 
            name="Movies" 
            component={ Movies }
            options={{
              title: app_name
            }}
          />
          <Stack.Screen 
            name="Movie" 
            component={ Movie } 
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}