import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Space } from '../../atoms';

const IconText = ({
  showIcon = true,
  icon = '🤖',
  width = 10,
  text = 'Text',
  iconSize = 18,
  paddingY = 10,
  paddingX = 20,
  color = 'black',
  textSize = 16,
  textFam = 'CircularStd-Bold',
}) => {
  return (
    <View style={styles.container(paddingY, paddingX)}>
      {showIcon ? <Text style={styles.icon(iconSize)}>{icon}</Text> : <></>}
      <Space width={width} />
      <Text style={styles.text(color, textSize, textFam)}>{text}</Text>
    </View>
  );
};

export default IconText;

const styles = StyleSheet.create({
  container: (paddingY, paddingX) => ({
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: paddingY,
    marginHorizontal: paddingX,
    // backgroundColor: 'red',
  }),
  icon: iconSize => ({
    fontSize: iconSize,
    // backgroundColor: 'grey',
  }),
  text: (color, textSize, textFam) => ({
    color: color,
    fontSize: textSize,
    fontFamily: textFam,
    // backgroundColor: 'aqua',
  }),
});
