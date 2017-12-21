/* @flow */
/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Redux */
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import DetailActions from 'store/ducks/detail';
import CartActions from 'store/ducks/cart';

/* Components */
import { ProductItem } from 'components/ProductList/components/ProductItem';
import Header from 'components/Header';
import Product from 'pages/detail/components/Product';
import ErrorPanel from 'components/ErrorPanel';

/* Presentational */
import {
  View,
  BackHandler,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';

class Detail extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          product: ProductItem.propTypes.product,
        }),
      }),
    }).isRequired,
    goBack: PropTypes.func.isRequired,
    detailRequest: PropTypes.func.isRequired,
    ...Product.propTypes,
    loading: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.props.goBack);
    const { product } = this.props.navigation.state.params;
    this.props.detailRequest(product);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.props.goBack);
  }

  renderError() {
    const { product } = this.props.navigation.state.params;
    return (
      <ErrorPanel
        text="Houve um problema ao carregar o produto, tente mais tarde!"
        loading={this.props.loading}
        action={() => { this.props.detailRequest(product); }}
      />);
  }

  renderProduct() {
    return !this.props.error
      ? (
        <Product
          product={this.props.product}
          category={this.props.category}
          cartAddProduct={this.props.cartAddProduct}
        />
      )
      : this.renderError();
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="Detalhe do produto" backEnabled />
        {this.props.loading
          ? <ActivityIndicator size="large" />
          : this.renderProduct()}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  product: state.detail.product,
  category: state.detail.category,
  loading: state.detail.loading,
  error: state.detail.error,
  message: state.detail.message,
});

const mapDispatchToProps = dispatch => ({
  detailRequest: product => dispatch(DetailActions.detailRequest(product)),
  cartAddProduct: (category, product) => dispatch(CartActions.cartAddProduct(category, product)),
  goBack: () => dispatch(NavigationActions.back()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
