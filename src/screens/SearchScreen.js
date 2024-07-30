import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ProductCard from '../components/ProductCard';
import {Image} from 'react-native';

const SearchScreen = ({navigation}) => {
  const [query, setQuery] = useState('');
  const products = [];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()),
  );

  const boxes = [
    {
      title:
        'Sipariş durumunu kontrol edin, ürünleri takip edin, değiştirin veya iade edin',
      image: require('../assets/images/searchscreen/box1.png'),
    },
    {
      title: 'Geçmişte satın aldıklarınızı ve günlük temel ürünleri satın alın',
      image: require('../assets/images/searchscreen/box2.png'),
    },
    {
      title: 'Şimdi veya daha sonra istediğiniz öğelerle listeler oluşturun',
      image: require('../assets/images/searchscreen/box3.png'),
    },
  ];

  const renderHeader = () => (
    <View>
      <View style={styles.searchcontainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search products..."
          value={query}
          onChangeText={setQuery}
        />
      </View>
      <Text style={styles.toptexts}>
        <Text style={styles.toptext}>Merhaba! </Text>
        <Text style={styles.toptext}>🇹🇷</Text>
      </Text>
      <View style={styles.login}>
        <Text style={styles.logintexts}>En iyi deneyim için oturum açın.</Text>
        <View>
          <TouchableOpacity
            style={styles.girisyap}
            onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.buttonText}>Giriş Yap</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.hesapolustur}
            onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={styles.buttonText}>Hesap Oluştur</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.boxcategory}>
        {boxes.map((category, index) => (
          <View key={index} style={styles.boxtext}>
            <Image source={category.image} style={styles.image} />
            <Text style={styles.boxtitle}>{category.title}</Text>
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={renderHeader}
      data={filteredProducts}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <ProductCard
          product={item}
          onPress={() => navigation.navigate('Product', {productId: item.id})}
        />
      )}
      ListEmptyComponent={
        <Text style={styles.noResultsText}>No products found</Text>
      }
    />
  );
};

const styles = StyleSheet.create({
  boxcategory: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: 20,
  },
  boxtitle: {
    color: '#6B7280',
    fontSize: 18,
    width: 220,
  },
  boxtext: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  image: {
    width: 130,
    height: 130,
  },
  girisyap: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDBA74',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1F2937',
    width: '100%',
    paddingVertical: 10,
    marginBottom: 10,
  },
  hesapolustur: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1F2937',
    width: '100%',
    paddingVertical: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#6B7280',
    fontSize: 16,
  },
  login: {
    marginVertical: 30,
    width: '100%',
    flexDirection: 'column',
    gap: 40,
    padding: 10,
  },
  logintexts: {
    color: '#374151',
    fontSize: 24,
    textAlign: 'center',
  },
  toptexts: {
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  toptext: {
    fontSize: 18,
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 8,
    marginBottom: 10,
  },
  noResultsText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#888',
  },
  searchcontainer: {},
});

export default SearchScreen;
