import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Platform } from 'react-native';
import { Space, Header, Button, TextField, TextInput } from '../../components';

import { DismissKeyboard, KeyboardScrollUpForms, useForm } from '../../utils';

const LogIn = ({ navigation }) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const onSubmit = () => {
    console.log('form:', form);
  };
  return (
    <DismissKeyboard>
      <View style={styles.page}>
        <KeyboardScrollUpForms
          enabled
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
          <Space height={20} />
          <Header
            title="Login"
            desc="For buying drinks and beverages, login first."
          />
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={styles.container}>
              <TextInput
                label="Email"
                placeholder="mylatte@coffee.com"
                onChangeText={value => setForm('email', value)}
              />
              <Space height={30} />
              <TextInput
                label="Password"
                placeholder="******"
                onChangeText={value => setForm('password', value)}
                secureTextEntry
              />
              <Space height={50} />
              <Button
                label="Login"
                fontFam="CircularStd-Bold"
                txtDecorationLine="none"
                onPress={() => navigation.replace('SuccessLogin')}
              />
              <Space height={30} />
              <Button
                label="Create Account"
                txtSize={12}
                bgColor="#fff"
                textColor="#000"
                fontFam="CircularStd-Bold"
                onPress={() => navigation.navigate('Register')}
              />
            </View>
          </ScrollView>
        </KeyboardScrollUpForms>
      </View>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.compose({
  page: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 24,
    marginTop: 0,
    flex: 1,
  },
});

export default LogIn;
