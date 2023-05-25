import { View, Text, FlatList, TouchableOpacity, Image , } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { selectOrigin } from '../../slices/navSlice'
import { useSelector } from 'react-redux'


const data =[{id:"123",title:"Get a ride",image:"https://links.papareact.com/3pn",screen:"MapScreen"},
{id:"456",title:"Order food",image:"https://links.papareact.com/28w" ,screen:"EatScreen"}
]



const NavOptions = () => {
    const navigation = useNavigation()
    const origin = useSelector(selectOrigin)
  return (
  <FlatList
  data={data}
  horizontal
  keyExtractor={(item)=>item.id}
  renderItem={({item})=>(
    <TouchableOpacity disabled={!origin} className='p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-400' onPress={()=>navigation.navigate(item.screen)}>
        <View className={origin ? "" : "opacity-20"}>
            <Image source={{uri:item.image}} style={{width:120,height:120}}/>
            <Text className="mt-2 text-lg font-semibold">
            {item.title}
        </Text>
        <Icon name='arrowright' color="white" type='antdesign' className="p-2 bg-black rounded-full w-10 mt-4"/>
        </View>
        
    </TouchableOpacity>
  )}
  />
  )
}

export default NavOptions