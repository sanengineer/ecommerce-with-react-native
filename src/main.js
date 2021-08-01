import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
// import { SafeAreaView } from 'react-native';

function App(props) {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}

export default App;
