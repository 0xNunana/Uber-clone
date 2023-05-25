import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_KEY} from '@env'
import { setDestination } from '../../slices/navSlice';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import NavFavorites from './NavFavorites';
import { Icon } from 'react-native-elements';

const NavigateCard = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
  return (
    <SafeAreaView className="bg-white flex-1 pb-4">
<Text className="text-center text-xl py-5"> Good Morning , OxNunana</Text>
<View className="border-t border-gray-200 flex-shrink">
    <View>
        <GooglePlacesAutocomplete
        placeholder='Where to?'
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        minLength={2}
        enablePoweredByContainer={false}
        styles={{container:{flex:0,backgroundColor:"white",paddingTop:20},textInput:{fontSize:18, borderRadius:0, backgroundColor:"#DDDDDF"},textInputContainer:{paddingHorizontal:20,paddingBottom:0}}}
        
        query={{
            key:GOOGLE_MAPS_KEY,
            language:"en"
        }}
        onPress={(data,details=null)=>{
            dispatch(setDestination({
                location:details.geometry.location,
               description:data.description
            }))
          navigation.navigate("RideOptionsCard")
        }}
        fetchDetails={true}
        />
    </View>
<NavFavorites/>
<View className="flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-200">
    <TouchableOpacity className="flex-row justify-between bg-black w-24 px-4 py-3 rounded-full">
        <Icon name="car" type='font-awesome' color="white" size={16}/>
        <Text className="text-white text-center">Rides</Text>
    </TouchableOpacity>
    <TouchableOpacity className="flex-row w-24 px-4 py-3 rounded-full justify-between">
        <Icon name="fast-food-outline" type='ionicon' color="black" size={16}/>
        <Text className="text-center">Eats</Text>
    </TouchableOpacity>
</View>
</View>
    </SafeAreaView>)
   
}

export default NavigateCard