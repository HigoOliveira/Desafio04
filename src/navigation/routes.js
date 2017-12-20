/* Core */
import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

/* Components */
import ProductListComponent from 'pages/productlist';
import Detail from 'pages/detail';
import Cart from 'pages/cart';

/* Presentational */
import { colors } from 'styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProductListRoutes = StackNavigator({
  ProductListComponent: { screen: ProductListComponent },
  Detail: { screen: Detail },
}, {
  headerMode: 'none',
  navigationOptions: {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="home" size={20} color={tintColor} />
    ),
  },
});


const Routes = TabNavigator({
  ProductListComponent: { screen: ProductListRoutes },
  Cart: { screen: Cart },
}, {
  initialRouteName: 'ProductListComponent',
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
      borderColor: colors.light,
    },
  },
});

export default Routes;
