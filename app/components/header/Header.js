/* eslint-disable linebreak-style */
import React from 'react';
import {
  View, Text, TouchableHighlight, Platform, StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import styles from './styles';

// resuable header for all screens
// device icon to check whether the platform is ios or android to pick the right icon
const deviceIcon = Platform.OS === 'ios' ? 'ios' : 'md';
const Header = ({
  icon, onPress, count, onPressCart,
}) => (
  <View>
    <View style={styles.statusBar}>
      <StatusBar translucent backgroundColor="#970A79" barStyle="light-content" />
    </View>
    <View style={styles.headerContainer}>
      <TouchableHighlight onPress={onPress} style={styles.touchWrapper} underlayColor="#e2e2e2">
        <Icon name={`${deviceIcon}-${icon}`} style={styles.icon} size={25} />
      </TouchableHighlight>
      <Text style={styles.logo}>BreadFast</Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableHighlight
          onPress={onPressCart}
          style={styles.touchWrapper}
          underlayColor="#e2e2e2"
        >
          <View>
            <Icon name={`${deviceIcon}-cart`} style={styles.icon} size={25} />
            {count >= 1 ? (
              <Text
                style={{
                  right: -10,
                  top: -10,
                  position: 'absolute',
                  color: 'white',
                  fontWeight: 'bold',
                  backgroundColor: 'red',
                  fontSize: 15,
                  textAlign: 'center',
                  width: 25,
                  height: 17,
                  borderRadius: 12,
                }}
              >
                {count}
              </Text>
            ) : null}
          </View>
        </TouchableHighlight>
      </View>
    </View>
  </View>
);
Header.propTypes = {
  icon: PropTypes.string,
  onPress: PropTypes.func,
  count: PropTypes.number,
  onPressCart: PropTypes.func,
};
export default Header;
