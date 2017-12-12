import { StackNavigator, TabNavigator } from 'react-navigation';

import ProductList from 'pages/productlist';
import Detail from 'pages/detail';
import Cart from 'pages/cart';

const ProductListRoutes = StackNavigator({
  ProductList: { screen: ProductList },
  Detail: { screen: Detail },
}, {
  headerMode: 'none',
});

const Routes = TabNavigator({
  ProductList: { screen: ProductListRoutes },
  Cart: { screen: Cart },
}, {
  swipeEnabled: false,
  animationEnabled: false,
  lazy: true,
  tabBarPosition: 'bottom',
  showIcon: true,
});

export default Routes;
