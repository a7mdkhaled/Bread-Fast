/* eslint-disable linebreak-style */
import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const CartData = ({ item }) => (
  <View style={styles.container}>
    <Image source={{ uri: `${item.images}` }} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.name}>{item.name}</Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Text style={styles.details}>
          {'PRICE!'}
          {'\n\n'}
          {item.price}
          {'EGP'}
        </Text>

        <Text style={styles.details}>
          {'Quanitiy'}
          {'\n\n'}
          {item.count}
        </Text>
        <Text style={styles.details}>
          <Text>
            {'Total'}
            {'\n\n'}
          </Text>
          <Text style={{ color: 'blue' }}>
            {item.total}
            {'EGP'}
          </Text>
        </Text>
      </View>
    </View>
    <View />
  </View>
);

CartData.propTypes = {
  item: PropTypes.object,
};
export default CartData;
