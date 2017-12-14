import { Platform } from 'react-native';

export default {
  padding: 10,
  paddingTopPage: 20,
  paddingHorizontalPage: 20,
  margin: 10,
  marginTopPage: 20,
  marginHorizontalPage: 20,
  marginCategory: 20,
  image: 180,
  radius: 5,
  statusBarHeight: (Platform.OS === 'ios') ? 20 : 0,
  navBarHeight: 54,
  paddingNavBar: 20,
};
