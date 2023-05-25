import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectTravelTimeInfo } from '../../slices/navSlice'

const data =[
  {id:"Uber-X-123",title:"UberX",multiplier:1, image:"https://links.papareact.com/3pn"},
  {id:"Uber-XL-456",title:"Uber XL",multiplier:1.2, image:"https://links.papareact.com/5w8"},
  {id:"Uber-LUX-178",title:"Uber LUX",multiplier:1.75, image:"https://links.papareact.com/7pf"},
 
]

const RideOptionsCard = () => {
  const travel = useSelector(selectTravelTimeInfo)
  const navigation = useNavigation()
  const [selected,setSelected]=useState()
  return (
   <SafeAreaView className="bg-white flex-grow h-full">
    <View>
      <TouchableOpacity className="absolute top-0 left-2 px-3 rounded-full z-50" onPress={()=>navigation.navigate("NavigateCard")}>
<Icon name="chevron-left" type='fontaesome' size={30}/>
      </TouchableOpacity>
      <Text className="text-center  px-3 text-xl"> Select a ride {travel?.distance?.text}  </Text>
    </View>
    <FlatList 
    data={data}
    keyExtractor={(item)=>item.id}
    renderItem={({item})=>(
      <TouchableOpacity className={selected?.id === item.id ? "bg-gray-200 flex-row justify-between items-center px-6":"flex-row justify-between items-center px-6"} onPress={()=>setSelected(item)}>
        <Image source={{uri:item.image}} style={{width:100 ,height:100, resizeMode:"contain"}}/>
        <View className="-ml-10">
        <Text className="text-xl font-semibold">{item.title}</Text>
          <Text>{travel?.duration?.text} </Text>
        </View>
        <Text className="text-lg">{
        new Intl.NumberFormat("en-GH",{
          style:"currency",
          currency:"GHS",}).format((travel?.duration?.value * item.multiplier *1.5)/100)
        }
        
       </Text>
       
      </TouchableOpacity>
    )}
    
    />

    <View>
      <TouchableOpacity disabled={!selected} className={!selected ? "bg-gray-300 py-3 m-3":"bg-black py-3 m-3"}>
        <Text className="text-center text-white text-xl">Choose {selected?.id}</Text>
      </TouchableOpacity>
    </View>
   </SafeAreaView>
  )
}

export default RideOptionsCard