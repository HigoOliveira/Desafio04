import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    padding: metrics.padding,
    backgroundColor: colors.white,
    borderRadius: metrics.radius,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: metrics.margin,
  },
  containerMain: {

  },
  name: {
    fontSize: fonts.regular,
    color: colors.darker,
    fontWeight: 'bold',
  },
  brand: {
    fontSize: fonts.tint,
    color: colors.grey,
  },
  price: {
    fontSize: fonts.regular,
    color: colors.secondary,
  },
  image: {
    height: 60,
    width: 60,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: metrics.radius,
    fontSize: fonts.tint,
    width: 35,
    height: 20,
    paddingVertical: 0,
    paddingHorizontal: metrics.padding,
    color: colors.grey,
  },
});

export default styles;
