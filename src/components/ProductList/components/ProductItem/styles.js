import { StyleSheet, Dimensions } from 'react-native';
import { colors, metrics, fonts } from 'styles';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: metrics.padding,
    width: (width - (metrics.margin * 5)) / 2,
    borderRadius: metrics.radius,
    marginBottom: metrics.margin,
  },
  image: {
    height: metrics.image,
    resizeMode: 'contain',
  },
  name: {
    fontSize: fonts.regular,
    color: colors.darker,
    fontWeight: 'bold',
  },
  brand: {
    fontSize: fonts.tiny,
    color: colors.grey,
  },
  price: {
    fontSize: fonts.regular,
    color: colors.secondary,
  },
});

export default styles;
