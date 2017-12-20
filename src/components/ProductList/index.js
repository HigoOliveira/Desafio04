/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { ScrollView, ActivityIndicator, RefreshControl } from 'react-native';
import styles from './styles';

/* Components */
import ProductItemComponent, { ProductItem } from './components/ProductItem';

export default class List extends Component {
  static propTypes = {
    products: PropTypes.arrayOf(ProductItem.propTypes.product),
    loading: PropTypes.bool,
    refreshing: PropTypes.bool,
    productsRefresh: PropTypes.func.isRequired,
  }
  static defaultProps = {
    products: [],
    loading: false,
    refreshing: false,
  }

  renderProducts() {
    return this.props.products.map(item => <ProductItemComponent key={item.id} product={item} />);
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={this.props.refreshing}
            onRefresh={this.props.productsRefresh}
          />
        }
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
