import { StyleSheet } from 'react-native';
import { colors, metrics, general, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerEmpty: {
    ...general.container,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: metrics.paddingHorizontalPage,
  },
  contentContainer: {
    padding: metrics.padding,
    margin: metrics.margin,
  },
  emptyCart: {
    color: colors.grey,
    fontSize: fonts.regular,
    textAlign: 'center',
  },
});

export default styles;
