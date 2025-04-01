import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ReservationScreen = ({ route }) => {
  // Get restaurant info from route params
  const { restaurant } = route.params || {}; 
  const restaurantName = restaurant?.name || 'Restaurante X';
  const restaurantAddress = restaurant?.address || 'Endereço desconhecido';
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.qrContainer}>
        <Text style={styles.qrTitle}>ESCANEIE O CÓDIGO</Text>
        <Image 
          source={require('../../assets/qr-code-placeholder.png')} 
          style={styles.qrCode}
          resizeMode="contain"
        />
        <Text style={styles.restaurantName}>{restaurantName}</Text>
        <Text style={styles.restaurantAddress}>{restaurantAddress}</Text>
      </View>
  
      <View style={styles.separator} />
  
      <View style={styles.barcodeContainer}>
        <Image 
          source={require('../../assets/barcode-placeholder.png')} 
          style={styles.barcode}
          resizeMode="contain"
        />
      </View>
  
      <View style={styles.helpContainer}>
        <Text style={styles.helpText}>Não conseguiu escanear?</Text>
        <TouchableOpacity>
          <Text style={styles.helpLink}>Peça ajuda ao garçom</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  qrContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  qrTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#424242',
    marginBottom: 20,
  },
  qrCode: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#424242',
    marginBottom: 5,
  },
  restaurantAddress: {
    fontSize: 14,
    color: '#757575',
  },
  separator: {
    width: '80%',
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 20,
  },
  barcodeContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  barcode: {
    width: 280,
    height: 80,
  },
  helpContainer: {
    position: 'absolute',
    bottom: 30,
    alignItems: 'center',
  },
  helpText: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 5,
  },
  helpLink: {
    fontSize: 14,
    color: '#F9A825',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default ReservationScreen;