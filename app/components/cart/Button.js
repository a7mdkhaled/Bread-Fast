/* eslint-disable linebreak-style */
import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import PropTypes from 'prop-types';
// confiming purchase button
const Button = ({ handleConfirm }) => (
  <View
    style={{
      width: 100,
      height: 70,
      alignSelf: 'center',
      justifyContent: 'center',
    }}
  >
    <TouchableHighlight
      style={{
        marginVertical: 40,
        alignSelf: 'center',
        backgroundColor: 'blue',
        borderRadius: 40,
      }}
      onPress={handleConfirm}
    >
      <Text
        style={{
          marginTop: 15,
          textAlign: 'center',
          fontSize: 20,
          color: 'white',
          fontWeight: '600',
          width: 150,
          height: 40,
        }}
      >
        {'Confirm Order!!'}
      </Text>
    </TouchableHighlight>
  </View>
);
Button.propTypes = {
  handleConfirm: PropTypes.func,
};
export default Button;
