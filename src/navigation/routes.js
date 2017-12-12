import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

import { colors } from 'styles';

import ProductList from 'pages/productlist';
import Detail from 'pages/detail';
import Cart from 'pages/cart';

import Icon from 'react-native-vector-icons/FontAwesome';

const ProductListRoutes = StackNavigator({
  ProductList: { screen: ProductList },
  Detail: { screen: Detail },
}, {
  headerMode: 'none',
  navigationOptions: {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="home" size={20} color={tintColor} />
    ),
  }
});


const Routes = TabNavigator({
  ProductList: { screen: ProductListRoutes },
  Cart: { screen: Cart },
}, {
  swipeEnabled: false,
  animationEnabled: false,
  lazy: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    activeTintColor: colors.primary,
    inactiveTintColor: colors.grey,
    renderIndicator: () => null,
    style: {
      backgroundColor: colors.white,
      borderTopWidth: 1,
      borderColor: colors.grey,
    },
  },
});

export default Routes;
