import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Border = ({ height = 10, backgroundColor = '#EFEFEF' }) => (
  <View style={styles.box(height, backgroundColor)} />
);

export default Border;

const styles = StyleSheet.create({
  box: (height, backgroundColor) => ({
    height: height,
    backgroundColor: backgroundColor,
  }),
});
