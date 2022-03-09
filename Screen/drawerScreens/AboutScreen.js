/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';

//Import all required component
import Entypo from 'react-native-vector-icons/Entypo';
import {View, Text} from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', marginTop: 100}}>
      <Text style={{fontSize: 23, marginTop: 10}}>Setting Screen</Text>
      <Text style={{fontSize: 18, marginTop: 10}}></Text>

      <PaystackWebView
        buttonText="Pay Now"
        paystackKey="<your-key-here>"
        amount={120000}
        billingEmail="aderojuadewale8@gmail.com"
        billingMobile="08101539620"
        billingName="Aderoju Adewale"
        ActivityIndicatorColor="green"
        onSuccess={(tranRef) => {
          console.log(tranRef);
        }}
        onCancel={() => {
          console.log('something went wrong');
        }}
      />

      <Text style={{fontSize: 18, marginTop: 10}}>About Screen</Text>
    </View>
  );
};
export default SettingsScreen;
