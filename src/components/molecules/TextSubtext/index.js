import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Space } from '../../atoms';

const TextSubtext = ({
  textSize = 12,
  textFam = 'CircularStd-Book',
  text = 'Text',
  midHeight = 7,
  subtextSize = 16,
  subtextFam = 'CircularStd-Bold',
  subtext = 'Subtext',
  bottomHeight = 0,
}) => {
  return (
    <>
      <Text style={styles.text(textSize, textFam)}>{text}</Text>
      <Space height={midHeight} />
      <Text style={styles.subtext(subtextSize, subtextFam)}>{subtext}</Text>
      <Space height={bottomHeight} />
    </>
  );
};

export default TextSubtext;

const styles = StyleSheet.create({
  text: (textSize, textFam) => ({
    fontSize: textSize,
    fontFamily: textFam,
    textTransform: 'capitalize',
  }),
  subtext: (subtextSize, subtextFam) => ({
    fontSize: subtextSize,
    fontFamily: subtextFam,
    textTransform: 'capitalize',
  }),
});
