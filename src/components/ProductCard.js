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
          <Text style={styles.addtext}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addtext: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFFFFF',
  },
  addcart: {
    borderRadius: 10,
    backgroundColor: '#60A5FA',
    padding: 5,
    borderRadius: 5,

    alignItems: 'center',
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
