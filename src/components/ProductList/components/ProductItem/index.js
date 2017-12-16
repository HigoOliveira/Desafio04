import React, { Component } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

import PropTypes from 'prop-types';

/* Redux */
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import styles from './styles';

export class ProductItem extends Component {
  static propTypes = {
    product: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      brand: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.number,
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  navigateToDetail = () => {
    const { product, dispatch } = this.props;
    return dispatch(NavigationActions.navigate({
      routeName: 'Detail',
      params: { product },
    }));
  }

  render() {
    const { product } = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.navigateToDetail}
        activeOpacity={0.8}
      >
        <Image
          style={styles.image}
          source={{
            uri: product.image,
          }}
        />
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.brand}>{product.brand}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </TouchableOpacity>
    );
  }
}

export default connect()(ProductItem);
