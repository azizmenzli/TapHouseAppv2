import React, { useState } from "react";
import {
  Text, StyleSheet, TouchableOpacity, Image, ScrollView,
  Pressable, TouchableHighlight, View,
} from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTogglePasswordVisibility } from "../.././hooks/TogglePassword.js";
import { useNavigation } from "@react-navigation/native";

import axios from "axios";
import link from "../.././Link.js";

const WelcomeLoginStudent = (props) => {
  const navigation = useNavigation();

  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [onLogin, setOnLogin] = useState({
    email: "",
    password: "",
  });
  const handleChange = (value, name) => {
    setOnLogin({
      ...onLogin,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    console.log(onLogin)
    axios
      .post(`${link}/student/login`, onLogin)
      .then((response) => {
        console.log(response.data);
        setOnLogin(response.data)
        navigation.navigate("HomePageStudent", { info: response.data })
        console.log(onLogin, "2")
      })
      .catch((error) => {if (error.message === "Request failed with status code 401") {
        alert('Email or password is incorrect please check it again ..!')
      }})
  };
  // console.log(props.cb1, "adhem")
  return (

    <View style={styles.welcomeLoginStudent}>
      <Image
        style={styles.undrawChoosingHouseRe1rv7Icon}
        resizeMode="cover"
        source={require("../../assets/students/WelcomeLoginpage/undrawChoosing.png")}
      />
      <Text style={styles.welcomeBackText1}>
        <Text style={styles.welcomeBackText}>Welcome back</Text>
        <Text style={styles.text}>{` `}</Text>
      </Text>
      <Text style={styles.forgetPasswordText}>Forget Password?</Text>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../../assets/students/WelcomeLoginpage/ellipse113.png")}
      />
      <RNPTextInput
        style={styles.rectangleRNPTextInput}
        placeholder="Enter Your Password"
        mode="outlined"
        keyboardType="default"
        minLength={8}
        enablesReturnKeyAutomatically={true}
        autoCorrect={false}
        secureTextEntry={passwordVisibility}
        theme={{ colors: { background: "#d9d9d9" } }}
        onChangeText={(text) => handleChange(text, "password")}
      />
      <Pressable style={styles.eye} onPress={handlePasswordVisibility}>
        <MaterialCommunityIcons name={rightIcon} size={30} color="#44b3cc" />
      </Pressable>
      {/* <Image
        style={styles.eyePasswordIcon}
        resizeMode="cover"
        source={require("../../assets/students/WelcomeLoginpage/eyePassword.png")}
      /> */}
      <RNPTextInput
        style={styles.rectangleRNPTextInput1}
        placeholder="Enter Your Email"
        mode="outlined"
        keyboardType="default"
        autoCorrect={false}
        autoCapitalize="none"
        theme={{ colors: { background: "#d9d9d9" } }}
        onChangeText={(text) => handleChange(text, "email")}
      />
      <TouchableHighlight
        style={styles.rectangleTouchableHighlight}
        underlayColor="#fff"
        onPress={() => handleSubmit()}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../../assets/students/WelcomeLoginpage/rectangle3.png")}
        />
      </TouchableHighlight>
      <Text style={styles.buttonLoginText}>Login</Text>
      <View style={styles.groupView}>
        <Pressable
          style={styles.signupPressable}
          onPress={() => navigation.navigate("StudentRegister")}
        >
          <Text style={styles.signupText}>Signup</Text>
        </Pressable>
        <Text
          style={styles.dontHaveAnAccount}
        >{`Don’t have an account? `}</Text>
      </View>
      {/* <View style={styles.lineView} />
      <View style={styles.lineView1} /> */}
      <Text style={styles.orText}></Text>
      <Pressable style={styles.rectanglePressable} onPress={() => { }} />
      <Text style={styles.loginWithFacebook}>Login with Facebook</Text>
      <Image
        style={styles.facebookLogoIcon}
        resizeMode="cover"
        source={require("../../assets/students/WelcomeLoginpage/facebookLogo.png")}
      />
      <Pressable style={styles.rectanglePressable1} />
      <Text style={styles.loginWithGoogle}>Login with Google</Text>
      <Image
        style={styles.googleLogoIcon}
        resizeMode="cover"
        source={require("../../assets/students/WelcomeLoginpage/googleLogo.png")}
      />
      <Pressable
        style={styles.vectorPressable}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../../assets/students/WelcomeLoginpage/vector5.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  undrawChoosingHouseRe1rv7Icon: {
    position: "absolute",
    top: 60,
    left: 94,
    width: 177,
    height: 100,
    overflow: "hidden",
  },
  welcomeBackText: {
    fontSize: 24,
    left: 50,


  },
  text: {
    fontSize: 20,

  },
  welcomeBackText1: {
    position: "absolute",
    top: 180,
    left: 120,
    fontWeight: "700",
    color: "#696969",
    textAlign: "left",
  },
  forgetPasswordText: {
    position: "absolute",
    top: 390,
    left: 236,
    fontSize: 14,
    color: "#0092bf",
    textAlign: "left",
  },
  ellipseIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 119,
    height: 119,
    opacity: 0.3,
  },
  rectangleRNPTextInput: {
    position: "absolute",
    top: 315.5,
    left: 38,
    borderRadius: 13,
    borderStyle: "solid",
    width: 312,
    height: 48,
  },
  eyePasswordIcon: {
    position: "absolute",
    top: 334.5,
    left: 309,
    width: 24,
    height: 24,
  },
  rectangleRNPTextInput1: {
    position: "absolute",
    top: 244.5,
    left: 37.5,
    borderRadius: 13,
    borderStyle: "solid",
    width: 313,
    height: 49,
  },
  icon: {
    borderRadius: 5,
    width: "100%",
    height: "100%",
  },
  rectangleTouchableHighlight: {
    position: "absolute",
    left: 42.5,
    top: 428,
    width: 290,
    height: 48,
  },
  buttonLoginText: {
    position: "absolute",
    top: 438,
    left: 175,
    fontSize: 16,
    fontWeight: "500",
    color: "rgba(255, 255, 255, 0.9)",
    textAlign: "left",
  },
  signupText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#2f89fc",
    textAlign: "left",
  },
  signupPressable: {
    position: "absolute",
    left: 89,
    top: -10,
  },
  dontHaveAnAccount: {
    position: "absolute",
    top: -40,
    left: 30,
    fontSize: 14,
    fontWeight: "500",
    color: "rgba(0, 0, 0, 0.8)",
    textAlign: "left",
  },
  groupView: {
    position: "absolute",
    top: 536,
    left: 74,
    width: 229,
    height: 21,
  },
  lineView: {
    position: "absolute",
    top: 570.5,
    left: 35.5,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.5)",
    borderTopWidth: 1,
    width: 140,
    height: 1,
  },
  lineView1: {
    position: "absolute",
    top: 570.5,
    left: 207.5,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.5)",
    borderTopWidth: 1,
    width: 140,
    height: 1,
  },
  orText: {
    position: "absolute",
    top: 560,
    left: 184,
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.8)",
    textAlign: "left",
  },
  rectanglePressable: {
    position: "absolute",
    top: 594,
    left: 38,
    borderRadius: 10,
    backgroundColor: "#1877f2",
    width: 312,
    height: 48,
  },
  loginWithFacebook: {
    position: "absolute",
    top: 606,
    left: 130,
    fontSize: 14,
    fontWeight: "600",
    color: "rgba(255, 255, 255, 0.9)",
    textAlign: "left",
  },
  facebookLogoIcon: {
    position: "absolute",
    top: 600,
    left: 47,
    width: 26,
    height: 26,
  },
  rectanglePressable1: {
    position: "absolute",
    top: 653,
    left: 40,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.02)",
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.4)",
    borderWidth: 1,
    width: 312,
    height: 48,
  },
  loginWithGoogle: {
    position: "absolute",
    top: 666,
    left: 134,
    fontSize: 14,
    fontWeight: "600",
    color: "rgba(0, 0, 0, 0.6)",
    textAlign: "left",
  },
  googleLogoIcon: {
    position: "absolute",
    top: 664,
    left: 48,
    width: 26,
    height: 26,
  },
  icon1: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorPressable: {
    position: "absolute",
    left: "2.8%",
    top: "3.81%",
    right: "92.62%",
    bottom: "92.86%",
    width: "4.58%",
    height: "3.33%",
  },
  welcomeLoginStudent: {
    position: "relative",
    backgroundColor: "#dfe8ea",
    flex: 1,
    width: "100%",
    height: 840,
  },
  eye: {
    left: "82%",
    top: 330,
  },
});

export default WelcomeLoginStudent;
