import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Switch,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BankAccountScreen = ({ navigation }) => {
  const [bankName, setBankName] = useState('');
  const [agency, setAgency] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [accountType, setAccountType] = useState('');
  const [isDepositAuthorized, setIsDepositAuthorized] = useState(false);

  const handleContinue = () => {
    // Process bank account info and navigate
    navigation.navigate('UserProfile');
  };

  const handleCancel = () => {
    // Go back or clear form
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={('../assets/images/inboy-logo-small.png')}
          style={styles.smallLogo}
        />
        <Text style={styles.headerText}>CADASTRE SUA CONTA BANCÁRIA</Text>
      </View>

      <ScrollView style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Banco"
            value={bankName}
            onChangeText={setBankName}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Agência"
            value={agency}
            onChangeText={setAgency}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Conta Corrente"
            value={accountNumber}
            onChangeText={setAccountNumber}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Tipo de Conta (Corrente/Poupança)"
            value={accountType}
            onChangeText={setAccountType}
          />
        </View>

        <Text style={styles.infoText}>Use o formato 0123-4</Text>

        <View style={styles.switchContainer}>
          <Switch
            value={isDepositAuthorized}
            onValueChange={setIsDepositAuthorized}
            trackColor={{ false: '#ccc', true: '#4caf50' }}
            thumbColor={isDepositAuthorized ? '#fff' : '#f4f3f4'}
          />
          <Text style={styles.switchText}>
            Autorizo Inboy a ter Acesso e Efetuar os Procedimentos
          </Text>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity 
            style={styles.cancelButton}
            onPress={handleCancel}
          >
            <Text style={styles.cancelButtonText}>CANCELAR</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.continueButton}
            onPress={handleContinue}
          >
            <Text style={styles.continueButtonText}>ACEITAR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff9800',
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  smallLogo: {
    height: 40,
    width: 40,
    marginBottom: 10,
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
  },
  infoText: {
    color: '#fff',
    fontSize: 12,
    marginBottom: 15,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 14,
    flex: 1,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  continueButton: {
    backgroundColor: '#4caf50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#ff9800',
    fontWeight: 'bold',
  },
});

export default BankAccountScreen;