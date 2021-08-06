import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Space } from '../../atoms';

const TextSubtextInput = ({
  textSize,
  textFam,
  text = 'Text',
  midHeight = 10,
  subtextSize,
  subtextFam,
  subtext = 'Subtext',
  bottomHeight = 0,
  boldOn = false,
  textColor = '#fff',
  boldFamily,
  bold_text,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text(textSize, textFam, textColor)}>
        {text}
        {boldOn ? (
          <Text style={{ fontFamily: `${boldFamily}` }}>{bold_text}</Text>
        ) : (
          <></>
        )}
      </Text>
      <Space height={midHeight} />
      <TextInput
        style={styles.subtext(subtextSize, subtextFam)}
        placeholder={subtext}
      />
      <Space height={bottomHeight} />
    </View>
  );
};

export default TextSubtextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  text: (textSize, textFam, textColor) => ({
    fontSize: textSize,
    fontFamily: textFam,
    textTransform: 'capitalize',
    color: textColor,
  }),
  subtext: (subtextSize, subtextFam) => ({
    fontSize: subtextSize,
    fontFamily: subtextFam,
    paddingVertical: 8,
    // textTransform: 'capitalize',
    // backgroundColor: 'aqua',
  }),
});
