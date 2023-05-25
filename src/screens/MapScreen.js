import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Maps from '../components/Maps'

const MapScreen = () => {
  return (
   
<View>
    <View className="h-1/2">
<Maps/>
    </View>
    <View className="h-1/2">

    </View>
</View>
  )
}

export default MapScreen