import { StyleSheet } from 'react-native';
import { colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 44,
    backgroundColor: colors.primary,
  },
  contentContainer: {
    flexDirection: 'row',
    height: 44,
  },
});

export default styles;
