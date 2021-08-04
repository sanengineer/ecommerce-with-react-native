import React from 'react';

import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavHeader } from '../../components';

const AddNoteOrder = ({ navigation, route }) => {
  return (
    <SafeAreaView>
      <NavHeader navigation={navigation} title={route.name} />
    </SafeAreaView>
  );
};

export default AddNoteOrder;

const styles = StyleSheet.create({});
