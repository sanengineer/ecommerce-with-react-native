import React from 'react';
import { StyleSheet } from 'react-native';
import RadioForm, {
  RadioButton as RadioButtonRN,
  RadioButtonInput,
} from 'react-native-simple-radio-button';

const RadioFormCustom = ({
  radio_props,
  alignItems = 'center',
  justifyContent = 'center',
  marginRight = 10,
  width = 50,
}) => {
  //
  //debug
  console.log('RADIO_PROPS:', radio_props);
  return (
    <RadioForm animation={true} formHorizontal={true}>
      {radio_props.map((obj, i) => (
        <RadioButtonRN
          labelHorizontal={true}
          key={i}
          style={styles.radioButton(
            marginRight,
            width,
            justifyContent,
            alignItems,
          )}>
          <RadioButtonInput
            obj={obj}
            index={i}
            isSelected={i}
            onPress={() => console.log('radio button')}
            borderWidth={1}
            buttonInnerColor={'#000'}
            buttonOuterColor={'#000'}
            buttonSize={10}
            buttonOuterSize={20}
            buttonStyle={{}}
            buttonWrapStyle={{ marginLeft: 0 }}
          />
        </RadioButtonRN>
      ))}
    </RadioForm>
  );
};

export default RadioFormCustom;

const styles = StyleSheet.create({
  radioButton: (marginRight, width, justifyContent, alignItems) => ({
    marginRight: marginRight,
    width: width,
    justifyContent: justifyContent,
    alignItems: alignItems,
  }),
});
