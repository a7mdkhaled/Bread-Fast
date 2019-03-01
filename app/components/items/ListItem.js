/* eslint-disable linebreak-style */
import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

// list item screen to list all of the products in the home screen
const ListItem = ({ image, name, price }) => (
  <View style={{ flex: 1 }}>
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.price}>
          {'EGP'}
          {price}
        </Text>
      </View>
    </View>
  </View>
);
ListItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
};
export default ListItem;
