import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Space } from '../../atoms';

const IconText = ({
  showIcon = true,
  icon = '🤖',
  width = 10,
  text = 'Text',
  iconSize = 18,
  paddingX = 10,
}) => {
  return (
    <View style={styles.container(paddingX)}>
      {showIcon ? <Text style={styles.icon(iconSize)}>{icon}</Text> : null}
      <Space width={width} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default IconText;

const styles = StyleSheet.create({
  container: paddingX => ({
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: paddingX,
    // backgroundColor: 'red',
  }),
  icon: iconSize => ({
    fontSize: iconSize,
  }),
  text: {
    fontSize: 16,
    fontFamily: 'CircularStd-Bold',
  },
});
