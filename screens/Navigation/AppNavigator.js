import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';  // Importe o Drawer

import { MaterialIcons } from '@expo/vector-icons';

// Import screens
import WelcomeScreen from '../../screens/Welcome/WelcomeScreen';
import BankAccountScreen from '../../screens/BankAccount/BankAccountScreen';
import UserProfileScreen from '../UserProfile/UserProfileScreen';
import TransactionsScreen from '../../screens/Transactions/TransactionsScreen';
import RestaurantListScreen from '../../screens/RestaurantList/RestaurantListScreen';
import ReservationScreen from '../../screens/Reservation/ReservationScreen';
import MainMenuScreen from '../../screens/MainMenu/MainMenuScreen';
import DeliveryTrackingScreen from '../../screens/DeliveryTracking/DeliveryTrackingScreen';
import DashboardScreen from '../UserDashboard/DashboardScreen';

// Create navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();  // Defina o Drawer Navigator

// Main tab navigator (after login)
const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#4caf50',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopColor: '#eee',
          height: 55, // Ajuste a altura se necessário
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="MainMenu"
        component={MainMenuScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={TransactionsScreen}
        options={{
          tabBarLabel: 'Transações',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="account-balance-wallet" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="RestaurantList"
        component={RestaurantListScreen}
        options={{
          tabBarLabel: 'Restaurantes',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="restaurant" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Reservation"
        component={ReservationScreen}
        options={{
          tabBarLabel: 'Reservas',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="book-online" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="DeliveryTracking"
        component={DeliveryTrackingScreen}
        options={{
          tabBarLabel: 'Entregas',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="delivery-dining" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Crie o Stack para as telas de "Conta Bancária" e "UserProfile"
const BankAccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BankAccount"
        component={BankAccountScreen}
        options={{ headerShown: false }} // Ou personalizar o header
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfileScreen}
        options={{ headerShown: false }} // Ou personalizar o header
      />
    </Stack.Navigator>
  );
};

// Main Drawer Navigator
const MainDrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={MainTabNavigator}  // Incluindo o Tab Navigator dentro do Drawer
      />
      <Drawer.Screen
        name="BankAccount"
        component={BankAccountStack}  // Aqui você pode incluir o Stack da Conta Bancária
      />
      <Drawer.Screen
        name="UserProfile"
        component={UserProfileScreen}
      />
      <Drawer.Screen
        name="Dashboard"
        component={DashboardScreen}
      />
    </Drawer.Navigator>
  );
};

// Auth navigator (before login)
const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#ff9800' },
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="UserProfile" component={UserProfileScreen} />
      <Stack.Screen name="BankAccount" component={BankAccountScreen} />
    </Stack.Navigator>
  );
};

// Root navigator
const AppNavigator = () => {
  // Você pode usar um estado de autenticação real aqui
  const isAuthenticated = true; // Substitua isso pela verificação de autenticação real

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <Stack.Screen name="Main" component={MainDrawerNavigator} />  // Usando o Drawer como principal
        ) : (
          <Stack.Screen name="Auth" component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
