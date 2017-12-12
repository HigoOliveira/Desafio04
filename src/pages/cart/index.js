/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

export default class Cart extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Cart</Text>
      </View>
    );
  }
}
