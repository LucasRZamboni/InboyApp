import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './screens/Navigation/AppNavigator';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#ff9800" barStyle="light-content" />
      <AppNavigator />
    </SafeAreaProvider>
  );
};

export default App;