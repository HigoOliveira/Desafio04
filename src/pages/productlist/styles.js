import { StyleSheet } from 'react-native';
import { metrics, fonts, colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerError: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: metrics.paddingHorizontalPage,
  },
  textError: {
    fontSize: fonts.regular,
    marginBottom: metrics.margin,
    color: colors.grey,
  },
  button: {
    backgroundColor: colors.primary,
    height: 44,
    borderRadius: metrics.radius,
    paddingHorizontal: metrics.paddingHorizontalPage,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fonts.big,
  },
  indicator: {
    marginRight: metrics.margin,
  },
});

export default styles;
