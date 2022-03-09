/* This is a Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */
//Import React
import React from 'react';
import PaystackWebView from 'react-native-paystack-webview';
import {View, StyleSheet, Text, TextInput, Botton} from 'react-native';
//queueMicrotask;
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {creatwStackNavigator, createAppContainer} from 'react-navigation';
import {
  List,
  Colors,
  Card,
  Title,
  TouchableOpacity,
  Paragraph,
} from 'react-native-paper';

const HomeScreen = () => {
  global.currentScreenIndex = 'HomeScreen';

  return (
    <View style={styles.container}>
      <View style={styles.redbox} />
      <View style={styles.bluebox} />
      <View style={styles.blackbox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 30,
    marginRight: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    // backgroundColor: '#7DE24E',
    height: 600,
    // width: 500,
  },
  redbox: {
    width: 340,
    height: 150,
    backgroundColor: '#ADD8E6',
    padding: 4,
  },
  bluebox: {
    width: 340,
    height: 290,
    backgroundColor: '#7DE24E',
  },
  blackbox: {
    width: 340,
    height: 150,
    backgroundColor: '#0c71E0',
  },
    input :{
    borderColor:"black", 
    borderWidth:1 , 
    padding :20,
  },
  inputContainer :{
    flexDirection :'row', 
    justifyContent :'space-between', 
    alignContent:'center',
    bottom:20
  },
});

export default HomeScreen;
