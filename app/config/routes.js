/* eslint-disable linebreak-style */
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Details from '../screens/details';
import Cart from '../screens/cart';

// Navigation page, to navigate between screens
const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
      },
    },
    Details: {
      screen: Details,
      navigationOptions: {
        header: () => null,
      },
    },
    Cart: {
      screen: Cart,
      navigationOptions: {
        header: () => null,
      },
    },
  },
  {
    mode: 'modal',
    cardStyle: { backgroundColor: 'transparent' },
    headerMode: 'none',
  },
);

const App = createAppContainer(MainNavigator);
export default App;
