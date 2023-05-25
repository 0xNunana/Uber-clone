import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native';
import { Provider } from 'react-redux';

import { store } from './store';
import HomeScreen from './src/screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './src/screens/MapScreen';
export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <Provider store={store}>
      <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name='MapScreen' component={MapScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
      
      </SafeAreaProvider>

      </NavigationContainer>
     
    
     

    </Provider>
    
  );
}


