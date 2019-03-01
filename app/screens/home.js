/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { Products } from '../components/products';
import { Header } from '../components/header';

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  // fetching all the data!
  componentDidMount() {
    const token = '3f2o3hf2ougo2gbvg3lgb3lqpi1321d';
    const url = `https://www.breadfast.com/wp-json/breadfast/testing/products?token=${token}`;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(responseJson => JSON.parse(responseJson._bodyInit))
      /* transforming the given data to another array, because section list needs 'data'
      as a string to start rendering the data
      so i transformed 'products' from the api to 'data' */
      .then((res) => {
        const transformed = res.data.map(({
          id, name, slug, menu_order, products,
        }) => ({
          data: products,
          id,
          name,
          slug,
          menu_order,
        }));
        // now the state has the data
        this.setState({
          data: transformed,
        });
      })
      .catch(error => Alert.alert('Error : ', error));
  }

  handlePressCart = () => {
    const { navigation } = this.props;
    navigation.navigate('Cart');
  };

  // passing the data to the products so it can start rendering all the data in the home page
  render() {
    const { navigation } = this.props;
    const { data } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Header onPressCart={this.handlePressCart} count={navigation.state.params} icon="menu" />
        <Products navigation={navigation} data={data} />
      </View>
    );
  }
}

export default Home;
