/* @flow */
/* Core */
import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import PropTypes from 'prop-types';

/* Components */
import CartList from 'components/CartList';

/* Presentational */
import Icon from 'react-native-vector-icons/FontAwesome';

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
        <CartList />
      </View>
    );
  }
}
