import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
const data = [{id:"123",icon:"home",location:"Home",destination:"Mother of God,Hospital"
},{id:"124",icon:"briefcase",location:"Work",destination:"Farming In Africa"}]

const NavFavorites = () => {
  return (
    <FlatList
    data={data}
    ItemSeparatorComponent={()=><View className="border border-gray-300"/>}
    keyExtractor={(item)=>item.id}
    renderItem={({item})=>(
        <TouchableOpacity className="flex-row items-center p-5">
            <Icon 
            className="mr-4 rounded-full bg-gray-300 p-3"
            name={item.icon}
            type='ionicon'
            color="white"
            size={18}
            />
            <View>
            <Text className="font-semibold text-lg">{item.location}</Text>
            <Text className="text-gray-500">{item.destination}</Text>
            </View>

        </TouchableOpacity>
        
    )}
    />
  )
}

export default NavFavorites