import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavHeader } from '../../components';

const TermCondition = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.safeContianer}>
      <NavHeader navigation={navigation} title={route.name} />
    </SafeAreaView>
  );
};

export default TermCondition;

const styles = StyleSheet.create({
  safeContianer: {
    flex: 1,
  },
});
