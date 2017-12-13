/* Core */
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

/* Presentational */
import styles from './styles';


const CartItem = ({ category, selected, onPress }) => (
  <TouchableOpacity
    activateOpacity={0.9}
    style={[styles.container, selected ? styles.selected : null]}
    onPress={() => { onPress(category); }}
  >
    <Text style={[styles.title, selected ? styles.selectedTitle : null]}>{category.title}</Text>
  </TouchableOpacity>
);

CartItem.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
  selected: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
};

CartItem.defaultProps = {
  selected: false,
};

export default CartItem;
