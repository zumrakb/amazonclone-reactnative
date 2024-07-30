import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const images = [
  require('../assets/images/randomimage1.jpg'),
  require('../assets/images/randomimage2.jpg'),
  require('../assets/images/randomimage3.jpg'),
  require('../assets/images/randomimage4.jpg'),
  require('../assets/images/randomimage5.jpg'),
  require('../assets/images/randomimage6.jpg'),
  require('../assets/images/randomimage7.jpg'),
  require('../assets/images/randomimage3.jpg'),
  require('../assets/images/randomimage2.jpg'),
  require('../assets/images/randomimage1.jpg'),
];

const texts = [
  'Günün Fırsatları',
  'Çok Al Az Öde',
  'İnternet Favorileri',
  'Yurt Dışı Ürünleri',
  'Hızlı Kargo',
  'Kolay İade',
  'Kurumsal Fatura',
  'Randevulu Teslimat',
  'Yeni Ürünler',
  'En Çok Satanlar',
];

const TopMenu = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      horizontal
      style={styles.topMenu}
      showsHorizontalScrollIndicator={false}>
      {[...Array(14)].map((_, index) => (
        <TouchableOpacity
          key={index}
          onPress={() =>
            navigation.navigate('SelectedTopMenuScreen', {
              menuTitle: texts[index % texts.length],
            })
          }>
          <View style={styles.menuItem}>
            <Image
              style={styles.menuIcon}
              source={images[index % images.length]}
            />
            <Text style={styles.menuText}>{texts[index % texts.length]}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default TopMenu;

const styles = StyleSheet.create({
  topMenu: {
    flexDirection: 'row',
  },
  menuItem: {
    alignItems: 'center',
    marginRight: 10,
  },
  menuIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  menuText: {
    marginTop: 5,
    fontSize: 12,
  },
});
