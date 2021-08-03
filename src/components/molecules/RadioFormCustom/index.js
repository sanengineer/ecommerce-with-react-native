import React from 'react';
import RadioForm, {
  RadioButton as RadioButtonRN,
  RadioButtonInput,
} from 'react-native-simple-radio-button';

const RadioFormCustom = ({ radio_props }) => {
  //
  //debug
  console.log('RADIO_PROPS:', radio_props);
  return (
    <RadioForm animation={true} formHorizontal={true}>
      {radio_props.map((obj, i) => (
        <RadioButtonRN
          labelHorizontal={true}
          key={i}
          style={{
            // paddingHorizontal: 30,
            // paddingBottom: 20,
            // paddingTop: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 10,
            // backgroundColor: 'red',
            width: 50,
          }}>
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
