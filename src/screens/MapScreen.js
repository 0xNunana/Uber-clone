import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Maps from '../components/Maps'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'

const MapScreen = () => {
    const Stack = createNativeStackNavigator()
  return (
   
<View>
    <View className="h-1/2">
<Maps/>
    </View>
    <View className="h-1/2">
<Stack.Navigator>
    <Stack.Screen  name='NavigateCard' component={NavigateCard}  options={{headerShown:false}}/>
    <Stack.Screen  name='RideOptionsCard' component={RideOptionsCard}   options={{headerShown:false}} />
</Stack.Navigator>
    </View>
</View>
  )
}

export default MapScreen