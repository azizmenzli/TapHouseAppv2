import * as React from "react";
import {
  View,
  Image,
  StyleSheet,
  Pressable,
  Text,
  TouchableHighlight,
  ScrollView,

} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Linking } from 'react-native'
import axios from "axios";
import link from "../Link";

const Detail = (props) => {
  const navigation = useNavigation();
  const [data, setData] = React.useState([])
  const [idOwner, setIdOwner] = React.useState(Number)
  const [ownerData, setOwnerData] = React.useState([])

  let id = props.route.params.id
  console.log(props.route.params.infoProf[0].lookingFor, 'comiingFromTheDetail')
  // console.log(ownerData, 'FromTheDetailView');

  const checkUser=()=>{
    if(props.route.params.infoProf[0].lookingFor){
      navigation.navigate("ProfileStudent",{info:ownerData,userInfo:props.route.params.infoProf})
    }
    else if(!props.route.params.infoProf[0].lookingFor){
      navigation.navigate("Profile",{info:ownerData,userInfo:props.route.params.infoProf})
    }




  }

  React.useEffect(() => {

    getOneHouse()
  }, [])
  const getOneHouse = () => {
    axios.get(`${link}/house/${id}`).then((res) => {

      axios.get(`${link}/owner/${res.data[0].homeOwner_idhomeOwner}`).then((response) => {
        setData(res.data[0]),

          setOwnerData(response.data[0])
      })

    })
  }
  return (

    <ScrollView>
      <View style={styles.detailView}>
        <Pressable
          style={styles.ellipsePressable}
          onPress={() => {checkUser()}}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={{uri:ownerData.photo}}
          />
        </Pressable>

        <Pressable
          style={styles.vector21Pressable}
          onPress={() => navigation.navigate("HomePageStudent")}
        >
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/Detail/12.png")}
          />
        </Pressable>
        <View style={styles.maskGroupView} />
        <Text style={styles.rDText}>{ }</Text>
        <TouchableHighlight
          style={styles.rectangleTouchableHighlight}
          underlayColor="#fff"
          onPress={() => { }}
        >
          <View />
        </TouchableHighlight>
        <Text style={styles.bookText}>{`Book `}</Text>
        <Image
          style={styles.iconLocationPin}
          resizeMode="cover"
          source={require("../assets/Detail/location.png")}
        />
        <Image
          style={styles.images21Icon}
          resizeMode="cover"
          source={{ uri: data.photo }}
        />
        <View style={styles.frameView}>
          <View style={styles.groupView}>
            <Text style={styles.homeOwnerAhmedZakria}>
              <Text style={styles.homeOwnerAhmedContainer}>
                {`Home owner: `}
                <Text style={styles.ahmedZakriaText}>{ownerData.fullName}</Text>
              </Text>
            </Text>
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../assets/Detail/user.png")}
            />
          </View>
          <Pressable
            onPress={() => Linking.openURL(`tel:${ownerData.phoneNumber}`)}>
            <Image
              style={styles.iconsaxLinearcallcalling}
              resizeMode="cover"
              source={require("../assets/Detail/callcalling.png")}
            /></Pressable>
        </View>
        <View style={styles.frameView1}>
          <Text style={styles.descriptionText}>Description</Text>
          <Text style={styles.darArianaOneRoomWithBathr}>
            {data.description}
            <Text style={styles.oneRoomWith}>
              { }
            </Text>
          </Text>
          <View style={styles.lineView} />
        </View>
        <View style={styles.frameView2}>
          <Text style={styles.Ariana}>{`${data.city}  ${data.adress}`}</Text>

        </View>
        <Text style={styles.Price}>Price</Text>
        <Text style={styles.text}>{data.price}</Text>
        <Text style={styles.tNDText}>.TND</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
  },
  ellipsePressable: {
    position: "absolute",
    left: 290,
    top: 45,
    width: 76,
    height: 70,
  },
  iconsaxLinearhome: {
    position: "absolute",
    top: 793,
    left: 49,
    width: 43,
    height: 43,
    overflow: "hidden",
  },
  iconsaxLinearmessage: {
    position: "absolute",
    top: 796,
    left: 174,
    width: 43,
    height: 43,
    overflow: "hidden",
  },
  iconsaxLinearblogger: {
    position: "absolute",
    top: 789,
    left: 294,
    width: 51,
    height: 51,
    overflow: "hidden",
  },
  icon1: {
    width: "100%",
    height: "100%",
    top:30
  },
  vector21Pressable: {
    position: "absolute",
    left: 14,
    top: 28,
    width: 20,
    height: 30,
  },
  maskGroupView: {
    position: "absolute",
    top: 160,
    left: 41,
    width: 324.12,
    height: 215,
  },
  rDText: {
    position: "absolute",
    top: 125,
    left: 46,
    fontSize: 18,
    letterSpacing: 8.1,
    fontWeight: "700",
    color: "#000",
    textAlign: "left",
    width: 111,
    height: 25,
  },
  rectangleTouchableHighlight: {
    position: "absolute",
    top: 733,
    left: 105,
    borderRadius: 10,
    backgroundColor: "#000",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 190,
    height: 39,
  },
  bookText: {
    position: "absolute",
    top: 745,
    left: 181,
    fontSize: 15,
    fontWeight: "700",
    color: "#fff",
    textAlign: "left",
  },
  iconLocationPin: {
    position: "absolute",
    height: "3%",
    width: "5.2%",
    top: "44.77%",
    right: "85.64%",
    bottom: "51.54%",
    left: "9.15%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  images21Icon: {
    position: "absolute",
    top: "15.5%",
    left: "7.5%",
    borderRadius: 13,
    width: "85%",
    height: "28%",
  },
  ahmedZakriaText: {
    textDecoration: "underline",
  },
  homeOwnerAhmedContainer: {
    lineBreak: "anywhere",
    width: "100%",
  },
  homeOwnerAhmedZakria: {
    position: "absolute",
    top: 6,
    left: 43,
    fontSize: 10,

    color: "#333",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 93,
    height: 34,
  },
  vectorIcon: {
    position: "absolute",
    height: "106%",
    width: "22.43%",
    top: "-3%",
    right: "78.12%",
    bottom: "-3%",
    left: "-0.55%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView: {
    position: "absolute",
    top: 16,
    left: 9,
    width: 136,
    height: 25,
  },
  iconsaxLinearcallcalling: {
    position: "absolute",
    top: 16,
    left: 268,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  frameView: {
    position: "absolute",
    top: 671,
    left: 23,
    width: 314,
    height: 45,
    overflow: "hidden",
  },
  Ariana: {
    position: "absolute",
    width: 184,
    left: -239,
    height: 22,
    fontWeight: "500",
    fontsize: 18,

  },
  descriptionText: {
    position: "absolute",
    top: 5,
    left: 6,
    fontSize: 18,
    fontWeight: "500",

    color: "#000",
    textAlign: "left",
  },
  darAriana: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  oneRoomWith: {
    margin: 0,
  },
  darArianaOneRoomWithBathr: {
    position: "absolute",
    top: 31,
    left: 17,
    fontSize: 16,
    color: "#2c2c2c",
    textAlign: "left",
    width: 332,
    height: 101,
  },
  lineView: {
    position: "absolute",
    top: 28.5,
    left: 7.5,
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 1,
    width: 110,
    height: 1,
  },
  frameView1: {
    position: "absolute",
    marginLeft: -175,
    top: 507,
    left: "50%",
    borderRadius: 10,
    backgroundColor: "#f9fffc",
    width: 359,
    height: 138,
    overflow: "hidden",
  },
  jan12022: {
    position: "relative",
    fontSize: 10,
    fontWeight: "300",
    color: "#828282",
    textAlign: "right",
    display: "flex",
    alignItems: "center",
    width: 60,
    height: 17,
  },
  frameView2: {
    position: "absolute",
    top: 393,
    left: 303,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    position: "absolute",
    top: 465,
    left: 38,
    fontSize: 16,
    fontWeight: "500",
    color: "#6f6f6f",
    textAlign: "left",
  },
  Price: {
    position: "absolute",
    top: 435,
    left: 39,
    width: 49,
    height: 24,
    fontWeight: "500",
    fontSize: 20,
    lineheight: 24,
  },
  tNDText: {
    position: "absolute",
    top: 465,
    left: 106,
    fontSize: 16,
    fontWeight: "500",
    color: "#6f6f6f",
    textAlign: "left",
  },
  detailView: {
    position: "relative",
    backgroundColor: "#e3f1f4",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Detail;
