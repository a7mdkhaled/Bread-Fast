/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import {
  View, Text, TouchableHighlight, SectionList, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class Products extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    data: PropTypes.any,
  };

  // the section header which contains the category name
  renderSectionHeader = ({ section }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.header}>{section.name}</Text>
    </View>
  );

  // when an item is pressed
  handlePressItem = ({ item }) => {
    const { navigation } = this.props;
    navigation.navigate('Details', { item });
  };

  // listing the items
  listItems = ({ item }) => (
    <TouchableHighlight onPress={() => this.handlePressItem({ item })} underlayColor="#000">
      <View style={styles.container}>
        <Image source={{ uri: `${item.images}` }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>
            {item.price}
            {'EGP'}
          </Text>
        </View>
        <View>
          <TouchableHighlight underlayColor="white">
            {item.in_stock ? (
              <Text style={styles.add}>INSTOCK</Text>
            ) : (
              <Text style={[styles.add, { backgroundColor: 'gray' }]}>OUTOFSTOCK!</Text>
            )}
          </TouchableHighlight>
        </View>
      </View>
    </TouchableHighlight>
  );

  // Section list to render the data
  render() {
    const { data } = this.props;
    return (
      <SectionList
        sections={data}
        renderItem={this.listItems}
        renderSectionHeader={this.renderSectionHeader}
        keyExtractor={item => item.id}
      />
    );
  }
}

export default Products;
