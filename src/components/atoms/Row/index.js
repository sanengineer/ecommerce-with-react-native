import React from 'react';
import { StyleSheet, View } from 'react-native';

const Row = ({
  paddingTop = 30,
  paddingHorizontal = 20,
  paddingBottom = 30,
  borderBottomWidth = 1,
  borderBottomColor = '#F2F2F2',
  flexDirection = false,
  children,
}) => (
  <View
    style={styles.row(
      paddingTop,
      paddingHorizontal,
      paddingBottom,
      borderBottomWidth,
      borderBottomColor,
      flexDirection,
    )}>
    {children}
  </View>
);

export default Row;

const styles = StyleSheet.create({
  row: (
    paddingTop,
    paddingHorizontal,
    paddingBottom,
    borderBottomWidth,
    borderBottomColor,
    flexDirection,
  ) => ({
    paddingTop: paddingTop,
    paddingHorizontal: paddingHorizontal,
    paddingBottom: paddingBottom,
    borderBottomWidth: borderBottomWidth,
    borderBottomColor: borderBottomColor,
    flexDirection: flexDirection ? 'row' : 'column',
  }),
});
