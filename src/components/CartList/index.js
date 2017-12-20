/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Redux */
import { connect } from 'react-redux';

/* Presentational */
import { ScrollView, Text, View } from 'react-native';
import styles from './styles';

/* Components */
import CartItemComponent, { CartItem } from './components/CartItem';
import FooterSubTotal from './components/FooterSubTotal';

class CartList extends Component {
  static propTypes = {
    cart: PropTypes.arrayOf(CartItem.propTypes.cart).isRequired,
  };
  static renderEmptyCart() {
    return (
      <View style={styles.containerEmpty}>
        <Text style={styles.emptyCart}>
          Você não possue nenhum item no seu carrinho de compras!
        </Text>
      </View>
    );
  }

  renderCart() {
    const value = this.props.cart.reduce((prevVal, item) =>
      prevVal + (item.product.price * item.quantity), 0);
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          {this.props.cart.map(cart => <CartItemComponent key={cart.product.id} cart={cart} />)}
        </ScrollView>
        <FooterSubTotal value={value} />
      </View>
    );
  }

  render() {
    return this.props.cart.length === 0
      ? CartList.renderEmptyCart()
      : this.renderCart();
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(CartList);
