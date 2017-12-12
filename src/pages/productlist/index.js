/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import List from 'components/ProductList';

import PropTypes from 'prop-types';

import styles from './styles';

export default class ProductList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <List />
      </View>
    );
  }
}
