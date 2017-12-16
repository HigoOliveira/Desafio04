/* Core */
import React, { Component } from 'react';

/* Redux */
import { connect } from 'react-redux';

/* Presentational */
import { ScrollView, Text } from 'react-native';
import styles from './styles';

/* Components */
import CartItem from './components/CartItem';

class CartList extends Component {

  renderEmptyCart() {
    return (
      <Text>Você não possue nenhum item no seu carrinho de compras!</Text>
    )
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        {this.props.cart.length === 0
          ? this.renderEmptyCart()
          : this.props.cart.map(cart => <CartItem key={cart.product.id} cart={cart} />)}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(CartList);
