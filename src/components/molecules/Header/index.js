import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = ({ title, desc, showDesc = true }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {showDesc && <Text style={styles.desc}>{desc}</Text>}
    </View>
  );
};

export default Header;

const styles = StyleSheet.compose({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 0,
    paddingBottom: 0,
    // backgroundColor: 'red',
  },
  title: {
    fontFamily: 'CircularStd-Bold',
    fontSize: 24,
    marginBottom: 0,
  },
  desc: {
    fontFamily: 'CircularStd-Book',
    fontSize: 16,
    lineHeight: 25,
    paddingRight: 50,
  },
});
