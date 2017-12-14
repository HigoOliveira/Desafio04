/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Redux */
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

/* Presentational */
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from 'styles';

import styles from './styles';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    backEnabled: PropTypes.bool,
    dispatch: PropTypes.func,
  };

  static defaultProps = {
    backEnabled: false,
    dispatch: null,
  };

  state = {};

  navigateBack = () => {
    const { dispatch } = this.props;

    return dispatch(NavigationActions.back());
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftButton}>
          { this.props.backEnabled &&
            <TouchableOpacity onPress={this.navigateBack}>
              <Icon name="angle-left" size={20} color={colors.grey} />
            </TouchableOpacity> }
        </View>
        <Text style={styles.title}>{this.props.title}</Text>
        <View style={styles.rightButton} />
      </View>
    );
  }
}

export default connect()(Header);
