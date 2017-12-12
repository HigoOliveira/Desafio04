import React from 'react';
import { View, Image, Text } from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

const ProductItem = ({ product }) => (
  <View style={styles.container}>
    <Image
      style={styles.image}
      source={{
        uri: product.image,
      }}
    />
    <Text style={styles.name}>{product.name}</Text>
    <Text style={styles.brand}>{product.brand}</Text>
    <Text style={styles.price}>{product.price}</Text>
  </View>
);

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ProductItem;
