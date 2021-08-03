import React from 'react';
import { StyleSheet, View } from 'react-native';

const Dot = ({ square = 7, borderRadius = 100, bgColor = '#000' }) => {
  return <View style={styles.dot(square, borderRadius, bgColor)} />;
};

export default Dot;

const styles = StyleSheet.create({
  dot: (square, borderRadius, bgColor) => ({
    height: square,
    width: square,
    borderRadius: borderRadius,
    backgroundColor: bgColor,
  }),
});
