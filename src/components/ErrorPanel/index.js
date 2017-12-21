/* Core */
import React from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';

const ErrorPanel = ({ text, loading, action }) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      {text}
    </Text>
    <TouchableOpacity
      onPress={() => { action(); }}
      style={styles.button}
    >
      { loading
        ? (
          <ActivityIndicator
            size="small"
            color="#fff"
            style={styles.indicator}
          />
        )
        : null
      }
      <Text style={styles.buttonText}>Recarregar</Text>
    </TouchableOpacity>
  </View>
);

ErrorPanel.propTypes = {
  text: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  action: PropTypes.func.isRequired,
};

ErrorPanel.defaultProps = {
  loading: false,
};

export default ErrorPanel;
