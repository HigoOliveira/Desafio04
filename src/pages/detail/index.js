/* @flow */
/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Redux */
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

/* Components */
import ProductItem from 'components/ProductList/components/ProductItem';
import Header from 'components/Header';

/* Presentational */
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import styles from './styles';

class Detail extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          product: PropTypes.shape(ProductItem.propTypes.product),
        }),
      }),
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    const { dispatch } = this.props;
    dispatch(NavigationActions.back());
    return true;
  }

  render() {
    const { product } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Header title="Detalhe do produto" backEnabled />
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
      </View>
    );
  }
}

export default connect()(Detail);
