import React from 'react';
import { TouchableNativeFeedback, Keyboard } from 'react-native';

const DismissKeyboard = ({ children }) => (
  <TouchableNativeFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableNativeFeedback>
);

export default DismissKeyboard;
