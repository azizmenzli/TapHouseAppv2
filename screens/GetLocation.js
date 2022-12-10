import React, { useState } from 'react';
import MapView ,{PROVIDER_GOOGLE,Marker,Circle,Callout}from 'react-native-maps';
import { StyleSheet, View,Dimensions,Text,Pressable,Image} from 'react-native';
import { useNavigation } from "@react-navigation/native";

const {width,height}=Dimensions.get('window')
const ASPECT_RATIO=width/height
const LATITUDE_DELTA=0.02
const LONGITUDE_DELTA=LATITUDE_DELTA*ASPECT_RATIO
const INITIAL_POSITION={
    latitude:36.8941571,
    longitude:10.1871428,
    latitudeDelta:LATITUDE_DELTA,
    longitudeDelta:LONGITUDE_DELTA
    
}

export default function App() {
    const navigation = useNavigation();
    const [credential,setCredential]=useState({
        latitude:36.8941571,
    longitude:10.1871428
    })
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
      provider={PROVIDER_GOOGLE} 
      initialRegion={INITIAL_POSITION} >
        <Marker
        coordinate={{
            latitude:36.8941571,
    longitude:10.1871428
        }}
        draggable={true}
        onDragStart={(e)=>{
            // console.log("start",e.nativeEvent.coordinate);
        }}
        onDragEnd={(e)=>{setCredential({
            latitude:e.nativeEvent.coordinate.latitude,
            longitude:e.nativeEvent.coordinate.longitude
            

        })
    console.log('==>fromLocarionCred',credential)}}
        
        >
            <Callout>
                <Text>Drag me to the desired position</Text>
            </Callout>
        </Marker>
        <Circle
        center={credential} radius={800}
        />
        <Pressable
         style={styles.vectorPressable}
         onPress={() => navigation.navigate("House",{location:{latitude:credential.latitude,longitude:credential.longitude}})}>
            <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/cancel.png")}
            ></Image>

        </Pressable>
      </MapView>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center"
  },
  map: {
    width: '100%',
    height: '100%',
  },
  searchContainer:{
    position:'absolute',
    width:"90%",
    backgroundColor:"white",
    shadowColor:"black",
    shadowOffset:{width:2,height:2},
    shadowOpacity:0.5,
    shadowRadius:4,
    elevation:4,
    padding:8,
    borderRadius:8
  },
  input:{
    borderColor:"#888",
    borderRadius:8
  },
  icon1: {
    height: "100%",
    top:60,
    left: 110,
    width: "100%",
    maxWidth: "100%",
    // overflow: "hidden",
    maxHeight: "100%",
  },
  vectorPressable: {
    top:500,
    height:50,
    width:50
   
  }
});