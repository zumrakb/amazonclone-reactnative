import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import ProductCard from '../components/ProductCard';
import {Picker} from '@react-native-picker/picker';

const SelectedTopMenuContent = ({route, navigation}) => {
  const {menuTitle} = route.params;
  const products = useSelector(state => state.products.items);
  const [selectedFilter, setSelectedFilter] = useState();

  const renderProduct = ({item}) => (
    <ProductCard
      product={item}
      onPress={() => navigation.navigate('Product', {productId: item.id})}
    />
  );

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/categories/hediye.jpg')}
        style={styles.banner}
      />
      <View style={styles.bannerTextContainer}>
        <Text style={styles.bannerText}>{menuTitle}</Text>
      </View>
      <View style={styles.filtersContainer}>
        <Picker
          selectedValue={selectedFilter}
          onValueChange={itemValue => setSelectedFilter(itemValue)}
          style={styles.picker}>
          <Picker.Item label="Filtre Seçin" value={null} />
          <Picker.Item label="Kuponlar" value="kuponlar" />
          <Picker.Item label="Prime" value="prime" />
          <Picker.Item label="200 TL Altı Fırsatlar" value="200tl-alti" />
        </Picker>
      </View>

      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.productsContainer}
        numColumns={2}
        ItemSeparatorComponent={() => <View style={{height: 10}} />} // Dikey boşluk
        columnWrapperStyle={styles.row} // Yatay boşluk
      />
    </View>
  );
};

export default SelectedTopMenuContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: '100%',
    height: 200,
  },
  bannerTextContainer: {
    position: 'absolute',
    top: 80,
    left: 20,
  },
  bannerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  filtersContainer: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  productsContainer: {
    paddingHorizontal: 10,
  },
  row: {
    justifyContent: 'space-between', // Yatay boşluk
  },
});
