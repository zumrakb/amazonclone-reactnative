import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import subcategoriesData from '../utils/data.json';
import bannerTexts from '../utils/bannerTexts.json';
import fetchImagesForCategory from '../utils/unsplashApi';

const SelectedCategoryScreen = ({route}) => {
  const {categoryTitle} = route.params;
  const [subcategories, setSubcategories] = useState([]);
  const [bannerText, setBannerText] = useState({});
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (subcategoriesData[categoryTitle]) {
      setSubcategories(subcategoriesData[categoryTitle]);
    }

    if (bannerTexts[categoryTitle]) {
      setBannerText(bannerTexts[categoryTitle]);
    }

    const loadImages = async () => {
      const fetchedImages = await fetchImagesForCategory(categoryTitle);
      setImages(fetchedImages);
    };

    loadImages();
  }, [categoryTitle]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{categoryTitle}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Öne çıkan markalar</Text>
        <ScrollView horizontal contentContainerStyle={styles.brands}>
          {images.slice(0, 8).map((image, index) => (
            <View key={index} style={styles.imageContainer}>
              <Image
                source={{uri: image.urls.small}}
                style={styles.brandImage}
              />
              <Text style={styles.brandText}>Brand {index + 1}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.bannerContainer}>
          {images[0] && (
            <Image
              style={styles.banner}
              source={{uri: images[0].urls.regular}}
            />
          )}
          <View style={styles.textOverlay}>
            <Text style={styles.overlayTitle}>{bannerText.overlayTitle}</Text>
            <Text style={styles.overlaySubtitle}>
              {bannerText.overlaySubtitle}
            </Text>
            <Text style={styles.overlayText}>{bannerText.overlayText1}</Text>
            <Text style={styles.overlayText}>{bannerText.overlayText2}</Text>
            <Text style={styles.overlayBottomText}>
              {bannerText.overlayBottomText}
            </Text>
          </View>
        </View>
        <Text style={styles.sectionTitle}>Öne çıkan kategoriler</Text>
        <View style={styles.subcategories}>
          {subcategories.map((subcategory, index) => (
            <View key={index} style={styles.subcategoryCard}>
              {images[index + 1] && (
                <Image
                  source={{uri: images[index + 1].urls.small}}
                  style={styles.subcategoryImage}
                />
              )}
              <Text style={styles.subcategoryTitle}>{subcategory}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    position: 'relative',
    marginVertical: 10,
  },
  banner: {
    opacity: 0.3,
    backgroundColor: 'black',
    width: '100%',
    height: 150,
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
  container: {
    backgroundColor: '#fff',
  },
  header: {
    paddingLeft: 20,
    paddingBottom: 10,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'orange',
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  brands: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    alignItems: 'center',
    position: 'relative',
    width: 80,
    height: 80,
    marginRight: 10,
  },
  brandImage: {
    backgroundColor: 'black',
    borderRadius: 100,
    opacity: 0.7,
    width: '100%',
    height: '100%',
  },
  brandText: {
    position: 'absolute',
    top: '100%',
    left: '75%',
    transform: [{translateX: -50}, {translateY: -50}],
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subcategories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  subcategoryCard: {
    width: '49%',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  subcategoryImage: {
    width: 155,
    height: 155,
    borderRadius: 8,
    marginBottom: 10,
  },
  subcategoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SelectedCategoryScreen;
