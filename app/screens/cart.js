/* eslint-disable linebreak-style */
/* eslint-disable linebreak,-style */
import React, { Component } from 'react';
import {
  View, FlatList, AsyncStorage, Alert, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { Header } from '../components/header';
import { CartData, Separator, Button } from '../components/cart';

class Cart extends Component {
  static propTypes = { navigation: PropTypes.object };

  constructor(props) {
    super(props);
    this.state = { cart: [] };
  }

  async componentDidMount() {
    try {
      const arr = [];
      // GETTING ALL THE DATA FROM ASYNCSTORAGE AND RENDER IT!
      AsyncStorage.getAllKeys()
        .then(keys => AsyncStorage.multiGet(keys))
        .then((req) => {
          // a for loop to get all the data from asyncstorage
          if (req.length !== 0) {
            for (let i = 0; i < req.length; i += 1) {
              // pushing the data to a new array
              arr.push(JSON.parse(req[i][1]));
            }
          }
        });
      // insert the new array into state
      this.setState({ cart: arr });
    } catch (error) {
      Alert.alert(error);
    }
  }

  // when home button is pressed
  handlePress = () => {
    const { navigation } = this.props;
    navigation.navigate('Home');
  };

  render() {
    const { cart } = this.state;
    const data = cart;

    return (
      // a flat list to render the items
      <View style={{ flex: 1 }}>
        <Header onPress={this.handlePress} icon="home" />
        <FlatList
          data={data}
          renderItem={({ item }) => <CartData item={item} />}
          keyExtractor={item => item.name}
          ItemSeparatorComponent={Separator}
          // if there are items the button will be displayed if not then a text will be shown
          ListFooterComponent={() => (this.state.cart.length !== 0 ? (
            <Button />
          ) : (
            <Text
              style={{
                fontSize: 20,
                color: 'blue',
                textAlign: 'center',
                marginTop: 40,
                fontWeight: '600',
              }}
            >
              {'No items'}
            </Text>
          ))
          }
        />
      </View>
    );
  }
}

export default Cart;
