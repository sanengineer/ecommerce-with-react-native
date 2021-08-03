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
  color = 'black',
  textSize = 16,
  textFam = 'CircularStd-Bold',
}) => {
  return (
    <View style={styles.container(paddingY)}>
      {showIcon ? <Text style={styles.icon(iconSize)}>{icon}</Text> : null}
      <Space width={width} />
      <Text style={styles.text(color, textSize, textFam)}>{text}</Text>
    </View>
  );
};

export default IconText;

const styles = StyleSheet.create({
  container: paddingY => ({
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: paddingY,
    // backgroundColor: 'red',
  }),
  icon: iconSize => ({
    fontSize: iconSize,
  }),
  text: (color, textSize, textFam) => ({
    color: color,
    fontSize: textSize,
    fontFamily: textFam,
  }),
});
