/* eslint-disable linebreak-style */
import {
  View, TouchableHighlight, Text, Platform,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import styles from './styles';

// footer for the item details screen
const deviceIcon = Platform.OS === 'ios' ? 'ios' : 'md';
const Footer = ({
  handleAdd, handleMinus, count, total, handleCart,
}) => (
  <View style={styles.footer}>
    <View style={styles.adding}>
      <Icon onPress={handleMinus} name={`${deviceIcon}-remove`} style={styles.icon} size={20} />
      <Text style={styles.count}>{count}</Text>
      <Icon onPress={handleAdd} name={`${deviceIcon}-add`} style={styles.icon} size={20} />
    </View>

    <TouchableHighlight underlayColor="blue" onPress={handleCart}>
      <Text style={{ color: 'white', fontSize: 20, fontWeight: '600' }}>ADD TO CART!</Text>
    </TouchableHighlight>
    <Text style={styles.total}>
      {'EGP '}
      {total}
    </Text>
  </View>
);
Footer.propTypes = {
  handleAdd: PropTypes.func,
  handleMinus: PropTypes.func,
  count: PropTypes.number,
  total: PropTypes.number,
  handleCart: PropTypes.func,
};
export default Footer;
