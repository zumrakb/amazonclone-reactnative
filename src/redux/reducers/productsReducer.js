import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      name: 'Product 1',
      price: 29.99,
      quantity: 1,
      image: require('../../assets/images/productImages/p.jpg'),
    },
    {
      id: 2,
      name: 'Product 2',
      price: 49.99,
      quantity: 1,
      image: require('../../assets/images/productImages/p2.jpg'),
    },
    {
      id: 3,
      name: 'Product 3',
      price: 39.99,
      quantity: 1,
      image: require('../../assets/images/productImages/p3.jpg'),
    },
    {
      id: 4,
      name: 'Product 4',
      price: 19.99,
      quantity: 1,
      image: require('../../assets/images/productImages/p4.jpg'),
    },
    {
      id: 5,
      name: 'Product 5',
      price: 59.99,
      quantity: 1,
      image: require('../../assets/images/productImages/p5.jpg'),
    },
    {
      id: 6,
      name: 'Product 6',
      price: 24.99,
      quantity: 1,
      image: require('../../assets/images/productImages/p6.jpg'),
    },
    {
      id: 7,
      name: 'Product 7',
      price: 34.99,
      quantity: 1,
      image: require('../../assets/images/productImages/p.jpg'),
    },
    {
      id: 8,
      name: 'Product 8',
      price: 44.99,
      quantity: 1,
      image: require('../../assets/images/productImages/p2.jpg'),
    },
    {
      id: 9,
      name: 'Product 9',
      price: 54.99,
      quantity: 1,
      image: require('../../assets/images/productImages/p3.jpg'),
    },
    {
      id: 10,
      name: 'Product 10',
      price: 64.99,
      quantity: 1,
      image: require('../../assets/images/productImages/p4.jpg'),
    },
    {
      id: 11,
      name: 'Product 11',
      price: 74.99,
      quantity: 1,
      image: require('../../assets/images/productImages/p5.jpg'),
    },
    {
      id: 12,
      name: 'Product 12',
      price: 84.99,
      quantity: 1,
      image: require('../../assets/images/productImages/p6.jpg'),
    },
    {
      id: 13,
      name: 'Product 13',
      price: 94.99,
      quantity: 1,
      image: require('../../assets/images/productImages/p.jpg'),
    },
    {
      id: 14,
      name: 'Product 14',
      price: 104.99,
      quantity: 1,
      image: require('../../assets/images/productImages/p2.jpg'),
    },
    {
      id: 15,
      name: 'Product 15',
      price: 114.99,
      quantity: 1,
      image: require('../../assets/images/productImages/p3.jpg'),
    },
    {
      id: 16,
      name: 'Product 16',
      price: 124.99,
      quantity: 1,
      image: require('../../assets/images/productImages/p4.jpg'),
    },
    {
      id: 17,
      name: 'Product 17',
      price: 134.99,
      quantity: 1,
      image: require('../../assets/images/productImages/p5.jpg'),
    },
    {
      id: 18,
      name: 'Product 18',
      price: 144.99,
      quantity: 1,
      image: require('../../assets/images/productImages/p6.jpg'),
    },
    {
      id: 19,
      name: 'Product 19',
      price: 154.99,
      quantity: 1,
      image: require('../../assets/images/productImages/p.jpg'),
    },
    {
      id: 20,
      name: 'Product 20',
      price: 164.99,
      quantity: 1,
      image: require('../../assets/images/productImages/p2.jpg'),
    },
  ],
};

const product = createSlice({
  name: 'product',
  initialState,
  reducers: {},
});

export default product.reducer;
