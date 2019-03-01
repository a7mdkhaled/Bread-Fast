/* eslint-disable linebreak-style */
import EStyleSheet from 'react-native-extended-stylesheet';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const styles = EStyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 55,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    flexDirection: 'row',
    backgroundColor: '#fff',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    borderColor: '#d1d3d6',
    borderBottomWidth: EStyleSheet.hairlineWidth,
  },
  icon: {
    color: '#282828',
  },
  logo: {
    // width: 132,
    //  height: 30,
    // marginLeft: 30,
    color: '#970a79',
    fontSize: 25,
    fontWeight: '600',
  },
  touchWrapper: {
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 5,
  },
  statusBar: {
    height: getStatusBarHeight(),
  },
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
});
export default styles;
