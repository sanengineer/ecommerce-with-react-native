import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Space } from '../../atoms';
import TextSubtextInput from '../TextSubtextInput';

const FormTextSubtext = ({ text = 'Text', subtext = '...', ...props }) => (
  <>
    <View style={styles.formContainer}>
      <TextSubtextInput
        bottomHeight={6}
        text={text}
        textSize={12}
        subtext={subtext}
        subtextSize={16}
        subtextFam="CircularStd-Book"
        {...props}
      />
    </View>
    <Space height={30} />
  </>
);

export default FormTextSubtext;

const styles = StyleSheet.create({
  formContainer: {
    // backgroundColor: 'red',
  },
});
