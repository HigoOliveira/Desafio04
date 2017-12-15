/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Redux */
import { connect } from 'react-redux';
import CategoryActions from 'store/ducks/category';

/* Presentational */
import { ScrollView, View, ActivityIndicator } from 'react-native';
import styles from './styles';

/* Components */
import CategoryItem from './components/CategoryItem';

class List extends Component {
  static propTypes = {
    categories: PropTypes.arrayOf(CategoryItem.propTypes.category),
    loading: PropTypes.bool,
    selected: CategoryItem.propTypes.selected,
    categorySelect: PropTypes.func.isRequired,
  };

  static defaultProps = {
    categories: [],
    loading: false,
    selected: null,
  }

  renderCategories() {
    return (
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {this.props.categories.map(category => (
          <CategoryItem
            key={category.id}
            category={category}
            selected={this.props.selected}
            onPress={this.props.categorySelect}
          />))}
      </ScrollView>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.loading
          ? <ActivityIndicator size="small" />
          : this.renderCategories()}
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  categorySelect: category => dispatch(CategoryActions.categorySelect(category)),
});

export default connect(null, mapDispatchToProps)(List);
