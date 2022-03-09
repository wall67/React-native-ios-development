import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import paystack from './Paystack.js';

const Routes = () => (
  <Router>
    <Scene key="Root">
      <Screen
        Key="paystack"
        component={paystack}
        title="Paystack"
        initial={true}
      />
    </Scene>
  </Router>
);

export default Routes;
