import React from 'react';
import { SafeAreaView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { IconTextNav, NavHeader } from '../../components';

const Security = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <NavHeader navigation={navigation} title={route.name} />

      <IconTextNav hideIcon={true} text="Change PIN" />
    </SafeAreaView>
  );
};

export default Security;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
