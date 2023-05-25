import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_KEY} from '@env'
import { setDestination } from '../../slices/navSlice';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const NavigateCard = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
  return (
    <SafeAreaView className="bg-white flex-1">
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

</View>
    </SafeAreaView>)
   
}

export default NavigateCard