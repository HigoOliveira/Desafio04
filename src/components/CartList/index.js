/* Core */
import React, { Component } from 'react';
import { ScrollView } from 'react-native';

/* Components */
import CartItem from './components/CartItem';

/* Presentational */
import styles from './styles';

export default class CartList extends Component {
  state = {
    items: [
      {
        product: {
          id: 1,
          name: 'Camiseta Hyperas Preta',
          brand: 'Quiksilver',
          image: 'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
          price: 49.99,
        },
        quantity: 1,
      }, {
        product: {
          id: 2,
          name: 'Camiseta Hyperas Preta',
          brand: 'Quiksilver',
          image: 'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
          price: 49.99,
        },
        quantity: 2,
      },
    ],
  }
  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        {this.state.items.map(cart => <CartItem key={cart.product.id} cart={cart} />)}
        {this.state.items.map(cart => <CartItem key={cart.product.id} cart={cart} />)}
        {this.state.items.map(cart => <CartItem key={cart.product.id} cart={cart} />)}
        {this.state.items.map(cart => <CartItem key={cart.product.id} cart={cart} />)}
      </ScrollView>
    );
  }
}
