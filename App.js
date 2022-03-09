//Import React
//import PaystackWebView from 'react-native-paystack-webView';
import React from 'react';

//Import Navigators from React Navigation
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
//import {StackNavigator} from 'react-navigator';
//import React, {Component} from 'react';
import {View} from 'react-native';

//Import all the screens needed
import SplashScreen from './Screen/SplashScreen';
import LoginScreen from './Screen/LoginScreen';
//import paystack from './Screen/paystack';
import RegisterScreen from './Screen/RegisterScreen';
import DrawerNavigationRoutes from './Screen/DrawerNavigationRoutes';
//import AboutScreen from './Screen/drawerScreens/AboutScreen';
//import HomeScreen from './Screen/drawerScreens/HomeScreen';

const Auth = createStackNavigator({
  //Stack Navigator for Login and Sign up Screen
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  RegisterScreen: {
    screen: RegisterScreen,
    navigationOptions: {
      title: 'Register',
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    },
  },
});

/* Switch Navigator for those screens which needs to be switched only once
      and we don't want to switch back once we switch from them to the next one */
const App = createSwitchNavigator({
  SplashScreen: {
    /* SplashScreen which will come once for 5 Seconds */
    screen: SplashScreen,
    navigationOptions: {
      /* Hiding header for Splash Screen */
      headerShown: false,
    },
  },
  Auth: {
    /* Auth Navigator which includer Login Signup will come once */
    screen: Auth,
  },
  DrawerNavigationRoutes: {
    /* Navigation Drawer as a landing page */
    screen: DrawerNavigationRoutes,
    navigationOptions: {
      /* Hiding header for Navigation Drawer as we will use our custom header */
      headerShown: false,
    },
  },
});

export default createAppContainer(App);
