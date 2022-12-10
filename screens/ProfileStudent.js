import * as React from "react";
import { Image, StyleSheet, Text, View, ScrollView,Pressable } from "react-native";
import axios from "axios"
import link from "../Link";
import { useNavigation } from "@react-navigation/native";


const ProfileStudent = (props) => {
  const navigation = useNavigation();

  let data=props.route.params.userInfo[0]
  console.log(data,'the d');
  return (
    <ScrollView>
      <View style={styles.profilContainer}>
        <View style={styles.profileView}>
          <Text style={styles.user}>{data.fullName}</Text>
          <Image
            style={styles.userIcon}
            resizeMode="cover"
            source={{uri:data.photo}}
          />
        </View>
        <View style={styles.lineView} />

        <Image
          style={styles.userIcon1}
          resizeMode="cover"
          source={require("../assets/Profile/vector10.png")}
        />
        <Text style={styles.usernameText}> Username : </Text>
        <Text style={styles.UserName}> {data.fullName}</Text>
        <Image
          style={styles.contactIcon}
          resizeMode="cover"
          source={require("../assets/Profile/contact1.png")}
        />
        <Text style={styles.contactText}>Contact : </Text>
        <Text style={styles.numberText}>{data.phoneNumber}</Text>
        <Image
          style={styles.emailIcon}
          resizeMode="cover"
          source={require("../assets/Profile/email2.png")}
        />
        <Text style={styles.emailText}>Email : </Text>
        <Text style={styles.emailText1}>{data.email}</Text>
        <Image
          style={styles.genderIcon}
          resizeMode="cover"
          source={require("../assets/Profile/gender.png")}
        />
        <Text style={styles.genderArea}>Gender :</Text>
        <Text style={styles.genderText}>{data.gender}</Text>
        <Image
          style={styles.calenderIcon}
          resizeMode="cover"
          source={require("../assets/Profile/calendar.png")}
        />
        <Text style={styles.dateArea}>Date of birth :</Text>
        <Text style={styles.dateText}>{data.dateOfBirth}</Text>

        <View style={styles.lineView1} />
        {/* <Image
          style={styles.instagram1Icon}
          resizeMode="cover"
          source={require("../assets/Profile/instagram1.png")}
        /> */}
        <Pressable
         onPress={() =>
          axios
            .post(`${link}/owner/logout`)
            .then((res) => {
              console.log(res.data);
              navigation.navigate("Intro");
            })
            .catch((err) => console.log(err))
        }>
          <Image
          style={styles.logoutIcon}
          source={require('../assets/Profile/logout.png')}/>
          <Text style={{width:85,height:80,bottom:158,left:80,fontSize:18}}>Lougout</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  profilContainer: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  profileView: {
    position: "relative",
    borderRadius: 30,
    backgroundColor: "#DFE8EA",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 2,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
  user: {
    position: "absolute",
    top: "22.00%",
    left: "30%",
    fontSize: 16,
    fontWeight: "100%",
    color: "#000",
    textAlign: "left",
    width: 150,
    height: 50,
    fontWeight: "500",
  },
  userIcon: {
    position: "absolute",
    top: "8%",
    left: "35.50%",
    width: "22%",
    height: "10.8%",
    overflow: "hidden",
  },
  lineView: {
    position: "absolute",
    top: "30.00%",
    left: "0%",
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 3,
    width: "100%",
    height: "10%",
  },

  usernameText: {
    position: "absolute",
    top: "32%",
    left: "15%",
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
  },
  UserName: {
    position: "absolute",
    top: "32.3%",
    left: "47%",
    fontSize: 18,
    color: "#000",
    textAlign: "left",
    width: "60.76%",
    height: "5.2%",
  },
  userIcon1: {
    position: "absolute",
    height: "4.2%",
    width: "7%",
    top: "31.5%",
    left: "7%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  contactIcon: {
    position: "absolute",
    top: "38%",
    left: "6%",
    width: "10.76%",
    height: "5.2%",
  },
  contactText: {
    position: "absolute",
    top: "39%",
    left: "20%",
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
    textAlign: "left",
  },
  numberText: {
    position: "absolute",
    top: "39.5%",
    left: "50%",
    fontSize: 18,
    color: "#000",
    textAlign: "left",
  },
  emailIcon: {
    position: "absolute",
    height: "5.2%",
    width: "10.76%",
    top: "46%",
    right: "84.27%",
    bottom: "34.61%",
    left: "6%",
    // maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  emailText: {
    position: "absolute",
    top: "46.5%",
    left: "20%",
    fontSize: 20,
    color: "#000",
    textAlign: "left",
    fontWeight: "700",
  },
  emailText1: {
    position: "absolute",
    top: "46.5%",
    left: "41%",
    fontSize: 18,
    color: "#000",
    textAlign: "left",
  },
  genderArea: {
    position: "absolute",
    top: "53.5%",
    left: "20%",
    fontSize: 20,
    fontWeight: "700",

    color: "#000",
    textAlign: "left",
  },
  genderIcon: {
    position: "absolute",
    top: "52.5%",
    left: "6%",
    width: "10%",
    height: "5%",
  },
  genderText: {
    position: "absolute",
    top: "53.8%",
    left: "46%",
    fontSize: 18,
    color: "#000",
    textAlign: "left",
  },
  calenderIcon: {
    position: "absolute",
    top: "60%",
    left: "6%",
    width: "10%",
    height: "4%",
  },
  dateArea: {
    position: "absolute",
    top: "60%",
    left: "20%",
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
    textAlign: "left",
  },
  dateText: {
    position: "absolute",
    top: "60.3%",
    left: "59%",
    fontSize: 18,
    color: "#000",
    textAlign: "left",
  },
  lineView1: {
    position: "absolute",
    top: "75%",
    left: "0%",
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 3,
    width: "100%",
    height: "10%",
  },
  instagram1Icon: {
    position: "absolute",
    top: "78%",
    left: "7%",
    width: "20%",
    height: "10%",
    borderRadius: 10,
  },
  logoutIcon: {
    position: "relative",
    bottom:168,
    left: 76,
    width: 80,
    height: 80,
    borderRadius: 10,
  },
});
export default ProfileStudent;
