// src/screens/LoginScreen.js
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const handleSignUp = () => {
    setIsSignUp(true);
    setIsSignIn(false);
    navigation.navigate('SignUpScreen');
  };

  const handleSignIn = () => {
    setIsSignIn(true);
    setIsSignUp(false);
  };
  const handleCreateAccount = () => {
    Alert.alert('Giriş yapıldı.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hoş Geldiniz</Text>
      <View style={styles.optionContainer}>
        <CheckBox
          isChecked={isSignUp}
          onClick={handleSignUp}
          checkBoxColor="#000"
        />
        <Text onPress={handleSignUp} style={styles.optionText}>
          Hesap Oluşturun
        </Text>
      </View>
      <View style={styles.optionContainer}>
        <CheckBox
          isChecked={isSignIn}
          onClick={handleSignIn}
          checkBoxColor="#000"
        />
        <Text onPress={handleSignIn} style={styles.optionText}>
          Giriş yapın zaten müşteri misiniz?
        </Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="E-posta veya telefon numarası"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
        <Text style={styles.buttonText}>Devam Et</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>
        Giriş yaparak <Text style={styles.linkText}>Yasal Bilgiler</Text>{' '}
        bölümünde ve{' '}
        <Text style={styles.linkText}>Gizlilik Bildirimimizde</Text> belirtilen
        kullanım koşullarını kabul etmiş olursunuz.
      </Text>
      <Text style={styles.linkText}>Yardım mı ihtiyacınız var?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF9900',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  footerText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 20,
  },
  linkText: {
    color: '#0066c0',
  },
});

export default LoginScreen;
