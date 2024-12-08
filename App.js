import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home';   // Ensure correct path to Home screen
import BooksScreen from './Books'; // Ensure correct path to Books screen
import AboutScreen from './About'; // Ensure correct path to About screen
import ContactScreen from './Contact'; // Ensure correct path to Contact screen
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Books" 
          component={BooksScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="About" 
          component={AboutScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Contact" 
          component={ContactScreen} 
          options={{ headerShown: false }} 
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
