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

const DeliveryTrackingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Map View */}
      <View style={styles.mapContainer}>
        <Image 
          source={require('../../assets/map-placeholder.png')} 
          style={styles.map}
          resizeMode="cover"
        />

        {/* Map Markers - These would be overlaid on the actual map */}
        <View style={styles.userMarker}>
          <Icon name="person-pin-circle" size={30} color="#4CAF50" />
        </View>
        <View style={styles.deliveryMarker}>
          <Icon name="delivery-dining" size={30} color="#F9A825" />
        </View>
      </View>

      {/* Delivery Info Panel */}
      <View style={styles.deliveryInfoPanel}>
        <View style={styles.deliveryHeader}>
          <Text style={styles.deliveryTitle}>VALOR DA ENTREGA</Text>
        </View>

        <View style={styles.priceInputContainer}>
          <Text style={styles.currencySymbol}>R$</Text>
          <TextInput
            style={styles.priceInput}
            value="1.000,00"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.confirmButton}>
            <Text style={styles.confirmButtonText}>CONFIRMAR</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>CANCELAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  mapContainer: {
    flex: 1,
    position: 'relative',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  userMarker: {
    position: 'absolute',
    top: '40%',
    left: '30%',
  },
  deliveryMarker: {
    position: 'absolute',
    top: '60%',
    right: '30%',
  },
  deliveryInfoPanel: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  deliveryHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  deliveryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#424242',
  },
  priceInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  currencySymbol: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#424242',
    marginRight: 5,
  },
  priceInput: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  confirmButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  cancelButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#757575',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default DeliveryTrackingScreen;