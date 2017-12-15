import React, { Component } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';

import ProductItem from './components/ProductItem';

import styles from './styles';

export default class List extends Component {
  renderProducts() {
    return this.props.products.map(item => <ProductItem key={item.id} product={item} />);
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        {this.props.loading
          ? <ActivityIndicator size="large" />
          : this.renderProducts()}
      </ScrollView>
    );
  }
}
