/* Core */
import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

/* Redux */
import { connect } from 'react-redux';
import CartActions from 'store/ducks/cart';

/* Components */
import { ProductItem } from 'components/ProductList/components/ProductItem';

/* Presentational */
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';


const CartItem = ({ cart, cartRemoveProduct }) => (
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
    <TouchableOpacity onPress={() => { cartRemoveProduct(cart); }}>
      <Icon name="times" size={16} />
    </TouchableOpacity>
  </View>
);

CartItem.propTypes = {
  cart: PropTypes.shape({
    id: PropTypes.string,
    product: ProductItem.propTypes.product,
    quantity: PropTypes.number,
  }).isRequired,
  cartRemoveProduct: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  cartRemoveProduct: (category, product) =>
    dispatch(CartActions.cartRemoveProduct(category, product)),
});

export default connect(null, mapDispatchToProps)(CartItem);
