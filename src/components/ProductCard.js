import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';
import {addToCart, removeFromCart} from '../redux/reducers/cartReducer';
import {useDispatch} from 'react-redux';
import {ShoppingBagIcon} from 'react-native-heroicons/solid';

const ProductCard = ({product, onPress}) => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={product.image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>

        <TouchableOpacity
          style={styles.addcart}
          onPress={() => {
            dispatch(addToCart(product));
          }}>
          <ShoppingBagIcon color={'white'} />
          <Text style={styles.addtext}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addtext: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  addcart: {
    gap: 5,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#60A5FA',
    paddingHorizontal: 10,
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '55%',
    marginLeft: 75,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    width: '48%',
    flexDirection: 'column',
    gap: 5,
  },
  image: {
    width: '100%',
    height: 150,
  },
  infoContainer: {
    padding: 10,
    flexDirection: 'column',
    gap: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
});

export default ProductCard;
