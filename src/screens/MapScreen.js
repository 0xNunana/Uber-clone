import { TouchableOpacity, View,  } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Maps from '../components/Maps'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'



const MapScreen = () => {
    const Stack = createNativeStackNavigator()
    const navigation = useNavigation()
  return (
   
<View className="relative">
    <TouchableOpacity className="absolute top-8 left-5 bg-gray-300 z-50 p-3 rounded-full " onPress={()=>navigation.navigate("Home")
    }>
        <Icon name='menu'
        size={30}
        type='ionicon'
        />
    </TouchableOpacity>
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