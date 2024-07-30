import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import fetchImagesForCategory from '../utils/unsplashApi';

const {width: viewportWidth} = Dimensions.get('window');

// Kategorileri bir dizi içinde tanımlayın
const categories = [
  'laptop',
  'technology',
  'computer',
  'office',
  'gadgets',
  'electronics',
];

const mockData = [
  {
    id: '1',
    name: 'Laptop 1',
    price: '23.999,00 TL',
    details: `
      - 15.6" FHD IPS 350nits 45% NTSC 144Hz G-SYNC
      - Intel Core i5-12450H
      - 8 GB RAM, 512 GB SSD
      - NVIDIA GeForce RTX 4050 6GB
      - FreeDOS, 82XV00HLTX
    `,
  },
  {
    id: '2',
    name: 'Laptop 2',
    price: '21.999,00 TL',
    details: `
      - 14" FHD IPS 300nits 100% sRGB
      - Intel Core i7-1165G7
      - 16 GB RAM, 1 TB SSD
      - NVIDIA GeForce MX450 2GB
      - Windows 10 Home
    `,
  },
  {
    id: '3',
    name: 'Laptop 3',
    price: '18.999,00 TL',
    details: `
      - 13.3" FHD OLED 400nits 100% DCI-P3
      - Intel Core i5-1135G7
      - 8 GB RAM, 256 GB SSD
      - Integrated Intel Iris Xe Graphics
      - Windows 10 Pro
    `,
  },
  {
    id: '4',
    name: 'Laptop 4',
    price: '19.499,00 TL',
    details: `
      - 14" FHD IPS 300nits 72% NTSC
      - Intel Core i5-11300H
      - 16 GB RAM, 512 GB SSD
      - NVIDIA GeForce GTX 1650 4GB
      - FreeDOS
    `,
  },
  {
    id: '5',
    name: 'Laptop 5',
    price: '22.999,00 TL',
    details: `
      - 15.6" FHD IPS 250nits 45% NTSC
      - Intel Core i7-10750H
      - 16 GB RAM, 1 TB SSD
      - NVIDIA GeForce RTX 2060 6GB
      - Windows 10 Home
    `,
  },
  {
    id: '6',
    name: 'Laptop 6',
    price: '24.999,00 TL',
    details: `
      - 17.3" FHD IPS 300nits 100% sRGB
      - Intel Core i9-11900H
      - 32 GB RAM, 2 TB SSD
      - NVIDIA GeForce RTX 3070 8GB
      - Windows 11 Home
    `,
  },
  {
    id: '7',
    name: 'Laptop 7',
    price: '20.999,00 TL',
    details: `
      - 15.6" FHD IPS 400nits 100% DCI-P3
      - Intel Core i7-10875H
      - 16 GB RAM, 1 TB SSD
      - NVIDIA GeForce RTX 2070 8GB
      - FreeDOS
    `,
  },
  {
    id: '8',
    name: 'Laptop 8',
    price: '17.999,00 TL',
    details: `
      - 13.3" FHD OLED 450nits 100% Adobe RGB
      - Intel Core i5-10210U
      - 8 GB RAM, 256 GB SSD
      - Integrated Intel UHD Graphics
      - Windows 10 Pro
    `,
  },
  {
    id: '9',
    name: 'Laptop 9',
    price: '26.999,00 TL',
    details: `
      - 15.6" 4K UHD IPS 600nits 100% sRGB
      - Intel Core i9-11980HK
      - 32 GB RAM, 1 TB SSD
      - NVIDIA GeForce RTX 3080 10GB
      - Windows 11 Pro
    `,
  },
  {
    id: '10',
    name: 'Laptop 10',
    price: '18.999,00 TL',
    details: `
      - 14" FHD IPS 250nits 45% NTSC
      - Intel Core i5-1135G7
      - 8 GB RAM, 512 GB SSD
      - NVIDIA GeForce MX330 2GB
      - FreeDOS
    `,
  },
  {
    id: '11',
    name: 'Laptop 11',
    price: '22.499,00 TL',
    details: `
      - 15.6" FHD IPS 300nits 100% sRGB
      - Intel Core i7-10750H
      - 16 GB RAM, 1 TB SSD
      - NVIDIA GeForce GTX 1660 Ti 6GB
      - Windows 10 Home
    `,
  },
  {
    id: '12',
    name: 'Laptop 12',
    price: '21.999,00 TL',
    details: `
      - 14" FHD IPS 300nits 100% sRGB
      - Intel Core i7-1165G7
      - 16 GB RAM, 512 GB SSD
      - NVIDIA GeForce MX450 2GB
      - Windows 10 Home
    `,
  },
  {
    id: '13',
    name: 'Laptop 13',
    price: '25.999,00 TL',
    details: `
      - 15.6" FHD IPS 350nits 100% Adobe RGB
      - Intel Core i9-11900H
      - 32 GB RAM, 1 TB SSD
      - NVIDIA GeForce RTX 3070 8GB
      - Windows 11 Pro
    `,
  },
  {
    id: '14',
    name: 'Laptop 14',
    price: '19.999,00 TL',
    details: `
      - 14" FHD IPS 300nits 100% sRGB
      - Intel Core i5-10300H
      - 8 GB RAM, 512 GB SSD
      - NVIDIA GeForce GTX 1650 4GB
      - FreeDOS
    `,
  },
  {
    id: '15',
    name: 'Laptop 15',
    price: '23.499,00 TL',
    details: `
      - 15.6" FHD IPS 400nits 100% DCI-P3
      - Intel Core i7-10875H
      - 16 GB RAM, 1 TB SSD
      - NVIDIA GeForce RTX 2070 8GB
      - FreeDOS
    `,
  },
  {
    id: '16',
    name: 'Laptop 16',
    price: '18.499,00 TL',
    details: `
      - 13.3" FHD OLED 400nits 100% DCI-P3
      - Intel Core i5-1135G7
      - 8 GB RAM, 256 GB SSD
      - Integrated Intel Iris Xe Graphics
      - Windows 10 Pro
    `,
  },
  {
    id: '17',
    name: 'Laptop 17',
    price: '24.999,00 TL',
    details: `
      - 17.3" FHD IPS 300nits 100% sRGB
      - Intel Core i9-11900H
      - 32 GB RAM, 2 TB SSD
      - NVIDIA GeForce RTX 3070 8GB
      - Windows 11 Home
    `,
  },
  {
    id: '18',
    name: 'Laptop 18',
    price: '19.499,00 TL',
    details: `
      - 14" FHD IPS 300nits 72% NTSC
      - Intel Core i5-11300H
      - 16 GB RAM, 512 GB SSD
      - NVIDIA GeForce GTX 1650 4GB
      - FreeDOS
    `,
  },
  {
    id: '19',
    name: 'Laptop 19',
    price: '18.999,00 TL',
    details: `
      - 13.3" FHD OLED 450nits 100% Adobe RGB
      - Intel Core i5-10210U
      - 8 GB RAM, 256 GB SSD
      - Integrated Intel UHD Graphics
      - Windows 10 Pro
    `,
  },
  {
    id: '20',
    name: 'Laptop 20',
    price: '25.999,00 TL',
    details: `
      - 15.6" UHD IPS 600nits 100% Adobe RGB
      - Intel Core i9-11900H
      - 32 GB RAM, 2 TB SSD
      - NVIDIA GeForce RTX 3080 8GB
      - Windows 11 Pro
    `,
  },
];

const getRandomProduct = () => {
  return mockData[Math.floor(Math.random() * mockData.length)];
};

const ProductDetailsScreen = ({route}) => {
  const {productName} = route.params;
  const [images, setImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchImages = async () => {
      const randomCategory =
        categories[Math.floor(Math.random() * categories.length)];
      const fetchedImages = await fetchImagesForCategory(randomCategory);
      setImages(fetchedImages);
    };

    fetchImages();

    // Rastgele bir ürün seç ve setProduct ile duruma ekle
    const randomProduct = getRandomProduct();
    setProduct(randomProduct);
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.slide}>
      <Image source={{uri: item.urls.regular}} style={styles.image} />
    </View>
  );

  const onScroll = event => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = Math.floor(event.nativeEvent.contentOffset.x / slideSize);
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        keyExtractor={item => item.id}
      />
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor:
                  index === activeIndex
                    ? 'rgba(0, 0, 0, 0.75)'
                    : 'rgba(0, 0, 0, 0.3)',
              },
            ]}
          />
        ))}
      </View>

      {/* Product Details */}
      <View style={styles.detailsContainer}>
        <View style={styles.basliklar}>
          <Text style={styles.productName}>{productName}</Text>
          <Text style={styles.productPrice}>{product.price}</Text>
        </View>

        <Text style={styles.staticDetails}>{product.details}</Text>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.primeButton}>
            <Text style={styles.primeButtonText}>Prime'a Katılın</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.addToCartButton}>
            <Text style={styles.addToCartText}>Listeye Ekle</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.iconText}>
          Amazon aracılığıyla gönderilir ⭐ Güvenli işlem ⭐ İade Politikası
        </Text>
      </View>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  basliklar: {
    marginVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  productName: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    width: viewportWidth,
    height: 300,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  detailsContainer: {
    padding: 20,
  },
  staticDetails: {
    fontSize: 16,
    marginVertical: 0,
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginVertical: 20,
  },
  primeButton: {
    backgroundColor: '#ffa41c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '50%',
  },
  primeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  addToCartButton: {
    backgroundColor: '#00a8e1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '50%',
  },
  addToCartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  iconText: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 10,
  },
});
