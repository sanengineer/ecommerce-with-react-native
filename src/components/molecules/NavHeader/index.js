import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { IconAngleLeftBig } from '../../../assets';

const NavHeader = ({ navigation, title = 'Nav Header' }) => {
  return (
    <View style={styles.navHeaderContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.iconBackContainer}>
          <IconAngleLeftBig />
        </View>
      </TouchableOpacity>
      <Text style={styles.textHeader}>{title}</Text>
      <View style={{ position: 'relative' }}>
        <TouchableOpacity onPress={() => console.log('item')}>
          <View style={{ zIndex: 2 }}>
            <Text style={styles.notifNumber}>16</Text>
          </View>
          <View>
            <Text style={{ fontSize: 34 }}>🛒</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavHeader;

const styles = StyleSheet.create({
  navHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#e7e7e7',
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingTop: 5,
    paddingHorizontal: 20,
  },
  iconBackContainer: {
    //   backgroundColor: 'red',
    left: -10,
  },
  textHeader: {
    fontFamily: 'CircularStd-Bold',
    fontSize: 18,
    textTransform: 'capitalize',
  },
  notifNumber: {
    backgroundColor: 'red',
    position: 'absolute',
    fontSize: 13,
    top: -10,
    right: 0,
    fontFamily: 'CircularStd-Bold',
    color: '#fff',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
    overflow: 'hidden',
  },
});
