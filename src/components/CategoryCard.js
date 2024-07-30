import React from 'react';
import {Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const CategoryCard = ({title, image, onPress}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 175,
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#fff',
    elevation: 5, // Android için gölge efekti
    shadowOpacity: 0.8,
    shadowRadius: 2,
    flexDirection: 'column',
    gap: 7,
  },
  image: {
    width: '100%',
    height: '80%',
    resizeMode: 'contain',
    objectFit: 'cover',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
});

export default CategoryCard;
