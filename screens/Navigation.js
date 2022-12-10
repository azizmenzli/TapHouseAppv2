const Stack = createNativeStackNavigator();
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Splashscreen from "./Splashscreen";
import ValidationScrenHomeOwner from "./homeOwner/auth/ValidationScreen2";
import HouseOwnerRegister from "./homeOwner/auth/OwnerSignupForm";
import WelcomeLoginHouseOwner from "./homeOwner/auth/WelcomeLoginHouseOwner";
import WelcomeLoginStudent from "./students/WelcomeLoginStudent";
import ValidationScrenStudent from "./students/ValidationScreenStudent";
import StudentRegister from "./students/RegisterPageVariant2";
import Profile from "./Profile";
import ProfileStudent from './ProfileStudent'
import HomePageStudent from "./HomePage";
import Intro from "./Intro";
import House from "./addHouse/House";
import GetLocation from './GetLocation'






import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import ProfileView from "./ProfileView";
import Detail from "./Detail";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [mail, setMail] = useState("");
  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };
  const getEmail = (x) => {
    setEmail(x);
  };
  const getMail = (y) => {
    setMail(y);
  };
  const getId = (z) => {
    setId(z);
  };

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen
                name="Splashscreen"
                component={Splashscreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Intro"
                component={Intro}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="WelcomeLoginHouseOwner"
                options={{ headerShown: false }}
                children={() => <WelcomeLoginHouseOwner cb1={id} />}
              />
              <Stack.Screen
                name="HouseOwnerRegister"
                options={{ headerShown: false }}
                children={() => <HouseOwnerRegister cb={getMail} cb1={getId} />}
              />
              <Stack.Screen
                name="ValidationScrenHomeOwner"
                options={{ headerShown: false }}
                children={() => <ValidationScrenHomeOwner cb={mail} cb1= {id} />}
              />

              <Stack.Screen
                name="WelcomeLoginStudent"
                options={{ headerShown: false }}
                children={()=> <WelcomeLoginStudent />}
              />
              <Stack.Screen
                name="StudentRegister"
                // component={StudentRegister}
                options={{ headerShown: false }}
                children={() =><StudentRegister cb={getEmail} />}
              />
              <Stack.Screen
                name="ValidationScrenStudent"
                options={{ headerShown: false }}
                children={() => <ValidationScrenStudent cb={email} cb1= {id} />}
              />
              <Stack.Screen
                name="HomePageStudent"
                component={HomePageStudent}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ProfileView"
                component={ProfileView}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }}
              />
               <Stack.Screen
                name="Detail"
                component={Detail}
                options={{ headerShown: false }}
              />
              <Stack.Screen
              name="House"
              component={House}
              options={{ headerShown: false }}
            />
              <Stack.Screen
              name="GetLocation"
              component={GetLocation}
              options={{ headerShown: false }}
            />
              <Stack.Screen
              name="ProfileStudent"
              component={ProfileStudent}
              options={{ headerShown: false }}
            />
            </Stack.Navigator> 
          ) : null}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;
