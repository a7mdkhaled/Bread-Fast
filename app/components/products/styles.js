/* eslint-disable linebreak-style */

import EStyleSheet from 'react-native-extended-stylesheet';
import { getStatusBarHeight } from 'react-native-status-bar-height';

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
  statusBar: {
    height: getStatusBarHeight(),
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
    fontSize: 15,
    fontWeight: '500',
    color: '#525252',
    textAlign: 'left',
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

    width: 95,
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
});

export default styles;
