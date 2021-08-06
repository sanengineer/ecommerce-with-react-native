import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Space } from '../../atoms';
import TextSubtextInput from '../TextSubtextInput';

const FormTextSubtext = ({
  text = 'Text',
  subtext = '...',
  borderBottomColor = '#cecece',
  borderBottomWidth = 1,
  textFam = 'CircularStd-Book',
  color = '#747474',
  textColor = '#000',
  ...props
}) => (
  <>
    <View style={styles.formContainer(borderBottomColor, borderBottomWidth)}>
      <TextSubtextInput
        bottomHeight={6}
        text={text}
        textFam={textFam}
        textSize={12}
        subtext={subtext}
        subtextSize={16}
        textColor={textColor}
        subtextFam="CircularStd-Book"
        {...props}
      />
    </View>
    <Space height={30} />
  </>
);

export default FormTextSubtext;

const styles = StyleSheet.create({
  formContainer: (borderBottomColor, borderBottomWidth) => ({
    // backgroundColor: 'red',
    borderBottomColor: borderBottomColor,
    borderBottomWidth: borderBottomWidth,
    flex: 1,
  }),
});
