import React, { useState, useEffect } from "react";
import axios from "axios";import {Image,StyleSheet,Text,Pressable,
TextInput,View,TouchableOpacity,ScrollView} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useTogglePasswordVisibility } from "../../../hooks/TogglePassword.js";
import { useNavigation } from "@react-navigation/native";
import link from "../../../Link.js";

const HouseOwnerRegister = (props) => {
  const navigation = useNavigation();
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
    const [image, setImage] = useState(null);
    

  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    dateOfBirth: "",
    city: "",
    cin: "",
    photo:
      "https://media.istockphoto.com/id/1297349747/photo/hot-air-balloons-flying-over-the-botan-canyon-in-turkey.jpg?b=1&s=170667a&w=0&k=20&c=1oQ2rt0FfJFhOcOgJ8hoaXA5gY4225BA4RdOP1RRBz4=",
  });


  const handleChange = (value, name) => {
    setData({
      ...data,
      [name]: value,
    })
    props.cb(data.email)
  };
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    axios
      .post(`${link}/owner/register`, data)
      .then((response) => {
         props.cb1(response.data.insertId)
        console.log(response.data.insertId, "=====id from sign up screen");
        navigation.navigate("ValidationScrenHomeOwner");
        console.log(response.data, "the data received... ");
      })
      .catch((error) => {
        console.log(error.message);
       
      });
  };

  return (
    <ScrollView>
      <View style={styles.houseOwnerRegisterView}>
        <Image
          style={styles.homeOwnerLogo}
          resizeMode="cover"
          source={require("../../../assets/homeOwner/Register/undrawAccess.png")}
        />
        <TextInput
          style={styles.fullNameText}
          placeholder="  Full name "
          keyboardType="default"
          onChangeText={(text) => handleChange(text, "fullName")}
        />
        <TextInput
          style={styles.emailText}
          required
          placeholder=" Email"
          autoCapitalize="none"
          keyboardType="default"
          onChangeText={(text) => handleChange(text, "email")}
        />

        <TextInput
          style={styles.passwordInput}
          required
          placeholder=" Password"
          autoCapitalize="none"
          keyboardType="default"
          // minLength={8}
          enablesReturnKeyAutomatically={true}
          autoCorrect={false}
          secureTextEntry={passwordVisibility}
          onChangeText={(text) => handleChange(text, "password")}
        />
        <TextInput
          style={styles.phoneInput}
          required
          placeholder="  Phone number "
          keyboardType="phone-pad"
          onChangeText={(text) => handleChange(text, "phoneNumber")}
        />

        <TextInput
          style={styles.cityInput}
          placeholder="  City"
          keyboardType="default"
          onChangeText={(text) => handleChange(text, "city")}
        />
        <TextInput
          style={styles.cinInput}
          placeholder="  Cin"
          keyboardType="phone-pad"
          onChangeText={(text) => handleChange(text, "cin")}
        />
        <TextInput
          style={styles.dateOfBirth}
          placeholder="  DateOfBirth"
          keyboardType="default"
          onChangeText={(text) => handleChange(text, "dateOfBirth")}
        />

        <Pressable
          style={styles.rectanglePressable}
          onPress={() => handleSubmit()}
        />
        <Text style={styles.registerText}>{`Register`}</Text>

        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../../../assets/homeOwner/Register/ellipse11.png")}
        />
        <Image
          style={styles.ellipseIcon1}
          resizeMode="cover"
          source={require("../../../assets/homeOwner/Register/ellipse12.png")}
        />
        <Image
          style={styles.ellipseIcon2}
          resizeMode="cover"
          source={require("../../../assets/homeOwner/Register/ellipse111.png")}
        />
        <Image
          style={styles.photoGallery}
          resizeMode="cover"
          source={require("../../../assets/homeOwner/Register/icons.png")}
        />
        <Text style={styles.uploadYourPicture}>{` Upload your picture `}</Text>
        <Pressable
          style={styles.vectorPressable}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../../../assets/homeOwner/Register/vector.png")}
          />
        </Pressable>
        <Pressable
          style={styles.loginPressable}
          onPress={() => navigation.navigate("WelcomeLoginHouseOwner")}
        >
          <Text style={styles.text}>{`LOGIN `}</Text>
        </Pressable>
        <Text style={styles.haveAnAccount}>{`Have an account ?`}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  houseOwnerRegisterView: {
    position: "relative",
    backgroundColor: "#6a9ea9",
    flex: 1,
    width: "100%",
    height: 984,
  },
  homeOwnerLogo: {
    position: "absolute",
    top: "3%",
    left: "30%",
    borderRadius: 35,
    width: "50%",
    height: "22%",
  },
  rectangleDropdowndropDownContainer: {
    backgroundColor: "#d9d9d9",
  },
  rectangleDatePickerValue: {
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: 320,
    height: 50,
  },

  photoGallery: {
    position: "absolute",
    top: "72%",
    left: "10%",
    width: 68,
    height: 89,
  },
  uploadYourPicture: {
    position: "absolute",
    top: "76%",
    left: "37%",
    fontSize: 16,
    color: "#645e5e",
    textAlign: "left",
    width: 160,
    height: 40,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  loginText: {
    color: "#fff",
    left: "10%",
  },
  text: {
    color: "#000",
    fontSize: 16,
    top: 0,
    // width: "100%",
    // height: "20%",
  },
  loginPressable: {
    position: "absolute",
    top: "90.2%",
    left: "62%",
    fontSize: 10,
    textAlign: "left",
    width: "14%",
    height: "5%",
  },
  haveAnAccount: {
    position: "absolute",
    top: "90%",
    left: "15%",
    fontSize: 18,
    color: "#000",
    textAlign: "left",
  },
  dropDownPicker: {
    backgroundColor: "#d9d9d9",
  },
  rectangleView: {
    position: "absolute",
    top: 624,
    left: 18,
    borderRadius: 13,
    width: 320,
    height: 50,
  },

  rectangleTextInput1: {
    position: "absolute",
    top: 848,
    left: 27,
    borderRadius: 13,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: 320,
    height: 50,
  },
  fullNameText: {
    position: "absolute",
    top: "29%",
    left: 18,
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: 320,
    height: 50,
  },
  emailText: {
    position: "absolute",
    top: "35%",
    left: 18,
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: 320,
    height: 50,
  },
  passwordInput: {
    position: "absolute",
    top: "41%",
    left: 18,
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: 320,
    height: 50,
  },
  phoneInput: {
    position: "absolute",
    top: "47%",
    left: 18,
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: 320,
    height: 50,
  },
  cityInput: {
    position: "absolute",
    top: "53%",
    left: 18,
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: 320,
    height: 50,
  },
  cinInput: {
    position: "absolute",
    top: "59%",
    left: 18,
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: 320,
    height: 50,
  },
  dateOfBirth: {
    position: "absolute",
    top: "65%",
    left: 18,
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: 320,
    height: 50,
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
    top: 47,
    left: 0,
    width: 75,
    height: 80,
  },
  ellipseIcon2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 119,
    height: 119,
    opacity: 0.3,
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorPressable: {
    position: "absolute",
    left: "5%",
    top: "3.15%",
    right: "90%",
    bottom: "94%",
    width: "5%",
    height: "2.85%",
  },
  rectanglePressable: {
    position: "absolute",
    top: "82.23%",
    left: "15%",
    borderRadius: 13,
    backgroundColor: "#3f424a",
    width: "70%",
    height: "4%",
  },
  registerText: {
    position: "absolute",
    top: "82.50%",
    left: "38%",
    fontSize: 20,
    color: "#fff",
    textAlign: "left",
    width: 152,
    height: 32,
  },
});

export default HouseOwnerRegister;
