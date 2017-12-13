import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';

import CategoryItem from './components/CategoryItem';

import styles from './styles';

export default class List extends Component {
  state = {
    items: [{
      id: 1,
      title: 'Camisetas',
    },
    {
      id: 2,
      title: 'Camisas',
      selected: true,
    },
    {
      id: 3,
      title: 'Calças',
    },
    {
      id: 4,
      title: 'Blusas',
    },
    {
      id: 5,
      title: 'Bonés',
    },
    {
      id: 6,
      title: 'Casacos',
    }],
  }

  handleSelectCategory = (selectedCategory) => {
    const items = this.state.items.map(category =>
      ({ ...category, selected: selectedCategory.id === category.id }));
    this.setState({ items });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {this.state.items.map(item => (
            <CategoryItem
              key={item.id}
              category={item}
              selected={item.selected}
              onPress={this.handleSelectCategory}
            />))}
        </ScrollView>
      </View>
    );
  }
}
