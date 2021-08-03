import React from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';
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
  boldFamily,
  bold_text,
}) => {
  return (
    <>
      <Text style={styles.text(textSize, textFam)}>
        {text}
        {boldOn ? (
          <Text style={{ fontFamily: `${boldFamily}` }}>{bold_text}</Text>
        ) : null}
      </Text>
      <Space height={midHeight} />
      <TextInput
        style={styles.subtext(subtextSize, subtextFam)}
        placeholder={subtext}
      />
      <Space height={bottomHeight} />
    </>
  );
};

export default TextSubtextInput;

const styles = StyleSheet.create({
  text: (textSize, textFam) => ({
    fontSize: textSize,
    fontFamily: textFam,
    textTransform: 'capitalize',
  }),
  subtext: (subtextSize, subtextFam) => ({
    fontSize: subtextSize,
    fontFamily: subtextFam,
    paddingVertical: 8,
    // backgroundColor: 'red',
  }),
});
