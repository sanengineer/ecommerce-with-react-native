import React from 'react';

import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavHeader } from '../../components';

const AddNoteOrder = ({ navigation }) => {
  return (
    <SafeAreaView>
      <NavHeader navigation={navigation} />
    </SafeAreaView>
  );
};

export default AddNoteOrder;

const styles = StyleSheet.create({});
