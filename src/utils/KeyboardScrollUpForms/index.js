import React from 'react';
import { KeyboardAvoidingView } from 'react-native';

const KeyboardScrollUpForms = ({ children, ...props }) => (
  <KeyboardAvoidingView style={{ flex: 1 }} {...props}>
    {children}
  </KeyboardAvoidingView>
);

export default KeyboardScrollUpForms;
