/* @flow */
/* Core */
import React from 'react';
import {
  View,
  // Text,
} from 'react-native';
// import PropTypes from 'prop-types';

/* Components */
import List from 'components/ProductList';
import CategoryList from 'components/CategoryList';

/* Presentational */
import styles from './styles';

const ProductList = () => (
  <View style={styles.container}>
    <CategoryList />
    <List />
  </View>
);

export default ProductList;
