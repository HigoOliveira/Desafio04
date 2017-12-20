/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Redux */
import { connect } from 'react-redux';
import CartActions from 'store/ducks/cart';

/* Components */
import { ProductItem } from 'components/ProductList/components/ProductItem';
import Alert from 'components/Alert';

/* Presentational */
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export class CartItem extends Component {
  static propTypes = {
    cart: PropTypes.shape({
      id: PropTypes.string,
      product: ProductItem.propTypes.product,
      quantity: PropTypes.number,
    }).isRequired,
    cartRemoveProduct: PropTypes.func.isRequired,
    cartUpdateProduct: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      text: `${props.cart.quantity}`,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.cart) {
      this.setState({ text: `${nextProps.cart.quantity}` });
    }
  }

  handleChangeQuantity = (e) => {
    const { text } = e.nativeEvent;
    if (text === '0') {
      Alert.confirm('Se você escolheu \'0\' como quantidade, seu produto será excluido do carrinho!', () => {
        this.props.cartRemoveProduct(this.props.cart);
      }, () => {
        this.setState({ text: `${this.props.cart.quantity}` });
      });
    } else {
      this.props.cartUpdateProduct(this.props.cart, parseInt(text, 10));
    }
  }

  render() {
    const { cart, cartRemoveProduct } = this.props;
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: cart.product.image,
          }}
          style={styles.image}
        />
        <View style={styles.containerMain}>
          <Text style={styles.name}>{cart.product.name}</Text>
          <Text style={styles.brand}>{cart.product.brand}</Text>
          <Text style={styles.price}>{cart.product.price}</Text>
        </View>
        <TextInput
          style={styles.input}
          underlineColorAndroid="rgba(0,0,0,0)"
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
          keyboardType="numeric"
          onEndEditing={this.handleChangeQuantity}
        />
        <TouchableOpacity onPress={() => { cartRemoveProduct(cart); }}>
          <Icon name="times" size={16} />
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  cartRemoveProduct: item =>
    dispatch(CartActions.cartRemoveProduct(item)),
  cartUpdateProduct: (item, quantity) =>
    dispatch(CartActions.cartUpdateProduct(item, quantity)),
});

export default connect(null, mapDispatchToProps)(CartItem);
