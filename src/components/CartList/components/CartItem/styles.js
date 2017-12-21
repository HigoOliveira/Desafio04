import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: metrics.padding,
    backgroundColor: colors.white,
    borderRadius: metrics.radius,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: metrics.margin,
  },
  containerMain: {
    alignSelf: 'stretch',
    flexGrow: 2,
    flex: 1,
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
  image: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: metrics.radius,
    fontSize: fonts.tiny,
    width: 35,
    height: 20,
    paddingVertical: 0,
    paddingHorizontal: metrics.padding,
    marginHorizontal: metrics.margin,
    color: colors.grey,
  },
});

export default styles;
