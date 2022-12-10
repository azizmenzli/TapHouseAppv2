import React, { useState,useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  TextInput,
  Image,
  ScrollView,
  View,
  Text,
  Button
} from "react-native";
import link from "../../Link";

const House = ({navigation,route}) => {
  const [location,setLocation]=useState([])
  const [values, setValues] =useState({
    photo: "https://media.istockphoto.com/id/1211174464/photo/beautiful-residential-home-exterior-on-bright-sunny-day-with-green-grass-and-blue-sky.jpg?s=612x612&w=0&k=20&c=h0XtWGD8asz_hfDVus7SWwOrtAFlZYfr7wdStKCQv14=",
    description: "",
    price: "",
    latiude:0,
    longitude: 0,
    adresse: "",
    city: "",
  });
  console.log(route,'==>fromHouse');
  // var info=route.params.location
  // console.log(info,'ind');
  useEffect(()=>{
    // setLocation(route.params.location);
   
  },[])
  const handleChange = (name, value) => {
    console.log( route.params.location,"mehdi");
    // setValues({
    //   ...values,
      
    // });
    setValues({
      ...values,
      [name]: value,
      latiude: route.params.location.latitude,
      longitude:route.params.location.longitude
    });
  };
  
  console.log(values,"=>")
    const handlePost = () =>{
      axios
      .post(`${link}:3001/house/add/${id}`,values)
      .then((response) => {
       console.log(response)
       navigation.navigate("HomePageStudent")
      
      })
      .catch((err) => console.log(err));
  }

      return (
        <ScrollView
        horizontal={true}>
          <View style={{top:40}}>           
            <TextInput
            placeholder="description"
              style={styles.input}
              onChangeText={(text) => handleChange("description", text)}
              value={values.description}
            />
            <TextInput
            placeholder="price"
              style={styles.input}
              onChangeText={(text) => handleChange("price", text)}
              value={values.price}
            />
          
            <TextInput
            placeholder="adress"
              style={styles.input}
              onChangeText={(text) => handleChange("adresse", text)}
              value={values.adresse}
            />
            <TextInput
            placeholder="city"
              style={styles.input}
              onChangeText={(text) => handleChange("city", text)}
              value={values.city}
            />
            <Image
            style={styles.icons8PhotoGallery1001}
            resizeMode="cover"
            source={require("../../assets/House/image.png")}
          />
          <Text style={styles.uploadYourPicture}>{`Upload your picture `}</Text>
          
          <Pressable
          onPress={()=>navigation.navigate('GetLocation')}>
          <Image
          style={styles.map}
          resizeMode="cover"
          source={require("../../assets/House/map.png")}
        /></Pressable>
        <Text style={styles.PictureMap}>{`maps`}</Text>

        <Pressable
        style={styles.groupPressable}
      >
        <View style={styles.rectangleView} />
        <Text style={styles.getConfirmText}
          onPress={() => handlePost()}
          >
          Confirm</Text>
      </Pressable>    
          <View style={styles.groupView}>
          </View>
         </View>
          
        </ScrollView>
      );
    }
  

  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 32,
      borderWidth: 1,
      padding: 10,
      backgroundColor: "#d9d9d9",
      borderColor: "#000",
      position: "relative",
      overflow: "hidden",
    },
    icons8PhotoGallery1001: {
      
    },
    save:{
     heigth:50,
     margin:32,
     backgroundColor: "#d9d9d9",
      borderColor: "#000",
      position: "relative",
      overflow: "hidden",
      flex: 2,
      height:"100%",
      maxWidth:"100%"
    },
    groupView:{
      position: "absolute",
      width: "4.58%",
      height: "3.29%",
      left: "4.58%",
      top: "3.64%",
      right: "90.84%",
      background: "#3F424A",
      color: "#2f89fc",
      borderStyle: "solid",
      borderRadius: 10,
    },
    icons8PhotoGallery1001:{
    width:105,
    height:120,
    left:25,

    },
    uploadYourPicture:{
      top: -16,
      left:22,
      right:1,
      fontSize: 16,
      textShadowColor: "rgba(0, 0, 0, 0.25)",
    },
    map:{
      top: -120,
      left: 230,
      width:70,
      height: 70,
    },
    PictureMap:{
      top: -110,
      left: 250,
      fontSize: 16,
      textShadowColor: "rgba(0, 0, 0, 0.25)",

    },
    rectangleView: {
      position: "absolute",
      bottom: -42,
      borderRadius: 20,
      backgroundColor: "rgba(63, 66, 74, 0.8)",
      width: 150,
      height: 70,
      left: 80,
      marginBottom:40,
      marginLeft:20
   
    },
    getConfirmText: {
     position: "absolute",
    bottom: 23,
   right:125,
    getStartedText: {
    position: "absolute",
    bottom: 180,
    left: 15,
    fontSize: 16,
    letterSpacing: 28,
    lineHeight: 25,
    fontWeight: "400",
    color: "#fff",
    textAlign: "center",
    top:20,
    
  },
      fontSize: 22,
      letterSpacing: -0.20,
      lineHeight: 30,
      fontWeight: "500",
      color: "#fff",
      textAlign: "center",
      left:120,
    },

  });


export default House;
