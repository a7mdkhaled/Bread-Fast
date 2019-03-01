/* eslint-disable linebreak-style */
import React, { Component } from 'react';

import { View, AsyncStorage, Alert } from 'react-native';

import PropTypes from 'prop-types';
import { Footer, ListItem } from '../components/items';
import { Header } from '../components/header';

class Details extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.state = {
      count: 1,
      total: Number(navigation.state.params.item.price),
      cart: [],
    };
  }

  // when ADD TO CART is pressed, this function will set the data into the storage
  handleCart = () => {
    try {
      const { navigation } = this.props;
      const {
        name, price, images, id,
      } = navigation.state.params.item;
      const { total, count } = this.state;
      const data = {
        id,
        name,
        images,
        price,
        total,
        count,
      };
      AsyncStorage.setItem(name, JSON.stringify(data));
    } catch (error) {
      Alert.alert(error);
    }

    Alert.alert('ADDED!');
  };

  handleAdd = () => {
    const { navigation } = this.props;
    const { total, count } = this.state;
    this.setState({
      count: count + 1,
      total: total + Number(navigation.state.params.item.price),
    });
  };

  // these two functions handles the + and - in the footer
  handleMinus = () => {
    const { navigation } = this.props;
    const { count, total } = this.state;
    if (count !== 1) {
      this.setState({
        count: count - 1,
        total: total - Number(navigation.state.params.item.price),
      });
    }
  };

  // Pressing home in header
  handlePress = () => {
    const { count } = this.state;
    const { navigation } = this.props;
    navigation.navigate('Home', count);
  };

  // Pressing the cart in header
  handlePressCart = () => {
    const { cart } = this.state;
    const { navigation } = this.props;
    navigation.navigate('Cart', cart);
  };

  // the header, list of items and the footer
  render() {
    const { navigation } = this.props;
    const { name, price, images } = navigation.state.params.item;
    const { count, total } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Header
          onPressCart={this.handlePressCart}
          icon="home"
          onPress={this.handlePress}
          count={count}
        />
        <ListItem image={images} price={price} name={name} />
        <Footer
          handleCart={this.handleCart}
          count={count}
          total={total}
          handleMinus={this.handleMinus}
          handleAdd={this.handleAdd}
        />
      </View>
    );
  }
}
export default Details;
