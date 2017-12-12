/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import PropTypes from 'prop-types';

import styles from './styles';

export default class Cart extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="shopping-cart" size={20} color={tintColor} />
    ),
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Cart</Text>
      </View>
    );
  }
}
