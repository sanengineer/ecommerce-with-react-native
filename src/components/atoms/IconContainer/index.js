import React from 'react';
import { StyleSheet, View } from 'react-native';

const IconContainer = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default IconContainer;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});
