import { StyleSheet } from 'react-native';
import { general, fonts, colors, metrics } from 'styles';

const styles = StyleSheet.create({
  ...general,
  image: {
    height: 285,
    resizeMode: 'contain',
  },
  containerMain: {
    backgroundColor: colors.white,
    borderRadius: metrics.radius,
    padding: metrics.padding,
    marginTop: metrics.marginTopPage,
    marginHorizontal: metrics.marginHorizontalPage,
    borderRadius: metrics.radius,
  },
  containerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: metrics.margin,
  },
  name: {
    fontSize: fonts.bigger,
    fontWeight: 'bold',
    color: colors.darker,
  },
  brand: {
    fontSize: fonts.regular,
    color: fonts.grey,
  },
  price: {
    fontSize: fonts.extreme,
    color: colors.secondary,
  },
  button: {
    backgroundColor: colors.secondary,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: metrics.margin,
    borderRadius: metrics.radius,
  },
  text: {
    color: colors.white,
  },
});

export default styles;
