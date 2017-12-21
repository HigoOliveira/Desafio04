/* @flow */
/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Redux */
import { connect } from 'react-redux';
import CategoryActions from 'store/ducks/category';
import ProductsActions from 'store/ducks/products';

/* Components */
import List from 'components/ProductList';
import CategoryList from 'components/CategoryList';
import CategoryItem from 'components/CategoryList/components/CategoryItem';
import { ProductItem } from 'components/ProductList/components/ProductItem';
import Header from 'components/Header';
import ErrorPanel from 'components/ErrorPanel';

/* Presentational */
import {
  View,
} from 'react-native';
import styles from './styles';

export class ProductList extends Component {
  static propTypes = {
    category: PropTypes.shape({
      data: PropTypes.arrayOf(CategoryItem.propTypes.category),
      loading: PropTypes.bool,
      error: PropTypes.bool,
    }).isRequired,
    products: PropTypes.shape({
      data: PropTypes.arrayOf(ProductItem.propTypes.product),
      loading: PropTypes.bool,
      refreshing: PropTypes.bool,
      error: PropTypes.bool,
    }).isRequired,
    categoryRequest: PropTypes.func.isRequired,
    productsRefresh: PropTypes.func.isRequired,
  }
  componentDidMount() {
    this.props.categoryRequest();
  }

  renderError() {
    return (
      <ErrorPanel
        text="Houve uma falha ao carregar os produtos, tente mais tarde!"
        loading={this.props.category.loading}
        action={() => { this.props.categoryRequest(); }}
      />);
  }

  render() {
    const { category, products } = this.props;
    return (
      <View style={styles.container}>
        <Header title="GoCommerce" />
        { (category.error || products.error)
          ? this.renderError()
        : (
          <View style={styles.container}>
            <CategoryList
              categories={category.data}
              loading={category.loading}
              selected={category.selected}
            />
            <List
              products={products.data}
              loading={products.loading}
              refreshing={products.refreshing}
              productsRefresh={() => { this.props.productsRefresh(category.selected); }}
            />
          </View>)
        }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  category: state.category,
  products: state.products,
});

const mapDispatchToProps = dispatch => ({
  categoryRequest: () => dispatch(CategoryActions.categoryRequest()),
  productsRefresh: category => dispatch(ProductsActions.productsRefresh(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
