/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Redux */
import { connect } from 'react-redux';

/* Presentational */
import { ScrollView, Text } from 'react-native';
import styles from './styles';

/* Components */
import CartItemComponent, { CartItem } from './components/CartItem';

class CartList extends Component {
  static propTypes = {
    cart: PropTypes.arrayOf(CartItem.propTypes.cart).isRequired,
  };
  static renderEmptyCart() {
    return (
      <Text>Você não possue nenhum item no seu carrinho de compras!</Text>
    );
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        {this.props.cart.length === 0
          ? CartList.renderEmptyCart()
          : this.props.cart.map(cart => <CartItemComponent key={cart.product.id} cart={cart} />)}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(CartList);
