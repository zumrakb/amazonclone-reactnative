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

const SignUpScreen = () => {
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccount = () => {
    Alert.alert('Amazon hesabınız başarıyla oluşturuldu.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hoş Geldiniz</Text>
      <View style={styles.optionContainer}>
        <CheckBox isChecked={true} disabled={true} checkBoxColor="#000" />
        <Text style={styles.optionText}>Amazon hesabınız yok mu?</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Adı ve soyadı"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="E-posta adresiniz"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Parola oluşturun"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.checkboxContainer}>
        <CheckBox
          isChecked={isTermsAccepted}
          onClick={() => setIsTermsAccepted(!isTermsAccepted)}
          checkBoxColor="#000"
        />
        <Text style={styles.checkboxText}>Şartları Kabul Ediyorum.</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
        <Text style={styles.buttonText}>Amazon hesabınızı oluşturun</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>
        Amazon'dan teklif ve promosyonlar da dahil olmak üzere ticari elektronik
        ileti almayı ve Amazon'un kişisel verilerimi aynı amaçla işlemesini
        kabul ediyorum. Yasal gereği e-posta adresinizi ileti yoluyla işleriz.
        Sistem, A.Ş., veya yasal işlem, A.Ş. izin, veri güvenliği konusunda
        aldığı tedbirler üzerinde herhangi bir kontrolümüz bulunmamaktadır.
      </Text>
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxText: {
    fontSize: 16,
    marginLeft: 10,
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
});

export default SignUpScreen;
