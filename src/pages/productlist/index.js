/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

export default class Detail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Detail</Text>
      </View>
    );
  }
}
