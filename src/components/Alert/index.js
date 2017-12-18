import { Alert } from 'react-native';

const alert = text => Alert.alert(
  'GoCommerce',
  text,
  [
    { text: 'Ok' },
  ],
  { cancelable: false },
);

const confirm = (text, onConfirm = () => {}) => Alert.alert(
  'GoCommerce',
  text,
  [
    { text: 'Ok', onPress: onConfirm },
    { text: 'Cancelar', style: 'cancel' },
  ],
  { cancelable: false },
);

export default { alert, confirm };
