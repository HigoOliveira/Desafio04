/* @flow */
/* Core */
import React, { Component } from 'react';
import {
  View,
  // Text,
} from 'react-native';
// import PropTypes from 'prop-types';

/* Redux */
import { connect } from 'react-redux';
import CategoryActions from 'store/ducks/category';

/* Components */
import List from 'components/ProductList';
import CategoryList from 'components/CategoryList';
import Header from 'components/Header';

/* Presentational */
import styles from './styles';

class ProductList extends Component {
  componentDidMount() {
    this.props.categoryRequest();
  }
  render() {
    const { category } = this.props;
    return (
      <View style={styles.container}>
        <Header title="GoCommerce" />
        <CategoryList
          categories={category.data}
          loading={category.loading}
        />
        <List />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  category: state.category,
});

const mapDispatchToProps = dispatch => ({
  categoryRequest: () => dispatch(CategoryActions.categoryRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
