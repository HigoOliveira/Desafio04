/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { ScrollView, View, ActivityIndicator } from 'react-native';
import styles from './styles';

/* Components */
import CategoryItem from './components/CategoryItem';

export default class List extends Component {
  static propTypes = {
    categories: PropTypes.arrayOf(CategoryItem.propTypes.category),
    loading: PropTypes.bool,
  };

  static defaultProps = {
    categories: [],
    loading: false,
  }
  handleSelectCategory = (selectedCategory) => {
    const items = this.state.items.map(category =>
      ({ ...category, selected: selectedCategory.id === category.id }));
    this.setState({ items });
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
            selected={category.selected}
            onPress={this.handleSelectCategory}
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
