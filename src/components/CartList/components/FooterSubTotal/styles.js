import { StyleSheet } from 'react-native';
import { fonts, colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderColor: colors.light,
  },
  subtotal: {
    fontSize: fonts.regular,
    color: colors.grey,
  },
  price: {
    fontSize: fonts.extreme,
    color: colors.secondary,
  },
});

export default styles;
