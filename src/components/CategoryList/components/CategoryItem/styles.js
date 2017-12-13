import { StyleSheet } from 'react-native';
import { metrics, fonts, colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: metrics.marginCategory,
    borderBottomWidth: 5,
    borderColor: colors.transparent,
    height: 44,
  },
  selected: {
    borderColor: colors.white,
  },
  title: {
    color: colors.white,
    fontSize: fonts.regular,
    fontWeight: 'bold',
    opacity: 0.4,
  },
  selectedTitle: {
    opacity: 1,
  },
});

export default styles;
