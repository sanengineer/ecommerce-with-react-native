import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { IconAngleLeftBig } from '../../../assets';
import { Space } from '../../atoms';

const NavHeader = ({
  navigation,
  navGoBack = true,
  title = 'Nav Header',
  children,
  borderWidth = 1,
  borderColor = '#e7e7e7',
}) => {
  return (
    <View style={styles.navHeaderContainer(borderWidth, borderColor)}>
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
  navHeaderContainer: (borderWidth, borderColor) => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: borderWidth,
    borderBottomColor: borderColor,
    paddingBottom: 10,
    paddingTop: 10,
    paddingHorizontal: 20,
  }),
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
