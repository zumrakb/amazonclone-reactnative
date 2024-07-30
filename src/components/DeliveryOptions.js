import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native';

const DeliveryOptions = () => {
  return (
    <View style={styles.deliveryOptionsContainer}>
      <View style={styles.deliveryOptionsRow}>
        <View style={styles.optionItem}>
          <Image
            style={styles.optionIcon}
            source={require('../assets/images/delivery/1.png')}
          />
          <Text style={styles.optionText}>Hızlı Kargo</Text>
        </View>
        <View style={styles.optionItem}>
          <Image
            style={styles.optionIcon}
            source={require('../assets/images/delivery/2.png')}
          />
          <Text style={styles.optionText}>Kolay İade</Text>
        </View>
      </View>
      <View style={styles.deliveryOptionsRow}>
        <View style={styles.optionItem}>
          <Image
            style={styles.optionIcon}
            source={require('../assets/images/delivery/3.png')}
          />
          <Text style={styles.optionText}>Kurumsal Fatura</Text>
        </View>
        <View style={styles.optionItem}>
          <Image
            style={styles.optionIcon}
            source={require('../assets/images/delivery/4.png')}
          />
          <Text style={styles.optionText}>Randevulu Teslimat</Text>
        </View>
      </View>
    </View>
  );
};

export default DeliveryOptions;

const styles = StyleSheet.create({
  deliveryOptionsContainer: {
    height: 'auto',
    flexDirection: 'column',
    marginVertical: 20,
  },
  deliveryOptionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  optionItem: {
    alignItems: 'center',
    marginHorizontal: 'auto',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,

    width: 180,
    height: 200,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  optionIcon: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  optionText: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
    color: 'gray',
  },
});
