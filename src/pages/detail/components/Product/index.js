/* Core */
import React from 'react';
import PropTypes from 'prop-types';

/* Components */
import { ProductItem } from 'components/ProductList/components/ProductItem';
import CategoryItem from 'components/CategoryList/components/CategoryItem';

/* Presentational */
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Alert from 'components/Alert';
import styles from './styles';

const Product = ({ category, product, cartAddProduct }) => (
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
      <Text style={styles.price}>R${parseFloat(product.price).toFixed(2)}</Text>
    </View>
    <TouchableOpacity
      onPress={() => { cartAddProduct(category, product); Alert.alert('Produto adicionado ao carrinho!'); }}
      style={styles.button}
    >
      <Text style={styles.text}>Adicionar ao carrinho</Text>
    </TouchableOpacity>
  </View>
);

Product.propTypes = {
  cartAddProduct: PropTypes.func.isRequired,
  product: PropTypes.oneOfType([
    ProductItem.propTypes.product,
    PropTypes.object,
  ]).isRequired,
  category: PropTypes.oneOfType([
    CategoryItem.propTypes.category,
    PropTypes.object,
  ]).isRequired,
};

export default Product;
