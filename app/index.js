/* eslint-disable linebreak-style */
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

import Navigator from './config/routes';
/* incase we're dealing with different devices
it's better to use fixed width and height when we're using images as a background for example,
so it gets the device dimensions */
EStyleSheet.build({
  $width: Dimensions.get('window').width,
  $height: Dimensions.get('window').height,
});

const App = () => <Navigator />;

export default App;
