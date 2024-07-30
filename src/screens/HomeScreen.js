import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import ProductCard from '../components/ProductCard';
import {useSelector} from 'react-redux';
import DeliveryOptions from '../components/DeliveryOptions';
import TopMenu from '../components/TopMenu';
import bannerTexts from '../utils/bannerTexts.json';
import fetchImagesForCategory from '../utils/unsplashApi';
import {MapIcon} from 'react-native-heroicons/solid';

const HomeScreen = ({navigation}) => {
  const products = useSelector(state => state.products.items);
  const [images, setImages] = useState([]);
  const [bannerText, setBannerText] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const fetchedImages = await fetchImagesForCategory('random');
      setImages(fetchedImages);
    };

    loadImages();
  }, []);

  useEffect(() => {
    const getRandomTexts = () => {
      const randomTexts = [];
      const categories = Object.keys(bannerTexts);
      for (let i = 0; i < 5; i++) {
        const randomCategory =
          categories[Math.floor(Math.random() * categories.length)];
        randomTexts.push(bannerTexts[randomCategory]);
      }
      setBannerText(randomTexts);
    };

    getRandomTexts();
  }, []);

  const renderProductPair = ({item, index}) => {
    if (index % 2 === 0) {
      return (
        <View style={styles.urunler}>
          <ProductCard
            product={item}
            onPress={() =>
              navigation.navigate('ProductDetailsScreen', {
                productName: item.name,
              })
            }
          />
          {products[index + 1] && (
            <ProductCard
              product={products[index + 1]}
              onPress={() =>
                navigation.navigate('ProductDetailsScreen', {
                  productName: products[index + 1].name,
                })
              }
            />
          )}
        </View>
      );
    } else {
      return null;
    }
  };

  const renderBanner = (item, index) => (
    <View key={index} style={styles.bannerContainer}>
      {item.urls && (
        <Image style={styles.banner} source={{uri: item.urls.regular}} />
      )}
      <View style={styles.textOverlay}>
        <Text style={styles.overlayTitle}>
          {bannerText[index]?.overlayTitle}
        </Text>
        <Text style={styles.overlaySubtitle}>
          {bannerText[index]?.overlaySubtitle}
        </Text>
        <Text style={styles.overlayText}>
          {bannerText[index]?.overlayText1}
        </Text>
        <Text style={styles.overlayText}>
          {bannerText[index]?.overlayText2}
        </Text>
        <Text style={styles.overlayBottomText}>
          {bannerText[index]?.overlayBottomText}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={{flex: 1, padding: 10, backgroundColor: '#F5F4F7'}}>
      <View style={styles.location}>
        <MapIcon color={'black'} />
        <Text>
          Teslimat Konumu: Konya 42100
          <Text style={{color: '#232f3e'}}> 🔗 Konumu Güncelle</Text>
        </Text>
      </View>
      <FlatList
        ListHeaderComponent={() => (
          <View>
            <TopMenu />
            <DeliveryOptions />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {images.slice(0, 5).map(renderBanner)}
            </ScrollView>
          </View>
        )}
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={renderProductPair}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  urunler: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  bannerContainer: {
    position: 'relative',
    marginBottom: 20,
    marginRight: 10,
  },
  banner: {
    opacity: 0.9,
    backgroundColor: 'black',
    width: 350,
    height: 175,
    borderRadius: 8,
  },
  textOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
  },
  overlayTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  overlaySubtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  overlayText: {
    fontSize: 16,
    color: '#fff',
  },
  overlayBottomText: {
    fontSize: 14,
    color: '#fff',
    marginTop: 10,
  },
  location: {
    marginBottom: 20,
    flexDirection: 'row',
    paddingHorizontal: 10,
    gap: 5,
  },
});
