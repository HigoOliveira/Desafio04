import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import ProductItem from './components/ProductItem';

import styles from './styles';

export default class List extends Component {
  state = {
    items: [{
      id: 1,
      name: 'Camiseta Hyperas Preta',
      brand: 'Quiksilver',
      image: 'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
      price: 49.99,
    }, {
      id: 2,
      name: 'Camiseta Hyperas Preta',
      brand: 'Quiksilver',
      image: 'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
      price: 49.99,
    }],
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        {this.state.items.map(item => <ProductItem key={item.id} product={item} />)}
      </ScrollView>
    );
  }
}
