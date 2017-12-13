/* Core */
import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import PropTypes from 'prop-types';

/* Components */
import ProductItem from 'components/ProductList/components/ProductItem';

/* Presentational */
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';


const CartItem = ({ cart }) => (
  <View style={styles.container}>
    <Image
      source={{
        uri: cart.product.image,
      }}
      style={styles.image}
    />
    <View style={styles.containerMain}>
      <Text style={styles.name}>{cart.product.name}</Text>
      <Text style={styles.brand}>{cart.product.brand}</Text>
      <Text style={styles.price}>{cart.product.price}</Text>
    </View>
    <TextInput
      style={styles.input}
      underlineColorAndroid="rgba(0,0,0,0)"
      value={`${cart.quantity}`}
    />
    <Icon name="times" size={16} />
  </View>
);

CartItem.propTypes = {
  cart: PropTypes.shape({
    product: ProductItem.propTypes.product,
    quantity: PropTypes.number,
  }).isRequired,
};

export default CartItem;
