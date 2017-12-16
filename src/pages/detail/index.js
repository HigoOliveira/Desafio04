/* @flow */
/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Redux */
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import DetailActions from 'store/ducks/detail';

/* Components */
import { ProductItem } from 'components/ProductList/components/ProductItem';
import Header from 'components/Header';

/* Presentational */
import {
  View,
  Text,
  Image,
  TouchableOpacity,
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
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.props.goBack);
    const { product } = this.props.navigation.state.params;
    this.props.detailRequest(product);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.props.goBack);
  }

  renderProduct() {
    const { product } = this.props;
    return (
      <View style={styles.containerMain}>
        <Image
          source={{
            uri: product.image,
          }}
          style={
            styles.image
          }
        />
        <View style={styles.containerContent}>
          <View style={styles.containerInfo}>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.brand}>{product.brand}</Text>
          </View>
          <Text style={styles.price}>{product.price}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {}}
          style={styles.button}
        >
          <Text style={styles.text}>Adicionar ao carrinho</Text>
        </TouchableOpacity>
      </View>
    );
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
  product: state.detail.data,
  loading: state.detail.loading,
});

const mapDispatchToProps = dispatch => ({
  detailRequest: product => dispatch(DetailActions.detailRequest(product)),
  goBack: () => dispatch(NavigationActions.back()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
