import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ListText = ({
  text,
  color = 'black',
  size = 16,
  fontFam = 'CircularStd-Book',
  paddingX = 0,
  paddingY = 0,
}) => {
  return (
    <View style={styles.listTextContainer(paddingX, paddingY)}>
      <Text style={styles.text(color, size, fontFam)}>{text}</Text>
    </View>
  );
};

export default ListText;

const styles = StyleSheet.create({
  listTextContainer: (paddingX, paddingY) => ({
    paddingVertical: paddingX,
    paddingHorizontal: paddingY,
    justifyContent: 'center',
  }),
  text: (color, size, fontFam) => ({
    fontFamily: fontFam,
    fontSize: size,
    color: color,
    textAlign: 'center',
  }),
});
