import { StyleSheet } from 'react-native';
import { general, fonts, colors } from 'styles';

const styles = StyleSheet.create({
  ...general,
  errorText: {
    fontSize: fonts.regular,
    color: colors.grey,
  },
});

export default styles;
