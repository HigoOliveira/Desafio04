/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { ScrollView, ActivityIndicator } from 'react-native';
import styles from './styles';

/* Components */
import ProductItemComponent, { ProductItem } from './components/ProductItem';

export default class List extends Component {
  static propTypes = {
    products: PropTypes.arrayOf(ProductItem.propTypes.product),
    loading: PropTypes.bool,
  }
  static defaultProps = {
    products: [],
    loading: false,
  }

  renderProducts() {
    return this.props.products.map(item => <ProductItemComponent key={item.id} product={item} />);
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={
          [styles.contentContainer,
            this.props.loading ? styles.contentContainerLoading : null,
          ]
        }
      >
        {this.props.loading
          ? <ActivityIndicator size="large" />
          : this.renderProducts()}
      </ScrollView>
    );
  }
}
