import {Animated, Image, SafeAreaView, Text, View,StyleSheet, Platform,TouchableOpacity,TextInput} from 'react-native';
import React, {useState} from 'react';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import axios from 'axios';
import link from "../../../Link.js";
import { log } from 'react-native-reanimated';
import { useNavigation } from "@react-navigation/native";


 const CELL_SIZE = 30;
 const CELL_BORDER_RADIUS = 6;
 const DEFAULT_CELL_BG_COLOR = '#fff';
 const NOT_EMPTY_CELL_BG_COLOR = '#3CB371';
 const ACTIVE_CELL_BG_COLOR = '#f7fafe';

const {Value, Text: AnimatedText} = Animated;

const CELL_COUNT = 7;


const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));
const animateCell = ({hasValue, index, isFocused}) => {
  Animated.parallel([
    Animated.timing(animationsColor[index], {
      useNativeDriver: false,
      toValue: isFocused ? 1 : 0,
      duration: 250,
    }),
    Animated.spring(animationsScale[index], {
      useNativeDriver: false,
      toValue: hasValue ? 0 : 1,
      duration: hasValue ? 300 : 250,
    }),
  ]).start();
};

const ValidationScrenHomeOwner = (props) => {
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [ aymen, getCellOnLayoutHandler] = useClearByFocusCell({
    ...value,
    setValue,
  });
  const [em,setEm]=useState(props.cb)
     console.log(props,"aziz");
    //  console.log(route,"aymen");

  const renderCell = ({index, symbol, isFocused}) => {
    const hasValue = Boolean(symbol);
    const animatedCellStyle = {
      backgroundColor: hasValue
        ? animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          })
        : animationsColor[index].interpolate({
            inputRange: [0, 1],
            outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          }),
      borderRadius: animationsScale[index].interpolate({
        inputRange: [0, 1],
        outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
      }),
      transform: [
        {
          scale: animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0.2, 1],
          }),
        },
      ],
    };

    setTimeout(() => {
      animateCell({hasValue, index, isFocused});
    }, 0);

    return (
      <AnimatedText
        key={index}
        style={[styles.cell, animatedCellStyle]}
        onLayout={getCellOnLayoutHandler(index)}>
        {symbol || (isFocused ? <Cursor /> : null)}
      </AnimatedText>
    );
  };
  console.log(props.cb1,"<====id from verification");

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>Verification</Text>
      <Image style={styles.icon} source={require("../../../assets/ValidationScreen2/group9.png")} />
      <Text style={styles.subTitle}>
        {props.cb.length? null : "Please enter the verification code we send to your email address:`Please enter your mail  and the verification code we send to your email address`"}
      </Text>
           {props.cb.length ? null :<View style={styles.inputView} >
       <TextInput
        style={styles.inputText}
        placeholder="Email..."
        placeholderTextColor="#003f5c"
        onChangeText={text => setEm(text)} />
         </View> }
      <CodeField
        ref={ref}
        {...aymen}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        textContentType="oneTimeCode"
        renderCell={renderCell}
      />
      <TouchableOpacity style={styles.nextButton} onPress={()=>{
        axios
        .post(`${link}/owner/check`, {activationCode:value,email:em})
        .then(resp=>{console.log(resp);
          navigation.navigate("WelcomeLoginHouseOwner")}
        
        )
        .catch(err=>console.log(err.message))
      }}>
        
        <Text style={styles.nextButtonText}>Verify</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  codeFieldRoot: {
    height: CELL_SIZE,
    marginTop: 30,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  cell: {
    marginHorizontal: 8,
    height: CELL_SIZE,
    width: CELL_SIZE,
    lineHeight: CELL_SIZE - 5,
    ...Platform.select({web: {lineHeight: 65}}),
    fontSize: 30,
    textAlign: 'center',
    borderRadius: CELL_BORDER_RADIUS,
    color: '#3759b8',
    backgroundColor: '#fff',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,


    elevation: 3,
  },
  inputView: {
    width: "100%",
    backgroundColor: "#fff",
    borderBottomWidth:1,
    borderRadius: 25,
    height: 50,
    marginBottom: 2,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "black"
  },


  root: {
    minHeight: '100%',
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#3CB371",
    marginBottom: 40,
    textAlign:'center'
  },
  icon: {
    width: 217 / 2.4,
    height: 158 / 2,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  subTitle: {
    paddingTop: 30,
    paddingBottom:30,
    color: '#3CB371',
    textAlign: 'center',
  },
  nextButton: {
    marginTop: 30,
    borderRadius: 60,
    height: 60,
    backgroundColor: '#3CB371',
    justifyContent: 'center',
    minWidth: 300,
    marginBottom: 100,
  },
  nextButtonText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
  },
});
export default ValidationScrenHomeOwner;