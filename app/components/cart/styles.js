/* eslint-disable linebreak-style */
import EStyleSheet from 'react-native-extended-stylesheet';

// styling for the cart component
const styles = EStyleSheet.create({
  sectionHeader: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingLeft: 10,
  },
  header: {
    fontSize: 19,
    fontWeight: '600',
    color: '#323c47',
  },

  // //

  image: {
    width: 120,
    height: 90,
    borderRadius: 7,
    marginRight: 10,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 7,
    paddingVertical: 8,
    backgroundColor: '#fff',
    // ,
  },
  textContainer: {
    // paddingRight: 5,
    flex: 1,
    flexDirection: 'column',
    // alignItems: 'flex-start',
  },
  name: {
    marginHorizontal: 10,
    marginVertical: 5,
    fontSize: 15,
    fontWeight: '500',
    letterSpacing: 2,
    color: '#525252',
    textAlign: 'left',
    alignSelf: 'stretch',
  },
  details: {
    marginHorizontal: 20,
    marginVertical: 5,
    fontSize: 15,
    fontWeight: '500',
    color: '#525252',
    textAlign: 'center',
    alignSelf: 'stretch',
  },
  price: {
    fontSize: 13,
    color: '#9a9a9a',
  },
  add: {
    borderRadius: 14,
    textAlign: 'center',
    position: 'relative',
    alignSelf: 'flex-end',
    width: 80,
    height: 30,
    color: 'white',
    paddingTop: 5,
    backgroundColor: '#970a79',
  },
  disabled: {
    borderRadius: 14,
    textAlign: 'center',
    position: 'relative',
    alignSelf: 'flex-end',
    width: 80,
    height: 30,
    color: 'white',
    paddingTop: 5,
    backgroundColor: 'gray',
  },
  Separator: {
    marginHorizontal: 20,
    backgroundColor: 'black',
    flex: 1,
    height: 1,
  },
});
export default styles;
