import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavHeader } from '../../components';

const Help = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <NavHeader navigation={navigation} title={route.name} />
    </SafeAreaView>
  );
};

export default Help;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
});
