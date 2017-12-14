import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    paddingTop: metrics.statusBarHeight,
    paddingHorizontal: metrics.paddingNavBar,
    height: metrics.navBarHeight + metrics.statusBarHeight,
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: fonts.big,
  },
  leftButton: {
    width: 20,
  },
  rightButton: {
    width: 20,
  },
});

export default styles;
