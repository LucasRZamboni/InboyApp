import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TransactionsScreen = ({ navigation }) => {
  // Sample transaction data
  const transactions = [
    {
      id: '1',
      type: 'deposit',
      company: 'Lorem Ipsum Company',
      description: 'Delivered payment',
      amount: 1120.00,
      date: '12/03/24',
    },
    {
      id: '2',
      type: 'deposit',
      company: 'Acme Co Ltd',
      description: 'Package delivery',
      amount: 1450.00,
      date: '10/03/24',
    },
    {
      id: '3',
      type: 'deposit',
      company: 'XYZ Inc Store',
      description: 'Food & beverage delivery',
      amount: 2734.50,
      date: '08/03/24',
    },
    {
      id: '4',
      type: 'deposit',
      company: 'Coffee Shop',
      description: 'Weekend delivery',
      amount: 678.50,
      date: '07/03/24',
    },
  ];

  // Calculate total balance
  const totalBalance = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);

  const renderTransactionItem = ({ item }) => (
    <View style={styles.transactionItem}>
      <View style={styles.statusIconContainer}>
        <Icon name="check-circle" size={24} color="#4caf50" />
      </View>
      <View style={styles.transactionDetails}>
        <Text style={styles.companyName}>{item.company}</Text>
        <Text style={styles.transactionDescription}>{item.description}</Text>
      </View>
      <View style={styles.transactionAmountContainer}>
        <Text style={styles.transactionAmount}>R${item.amount.toFixed(2)}</Text>
        <Text style={styles.transactionDate}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="menu" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>HISTÓRICO DE TRANSAÇÕES</Text>
        <TouchableOpacity>
          <Icon name="settings" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.userInfoContainer}>
        <View style={styles.avatarContainer}>
          <Icon name="person" size={40} color="#fff" />
        </View>
        <View style={styles.userDetails}>
          <Text style={styles.userName}>César Balzani</Text>
          <Text style={styles.userEmail}>email@provedor.com</Text>
        </View>
      </View>

      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>SALDO DISPONÍVEL</Text>
        <Text style={styles.balanceAmount}>R$ {totalBalance.toFixed(2)}</Text>
        <TouchableOpacity style={styles.transferButton}>
          <Text style={styles.transferButtonText}>TRANSFERIR</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.transactionsContainer}>
        <Text style={styles.sectionTitle}>HISTÓRICO DE TRANSAÇÕES</Text>
        <FlatList
          data={transactions}
          renderItem={renderTransactionItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllButtonText}>Ver mais</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff9800',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4caf50',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  userEmail: {
    color: '#fff',
    fontSize: 14,
    opacity: 0.8,
  },
  balanceContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 20,
    padding: 20,
    alignItems: 'center',
  },
  balanceLabel: {
    color: '#888',
    fontSize: 14,
    marginBottom: 5,
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
  },
  transferButton: {
    backgroundColor: '#4caf50',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  transferButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  transactionsContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  transactionItem: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
  statusIconContainer: {
    marginRight: 10,
  },
  transactionDetails: {
    flex: 1,
  },
  companyName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionDescription: {
    fontSize: 14,
    color: '#777',
  },
  transactionAmountContainer: {
    alignItems: 'flex-end',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4caf50',
  },
  transactionDate: {
    fontSize: 12,
    color: '#777',
  },
  viewAllButton: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  viewAllButtonText: {
    color: '#ff9800',
    fontWeight: 'bold',
  },
});

export default TransactionsScreen;