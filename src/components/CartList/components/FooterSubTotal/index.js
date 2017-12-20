/* Core */
import React from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text } from 'react-native';
import styles from './styles';


const FooterSubTotal = ({ value }) => (
  <View
    style={styles.container}
  >
    <Text
      style={styles.subtotal}
    >
    Subtotal
    </Text>
    <Text style={styles.price}>R${value.toFixed(2)}</Text>
  </View>
);

FooterSubTotal.propTypes = {
  value: PropTypes.number.isRequired,
};

export default FooterSubTotal;
