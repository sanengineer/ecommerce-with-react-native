import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

const StartScreen = props => {
  const [data, setData] = useState();

  useEffect(() => {
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem('user');

      if (!userData) {
        props.navigation.navigate;
      }
    };
  });
};

export default StartScreen;
