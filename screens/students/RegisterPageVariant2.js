import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView 
} from "react-native";
import * as ImagePicker from 'expo-image-picker';

import axios from "axios";
import {useTogglePasswordVisibility} from "../../hooks/TogglePassword.js";
import link from "../.././Link.js"
import { useNavigation } from "@react-navigation/native";

const StudentRegister = (props,{route}) => {
  const navigation = useNavigation();
   const { passwordVisibility, rightIcon, handlePasswordVisibility } =
       useTogglePasswordVisibility();

       const [data, setData] = useState({
        fullName: "",
        email: "",
        password: "",
         phoneNumber: "",
        dateOfBirth: "",
        gender:"",
        lookingFor:"",
        city: "",
        cin: "",
        photo: "https://media.istockphoto.com/id/1297349747/photo/hot-air-balloons-flying-over-the-botan-canyon-in-turkey.jpg?b=1&s=170667a&w=0&k=20&c=1oQ2rt0FfJFhOcOgJ8hoaXA5gY4225BA4RdOP1RRBz4=",
        maxBudget:"",

      });
      const handleChange = (value,name) => {
        setData({
          ...data,[name]: value
        })
        props.cb(data.email)
      };

      const handleSubmit = () => {
        axios.post(`${link}/student/register`,data)
            .then((response) => {console.log(response.data.insertId)
              
             
              // setData(response.data);
              navigation.navigate("ValidationScrenStudent", {
                id: response.data.insertId,
                
              });
              console.log(response.data, "=====id");
              
            })
            .catch((error) => console.log(error));
        };
       
  return (
    <ScrollView >
    <View style={styles.studentRegisterView}>
      <Text style={styles.createNewAccount}>{`Create new  account `}</Text>
      <Image
        style={styles.undrawMyAppReGxtj1Icon}
        resizeMode="cover"
        source={require("../../assets/students/RegisterPage/undraw.png")}
      />
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../../assets/students/RegisterPage/rectangle7.png")}
      />
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../../assets/students/RegisterPage/ellipse111.png")}
      />
      <Image
        style={styles.ellipseIcon1}
        resizeMode="cover"
        source={require("../../assets/students/RegisterPage/ellipse121.png")}
      />
      <Pressable
        style={styles.vectorPressable}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../../assets/students/RegisterPage/vector7.png")}
        />
      </Pressable>
      <TextInput
      required
        style={styles.rectangleTextInput}
        placeholder="  Full name "
        keyboardType="default"
        onChangeText={text=>handleChange(text,"fullName")}
      />
      <TextInput
      required
        style={styles.rectangleTextInput1}
        placeholder="  Password"
        autoCapitalize="none"
        minLength={8}
        enablesReturnKeyAutomatically={true}
        autoCorrect={false}
        secureTextEntry={passwordVisibility}
        keyboardType="default"
        onChangeText={text=>handleChange(text,"password")}
      />
      <TextInput
      required
        style={styles.rectangleTextInput2}
        placeholder="  Email"
        autoCapitalize="none"
        keyboardType="default"
        onChangeText={text=>{
       
          handleChange(text,"email")}}
      />
      <TextInput
      required
        style={styles.rectangleTextInput3}
        placeholder="  Phone number "
        keyboardType="phone-pad"
        onChangeText={text=>handleChange(text,"phoneNumber")}
      />
      <TextInput
        style={styles.birthDate}
        placeholder="  Date of birth "
        keyboardType="default"
        onChangeText={text=>handleChange(text,"dateOfBirth")}
      />
      <TextInput
        style={styles.genderText}
        placeholder="   gender "
        keyboardType="default"
        onChangeText={text=>handleChange(text,"gender")}
      />
      <TextInput
        style={styles.cityText}
        placeholder="   city"
        keyboardType="default"
        onChangeText={text=>handleChange(text,"city")}
      />
      {/* <TextInput
        style={styles.cityText}
        placeholder="   university "
        keyboardType="default"
      /> */}
      <TextInput
        style={styles.lookingForText}
        placeholder="   Looking for"
        keyboardType="default"
        onChangeText={text=>handleChange(text,"lookingFor")}
      />
       <TextInput
       required
        style={styles.cinText}
        placeholder="  C.I.N"
        keyboardType="phone-pad"
        onChangeText={text=>handleChange(text,"cin")}
      />
      <TextInput
        style={styles.maxBudgetText}
        placeholder="  Max budget "
        keyboardType="default"
        onChangeText={text=>handleChange(text,"maxBudget")}

      />
      <Image
        style={styles.icons8PhotoGallery1001}
        resizeMode="cover"
        source={require("../../assets/students/RegisterPage/icons.png")}
      />
      <Text style={styles.uploadYourPicture}>{`Upload your picture `}</Text>
      <Pressable
        style={styles.loginPressable}
        onPress={() => navigation.navigate("WelcomeLoginStudent")}
      >
        <Text style={styles.loginText}>login</Text>
        <Text style={styles.text}>{` `}</Text>
      </Pressable>
      <Text style={styles.haveAnAccount}>{`Already have an account ? `}</Text>
      <Pressable
        style={styles.rectanglePressable}
        onPress={()=>handleSubmit()}
      />
      <Text style={styles.registerText}>{`Register`}</Text>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rectangleDatePickerValue: {
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: 320,
    height: 50,
  },
  rectangleDropdowndropDownContainer: {
    backgroundColor: "#d9d9d9",
  },
  rectangleDropdown1dropDownContainer: {
    backgroundColor: "#d9d9d9",
  },
  rectangleDropdown2dropDownContainer: {
    backgroundColor: "#d9d9d9",
  },
  rectangleDropdown3dropDownContainer: {
    backgroundColor: "#d9d9d9",
  },
  createNewAccount: {
    position: "absolute",
    top: 243,
    left: 106,
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
    textAlign: "left",
  },
  undrawMyAppReGxtj1Icon: {
    position: "absolute",
    top: 52,
    left: 94,
    width: 204,
    height: 165,
    overflow: "hidden",
  },
  rectangleIcon: {
    position: "absolute",
    top: 653,
    left: 62,
    width: 161,
    height: 23,
  },
  ellipseIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 119,
    height: 119,
    opacity: 0.3,
  },
  ellipseIcon1: {
    position: "absolute",
    top: 55,
    left: 0,
    width: 75,
    height: 80,
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    top: "100%",

  },
  vectorPressable: {
    position: "absolute",
    left: "2.54%",
    top: "2.89%",
    right: "92.88%",
    bottom: "94.78%",
    width: "4.58%",
    height: "2.32%",
  },
  rectangleTextInput: {
    position: "absolute",
    top: "23%",
    left: "6%",
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: "88%",
    height:"3.8%",
  },
  rectangleTextInput1: {
    position: "absolute",
    top: "32%",
    left: "6%",
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: "88%",
    height:"3.8%",
  },
  rectangleTextInput2: {
    position: "absolute",
    top: "27.5%",
    left: "6%",
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: "88%",
    height:"3.8%",
  },
  rectangleTextInput3: {
    position: "absolute",
    top: "36.5%",
    left: "6%",
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: "88%",
    height:"3.8%",
  },
  birthDate:{
    position: "absolute",
    top: "41%",
    left: "6%",
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: "88%",
    height:"3.8%",

  },
  genderText:{
    position: "absolute",
    top: "45.5%",
    left: "6%",
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: "88%",
    height:"3.8%",

  },
  cityText:{
    position: "absolute",
    top: "50%",
    left: "6%",
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: "88%",
    height:"3.8%",

  },
  lookingForText:{
    position: "absolute",
    top: "54.5%",
    left: "6%",
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: "88%",
    height:"3.8%",

  },
  cinText:{
    position: "absolute",
    top: "59%",
    left: "6%",
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: "88%",
    height:"3.8%",

  },
  maxBudgetText:{
    position: "absolute",
    top: "63.5%",
    left: "6%",
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: "88%",
    height:"3.8%",

  },
  // rectangleRNKDatepicker: {
  //   position: "absolute",
  //   top: "41%",
  //   left: "6%",
  // },
  // dropDownPicker: {
  //   backgroundColor: "#d9d9d9",
  // },
  // rectangleView: {
  //   position: "absolute",
  //   top: "45.5%",
  //   left: "6%",
  //   borderRadius: 13,
  //   width: 320,
  //   height: 50,
  // },
  // dropDownPicker1: {
  //   backgroundColor: "#d9d9d9",
  // },
  // rectangleView1: {
  //   position: "absolute",
  //   top: "50%",
  //   left: "6%",
  //   borderRadius: 13,
  //   width: 320,
  //   height: 50,
  // },
  // dropDownPicker2: {
  //   backgroundColor: "#d9d9d9",
  // },
  // rectangleView2: {
  //   position: "absolute",
  //   top: "54.5%",
  //   left: "6%",
  //   borderRadius: 13,
  //   width: 320,
  //   height: 50,
  // },
  // dropDownPicker3: {
  //   backgroundColor: "#d9d9d9",
  // },
  // rectangleView3: {
  //   position: "absolute",
  //   top: "59%",
  //   left: "6%",
  //   borderRadius: 13,
  //   width: 320,
  //   height: 50,
  // },
  rectangleTextInput4: {
    position: "absolute",
    top: "63.5%",
    left: "6%",
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: 320,
    height: 50,
  },
  rectangleTextInput5: {
    position: "absolute",
    top: "68%",
    left: "6%",
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: 320,
    height: 50,
  },
  icons8PhotoGallery1001: {
    position: "absolute",
    top: "73%",
    left: "12%",
    width: 68,
    height: 89,
  },
  uploadYourPicture: {
    position: "absolute",
    top: "76%",
    left: "35%",
    fontSize: 18,
    color: "#645e5e",
    textAlign: "left",
    width: "55%",
    height: "10%",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 5,
  },
  loginText: {
    color: "#000",
    height: "20.2%",

  },
  text: {
    color: "#000",
  },
  loginPressable: {
    position: "absolute",
    top: "88%",
    left: "76%",
    fontSize: 16,
    textAlign: "left",
    width: "10.76%",
    height: "7.2%",
  },
  haveAnAccount: {
    position: "absolute",
    top: "88%",
    left: "15%",
    fontSize: 16,
    color: "#000",
    textAlign: "left",
  },
  rectanglePressable: {
    position: "absolute",
    top: "80.93%",
    left: "15%",
    borderRadius: 13,
    backgroundColor: "#3f424a",
    width: "70%",
    height: "4%",
  },
  registerText: {
    position: "absolute",
    top: "81.50%",
    left: "38%",
    fontSize: 20,
    color: "#fff",
    textAlign: "left",
    width: 152,
    height: 32,
  },
  studentRegisterView: {
    position: "relative",
    backgroundColor: "#6a9ea9",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    flex: 1,
    width: "100%",
    height: 1313,
  },
});

export default StudentRegister;
