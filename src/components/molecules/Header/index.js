import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = ({ title, desc }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.compose({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 0,
  },
  title: {
    fontFamily: 'CircularStd-Bold',
    fontSize: 34,
    marginBottom: 10,
  },
  desc: {
    fontFamily: 'CircularStd-Book',
    fontSize: 24,
    lineHeight: 35,
  },
});
