/* eslint-disable linebreak-style */
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  image: {
    width: 300,
    height: 300,
    borderRadius: 40,
    resizeMode: 'contain',
    marginTop: -20,
  },
  adding: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#002b80',
    height: 60,
    marginRight: 10,
  },
  icon: {
    marginLeft: 20,
    marginRight: 20,
    color: 'white',
    textAlign: 'center',
  },
  count: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
  },
  price: {
    color: 'red',
    fontSize: 18,
    fontWeight: '600',
    alignSelf: 'center',
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  footer: {
    width: '$width',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#002b80',
    position: 'absolute',
    bottom: 0,
    height: 60,
  },
  total: {
    position: 'absolute',
    right: 0,
    backgroundColor: '#003399',
    height: 60,
    width: 80,
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 17,
  },
});
export default styles;
