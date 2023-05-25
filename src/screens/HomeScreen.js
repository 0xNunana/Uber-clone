import { View, Text ,SafeAreaView, Image} from 'react-native'
import React from 'react'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_KEY} from '@env'
import { useDispatch } from 'react-redux';
import { setOrigin ,setDestination} from '../../slices/navSlice';
import NavFavorites from '../components/NavFavorites';

const HomeScreen = () => {
const dispatch = useDispatch()

  return (
    <SafeAreaView className="bg-white h-full">
       <View className="p-5">
        <Image source={{uri:"https://links.papareact.com/gzs"}} style={{ width:100,height:100,resizeMode:"contain"}}/>
       
       <GooglePlacesAutocomplete 
       nearbyPlacesAPI='GooglePlacesSearch'
       placeholder='Where from?'
       debounce={400}
       styles={{
        container:{flex:0},textInput:{fontSize:18}
       }}
       query={{
        key:GOOGLE_MAPS_KEY,
        language:'en'
       }}
       enablePoweredByContainer={false}
       minLength={2}
       onPress={(data,details = null)=>{
        
        dispatch(setOrigin({
            location:details.geometry.location,
            description:data.description
        }));
          dispatch(setDestination(null))  
          
       }}
       fetchDetails={true}
       returnKeyType={'Search'}
       />
       
       
       <NavOptions/>
       <NavFavorites/>
       
       </View>
    </SafeAreaView>
  )
}

export default HomeScreen