import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Sample transaction data
const transactions = [
  {
    id: '1',
    title: 'Lorem Ipsum Company',
    subtitle: 'Received payment',
    amount: 2350.00,
    date: '15/03/2024',
    type: 'credit',
  },
  {
    id: '2',
    title: 'Doctor Eat LTD',
    subtitle: 'Food delivery',
    amount: 1450.00,
    date: '12/03/2024',
    type: 'debit',
  },
  {
    id: '3',
    title: 'Service XYZ Area',
    subtitle: 'Bank & something payment',
    amount: 3225.50,
    date: '08/03/2024',
    type: 'debit',
  },
  {
    id: '4',
    title: 'InvestBank Account',
    subtitle: 'Withdraw service',
    amount: 2512.30,
    date: '01/03/2024',
    type: 'debit',
  },
];

const DashboardScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoContainer}>
        <Icon name="account-circle" size={60} color="#4CAF50" />
        <Text style={styles.userName}>Cesar Balzan</Text>
        <Text style={styles.userEmail}>cesar@inboy.com.br</Text>
      </View>

      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>SALDO DISPONÍVEL</Text>
        <Text style={styles.balanceAmount}>R$ 4.180,20</Text>
        <TouchableOpacity style={styles.transferButton}>
          <Text style={styles.transferButtonText}>TRANSFERIR</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.transactionsContainer}>
        <Text style={styles.transactionsTitle}>HISTÓRICO DE TRANSAÇÕES</Text>
        
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.transactionItem}>
              <View style={styles.transactionIconContainer}>
                <View style={[
                  styles.transactionIcon,
                  { backgroundColor: item.type === 'credit' ? '#4CAF50' : '#F44336' }
                ]}>
                  <Icon 
                    name={item.type === 'credit' ? 'arrow-downward' : 'arrow-upward'} 
                    size={20} 
                    color="#FFFFFF" 
                  />
                </View>
              </View>
              
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionTitle}>{item.title}</Text>
                <Text style={styles.transactionSubtitle}>{item.subtitle}</Text>
              </View>
              
              <View style={styles.transactionAmountContainer}>
                <Text 
                  style={[
                    styles.transactionAmount,
                    { color: item.type === 'credit' ? '#4CAF50' : '#F44336' }
                  ]}
                >
                  {item.type === 'debit' ? '-' : '+'} R$ {item.amount.toFixed(2)}
                </Text>
                <Text style={styles.transactionDate}>{item.date}</Text>
              </View>
            </View>
          )}
        />
        
        <TouchableOpacity 
          style={styles.viewAllButton}
          onPress={() => navigation.navigate('Transactions')}
        >
          <Text style={styles.viewAllButtonText}>Ver tudo</Text>
          <Icon name="arrow-forward" size={16} color="#4CAF50" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  userInfoContainer: {
    backgroundColor: '#F9A825',
    padding: 20,
    alignItems: 'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 10,
  },
  userEmail: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.8,
  },
  balanceContainer: {
    backgroundColor: '#FFFFFF',
    margin: 15,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 2,
  },
  balanceLabel: {
    fontSize: 14,
    color: '#757575',
  },
  balanceAmount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginVertical: 10,
  },
  transferButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  transferButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  transactionsContainer: {
    flex: 1,
    padding: 15,
  },
  transactionsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#424242',
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  transactionIconContainer: {
    marginRight: 15,
  },
  transactionIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transactionDetails: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#424242',
  },
  transactionSubtitle: {
    fontSize: 14,
    color: '#757575',
  },
  transactionAmountContainer: {
    alignItems: 'flex-end',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionDate: {
    fontSize: 12,
    color: '#757575',
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  viewAllButtonText: {
    fontSize: 14,
    color: '#4CAF50',
    marginRight: 5,
  },
});

export default DashboardScreen;