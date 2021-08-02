import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { IconAngleLeftBig } from '../../../assets';
import { Space } from '../../atoms';

const NavHeader = ({
  navigation,
  navGoBack = true,
  title = 'Nav Header',
  children,
}) => {
  return (
    <View style={styles.navHeaderContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        {navGoBack ? (
          <View style={styles.iconBackContainer}>
            <IconAngleLeftBig />
          </View>
        ) : (
          <View>
            <Space width={30} />
          </View>
        )}
      </TouchableOpacity>
      <Text style={styles.textHeader}>{title}</Text>
      <View>{children ? children : <Space width={30} />}</View>
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
    paddingBottom: 20,
    paddingTop: 20,
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
});
