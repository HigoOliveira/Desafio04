/* Core */
import React from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';


const CartItem = ({ category, selected, onPress }) => (
  <TouchableOpacity
    activateOpacity={0.9}
    style={[styles.container, selected && selected.id === category.id ? styles.selected : null]}
    onPress={() => { onPress(category); }}
  >
    <Text
      style={[styles.title,
        selected && selected.id === category.id ? styles.selectedTitle : null,
      ]}
    >
      {category.title}
    </Text>
  </TouchableOpacity>
);

CartItem.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
  selected: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }),
  onPress: PropTypes.func.isRequired,
};

CartItem.defaultProps = {
  selected: null,
};

export default CartItem;
