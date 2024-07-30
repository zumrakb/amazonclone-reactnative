import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import CategoryCard from '../components/CategoryCard';

const categories = [
  {title: 'Prime', image: require('../assets/images/categories/prime.jpg')},
  {title: 'Hediye', image: require('../assets/images/categories/hediye.jpg')},
  {
    title: 'Fırsatlar',
    image: require('../assets/images/categories/firsatlar.jpg'),
  },
  {
    title: 'Gıda ve İçecek',
    image: require('../assets/images/categories/gidaveicecek.jpg'),
  },
  {
    title: 'Sağlık',
    image: require('../assets/images/categories/saglikbakimvetemizlik.jpg'),
  },
  {
    title: 'Evcil Hayvan ',
    image: require('../assets/images/categories/eviclhayvan.jpg'),
  },
  {
    title: 'Moda ve Güzellik',
    image: require('../assets/images/categories/modaveguzellik.jpg'),
  },
  {
    title: 'Ev ve Mutfak ',
    image: require('../assets/images/categories/evmutfakveyapimarket.jpg'),
  },
];

const CategoryScreen = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {categories.map((category, index) => (
        <CategoryCard
          key={index}
          title={category.title}
          image={category.image}
          onPress={() =>
            navigation.navigate('SelectedCategory', {
              categoryTitle: category.title,
            })
          }
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
});

export default CategoryScreen;
