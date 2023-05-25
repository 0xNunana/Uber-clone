import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useRef } from 'react'
import MapView,{Marker} from "react-native-maps"
import { useSelector } from 'react-redux'
import { selectOrigin ,selectDestination} from '../../slices/navSlice'
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_KEY} from '@env'


const Maps = () => {
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const mapRef  = useRef(null)

    useEffect(()=>{
       if (!origin || !destination) return;
        //zoom and fit to markers
        setTimeout(() => {
            mapRef.current.fitToSuppliedMarkers(["origin","destination"],{edgePadding:{top:50,right:50,bottom:50,left:50}}) 
        }, 1000);
        
    },[origin,destination])

  
  return (
   <MapView 
   ref={mapRef}
showsUserLocation={true}
   mapType='mutedStandard'
   initialRegion={{
    latitude:origin.location.lat,
    longitude:origin.location.lng,
    latitudeDelta:0.005,
    longitudeDelta:0.005,
   }}
   className="flex-1"
   >
    {origin && destination && (
<MapViewDirections 
origin={origin.description}
destination={destination.description}
apikey={GOOGLE_MAPS_KEY}
strokeWidth={3}
strokeColor="black"
/>
    )}

{/* optional chaining will allow it to skip errors from null */}
    {origin?.location && (
        <Marker coordinate={
            {
                latitude:origin.location.lat,
                longitude:origin.location.lng
            }
        }
        title="Origin"
        description={origin.description}
        identifier='origin'
        />
    )}

{destination?.location && (
        <Marker coordinate={
            {
                latitude:destination.location.lat,
                longitude:destination.location.lng
            }
        }
        title="destination"
        description={destination.description}
        identifier='destination'
        />
    )}


    </MapView>
  )
}

export default Maps

const styles = StyleSheet.create({})