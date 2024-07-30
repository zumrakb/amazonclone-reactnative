import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MagnifyingGlassIcon} from 'react-native-heroicons/micro';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>Amazon Clone</Text>
      <TextInput style={styles.searchInput} placeholder="Search..." />
      <MagnifyingGlassIcon color={'white'} size={22} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#232f3e',
    borderRadius: 10,
    marginVertical: 20,
    marginHorizontal: 10,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 12,
    paddingVertical: 3,
    paddingHorizontal: 7,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  cartIcon: {
    color: '#fff',
  },
});

export default Header;
