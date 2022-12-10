import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Splashscreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.splashscreenView}>
      <Image
        style={styles.aaa2Icon}
        resizeMode="cover"
        source={require("../assets/Splashscreen/aaa1.png")}
        onPress={() => navigation.navigate("Intro")}
      />
      <Pressable
        style={styles.groupPressable}
       
      >
        <View style={styles.rectangleView} />
        <Text style={styles.getStartedText}
          onPress={() => navigation.navigate("Intro")}
          >
            Get Started!</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  aaa2Icon: {
    position: "absolute",
    top: 300,
    left: 110,
    width: 159,
    height: 140,
  },
  rectangleView: {
    position: "absolute",
    top: -100,
    left: -12,
    borderRadius: 30,
    backgroundColor: "rgba(63, 66, 74, 0.8)",
    width: 250,
    height: 60,
  },
  getStartedText: {
    position: "absolute",
    top: -78,
    left: 54,
    fontSize: 23,
    letterSpacing: -0.41,
    lineHeight: 22,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
  },
  groupPressable: {
    position: "absolute",
    top: 742,
    left: 82,
    width: 250,
    height: 60,
  },
  splashscreenView: {
    position: "relative",
    borderRadius: 50,
    backgroundColor: "#E0E0E0",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Splashscreen;
